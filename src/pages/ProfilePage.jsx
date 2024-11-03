import { useState, useEffect } from "react";
import authService from "../appwrite/auth";
import service from "../appwrite/configAppwrite";
import { Badge } from "../components/ui/badge";
import { Input } from "../componenets";
import toast, { Toaster } from "react-hot-toast";

const ProfilePage = () => {
  const [drafts, setDrafts] = useState([]);
  const [myBlogs, setMyBlogs] = useState([]);
  const [profile, setProfile] = useState({
    name: "",
    bio: "A passionate blog Writer",
    image: "",
  });
  const [userId, setUserId] = useState(null);
  const [newDraftTitle, setNewDraftTitle] = useState("");
  const [newDraftDetails, setNewDraftDetails] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  // Fetch current user data
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const user = await authService.getCurrentUser();
        console.log("first");
        console.log(user);
        if (user) {
          setProfile({
            name: user.name || "", // Adjust according to your user object structure
            bio: user.prefs.bio || "No bio available.", // Adjust according to your user object structure
            image: user.prefs.image || "no image available",
          });
          setUserId(user.$id);
          console.log("firstuser", userId);
        }
        console.log("first", user);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };

    fetchCurrentUser();
  }, []);

  // Fetch posts related to the current user
  useEffect(() => {
    const fetchPosts = async () => {
      if (userId) {
        try {
          console.log("Fetching posts for userId:", userId); // Make sure this prints the correct userId
          const posts = await service.getCurrentUsersPosts(userId);
          if (posts) {
            console.log("Fetched posts:", posts);
            setMyBlogs(posts.documents);
          }
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      }
    };

    fetchPosts();
  }, [userId]);

  // Fetch posts related to the current user
  useEffect(() => {
    const fetchDraftPosts = async () => {
      if (userId) {
        try {
          console.log("Fetching posts for userId:", userId); // Make sure this prints the correct userId
          const posts = await service.getCurrentUsersDraftPosts(userId);
          if (posts) {
            console.log("Fetched posts:", posts);
            setDrafts(posts.documents);
          }
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      }
    };

    fetchDraftPosts();
  }, [userId]);

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [id]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file); // Store the selected file
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result); // Preview the image
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null); // Clear preview if no file is selected
    }
  };

  // Handle saving changes (this can be modified to include API calls)
  // const handleSave = () => {
  //   console.log("Profile saved:", profile);
  //   alert("Profile changes saved successfully!");
  // };

  // Simulating data fetching from API with dummy data
  // useEffect(() => {
  // setMyBlogs(mockOldBlogs);
  // setDrafts(drafts)
  // }, []);

  const handleSave = async () => {
    try {
      if (selectedFile) {
        // Upload image to Appwrite
        const fileResponse = await service.uploadFile(selectedFile);
        const fileId = fileResponse.$id;

        const res1 = await authService.updateUserProfile({
          image: service.getFilePreview(fileId), // Store the image preview URL
          bio: profile.bio,
        });

        const res2 = await authService.updateName(profile.name);
        if (res1 && res2) {
          toast.success("Profile Photo updated successfully!");
          setProfile({
            name: res2.name,
            bio: res1.bio,
            image: res1.image,
          });
        } else {
          toast.error("some error occured");
        }
      } else {
        // If no image selected, just update the name and bio
        const res1 = await authService.updateUserProfile({
          bio: profile.bio,
          image: profile.image,
        });
        const res2 = await authService.updateName(profile.name);

        setProfile({
          name: res2.name,
          bio: res1.bio,
          image: profile.image,
        });

        toast.success("Updated bio and name");
      }
    } catch (error) {
      console.error("Error saving profile:", error);
      toast.error("Failed to update profile.");
    }
  };
  // Save draft (simulated)
  const handleSaveDraft = () => {
    if (newDraftTitle.trim() && newDraftDetails.trim()) {
      setDrafts([
        ...drafts,
        { title: newDraftTitle, details: newDraftDetails },
      ]);
      setNewDraftTitle("");
      setNewDraftDetails("");
    }
  };

  // Post draft to old blogs
  const handlePostDraft = (draft) => {
    setMyBlogs([...myBlogs, { title: draft.title, excerpt: draft.details }]);
    setDrafts(drafts.filter((d) => d !== draft)); // Remove the posted draft
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    if (isNaN(date)) return "Invalid Date";

    // Get day, month, and year parts
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();

    // Determine ordinal suffix for the day
    const ordinalSuffix = (day) => {
      if (day > 3 && day < 21) return "th"; // covers 11th, 12th, 13th, etc.
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    // Return formatted date
    return `${day}${ordinalSuffix(day)}-${month}'${year}`;
  };

  return (
    <div className="md:w-4/5 w-full mx-auto p-6 pb-20">
      <Toaster />
      <div className="flex w-full justify-between md:flex-row flex-col-reverse items-center">
        {/* Profile Settings */}
        <div className="mt-6 p-6 bg-white rounded-lg shadow-md md:w-3/5 w-[90%]">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Profile Settings
          </h2>
          <p className="text-gray-600 mb-6">
            Update your profile settings below.
          </p>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={profile.name}
              onChange={handleChange}
              className="border border-gray-300 p-3 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="bio"
            >
              Bio
            </label>
            <textarea
              id="bio"
              value={profile.bio}
              onChange={handleChange}
              className="border border-gray-300 p-3 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 h-32"
            ></textarea>
          </div>
          <input
            label="Upload Profile Picture:"
            type="file"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            onChange={handleImageChange}
            className="mb-4"
          />

          {imagePreview && (
            <div className="mb-4">
              <img
                src={imagePreview}
                alt="Image Preview"
                className="rounded-lg shadow-md w-[100px] h-[100px] object-cover"
              />
            </div>
          )}

          <button
            onClick={handleSave}
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Save Changes
          </button>
        </div>

        {/* Profile Header */}
        <div className="bg-white p-6 rounded-lg border-2 border-blue-300 shadow-lg md:w-1/3 h-64 flex flex-col items-center transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
          <img
            src={
              profile.image ||
              "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            alt="Profile"
            className="rounded-full object-cover w-28 h-28 border-4 border-gray-200 shadow-sm transition-transform duration-300 hover:scale-105"
          />
          <div className="ml-6">
            <h1 className="text-2xl text-center font-semibold text-gray-800 tracking-wide transition-colors duration-300 hover:text-blue-600">
              {profile.name}
            </h1>
            <p className="text-gray-500 mt-2 leading-relaxed">{profile.bio}</p>
          </div>
        </div>
      </div>
      <div className="my-8 border-t-2 border-gray-500 w-4/5 m-auto"></div>
      {/* Blog Draft List */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">My Drafts</h2>
        <ul className="space-y-3">
          {drafts.length > 0 ? (
            drafts.map((draft, index) => (
              <li
                key={index}
                className="border-b border-gray-200 pb-4 hover:bg-gray-50 transition-all duration-300 rounded-lg shadow-sm p-4"
              >
                <div className="flex justify-between items-start">
                  {/* Image and title/slug on the left */}
                  <div className="flex space-x-4 items-center">
                    {/* Blog image */}
                    <img
                      src={service.getFilePreview(draft.featuredImage)}
                      alt={draft.title}
                      className="rounded-lg shadow-md w-[100px] h-[100px] object-cover"
                    />

                    {/* Blog title and slug */}
                    <div className="flex flex-col">
                      <h3
                        className="text-3xl font-extrabold transition-colors duration-300 truncate"
                        style={{ color: "black" }} // Default text color is black
                      >
                        <span
                          className="hover:text-[#4f46e5]" // Change text color to #4f46e5 on hover
                          style={{ transition: "color 0.3s" }} // Optional: smooth transition for hover effect
                        >
                          {draft.title}
                        </span>
                      </h3>

                      <p className="text-sm text-gray-400">
                        {draft.slug || draft.title}
                      </p>
                    </div>
                  </div>

                  {/* CreatedAt date aligned to the right */}
                  <div className="text-gray-500 text-sm">
                    {formatDate(draft.$createdAt)}
                  </div>
                </div>

                {/* Metadata or default text */}
                <div className="mt-2 text-sm text-gray-600">
                  {draft.metadata ? (
                    <div>
                      <strong>Metadata:</strong> {draft.metadata}
                    </div>
                  ) : (
                    <span className="italic text-gray-400">
                      No metadata available
                    </span>
                  )}
                </div>

                {/* Blog category in badge below the title */}
                <div className="mt-3">
                  <Badge className="p-1 px-2">
                    {draft.category || "Uncategorized"}
                  </Badge>
                </div>
              </li>
            ))
          ) : (
            <p className="text-gray-500">No drafts available.</p>
          )}
        </ul>
      </div>
      <div className="my-8 border-t-2 border-gray-500 w-4/5 m-auto"></div>

      {/* Old Blog List */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">MY Blogs</h2>
        <ul className="space-y-4">
          {/* {myBlogs.length ? (
            myBlogs.map((blog, index) => (
              <li
                key={index}
                className="border-b border-gray-200 pb-4 hover:bg-gray-50 transition-all duration-300 rounded-lg shadow-sm p-4"
              >

                <div className="flex flex-col">
                <img
                      src={service.getFilePreview(blog.featuredImage)}
                      alt={blog.title}
                      className="rounded-lg shadow-md w-[150px]"
                    />
                <h3 className="text-xl font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-400">{blog.slug || blog.title}</p>
                <p className="text-gray-600 mt-2">{blog.slug}</p>
                </div>
              </li>
            ))
          ) : (
            <p className="text-gray-500">No blogs available.</p>
          )} */}

          {myBlogs.length ? (
            myBlogs.map((blog, index) => (
              <li
                key={index}
                className="border-b border-gray-200 pb-4 hover:bg-gray-50 transition-all duration-300 rounded-lg shadow-sm p-4"
              >
                <div className="flex justify-between items-start">
                  {/* Image and title/slug on the left */}
                  <div className="flex space-x-4 items-center">
                    {/* Blog image */}
                    <img
                      src={service.getFilePreview(blog.featuredImage)}
                      alt={blog.title}
                      className="rounded-lg shadow-md w-[100px] h-[100px] object-cover"
                    />

                    {/* Blog title and slug */}
                    <div className="flex flex-col">
                      <h3
                        className="text-3xl font-extrabold transition-colors duration-300 truncate"
                        style={{ color: "black" }} // Default text color is black
                      >
                        <span
                          className="hover:text-[#4f46e5]" // Change text color to #4f46e5 on hover
                          style={{ transition: "color 0.3s" }} // Optional: smooth transition for hover effect
                        >
                          {blog.title}
                        </span>
                      </h3>

                      <p className="text-sm text-gray-400">
                        {blog.slug || blog.title}
                      </p>
                    </div>
                  </div>

                  {/* CreatedAt date aligned to the right */}
                  <div className="text-gray-500 text-sm">
                    {formatDate(blog.$createdAt)}
                  </div>
                </div>

                {/* Metadata or default text */}
                <div className="mt-2 text-sm text-gray-600">
                  {blog.metadata ? (
                    <div>
                      <strong>Metadata:</strong> {blog.metadata}
                    </div>
                  ) : (
                    <span className="italic text-gray-400">
                      No metadata available
                    </span>
                  )}
                </div>

                {/* Blog category in badge below the title */}
                <div className="mt-3">
                  <Badge className="p-1 px-2">
                    {blog.category || "Uncategorized"}
                  </Badge>
                </div>
              </li>
            ))
          ) : (
            <p className="text-gray-500">No blogs available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
