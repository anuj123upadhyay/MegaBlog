import { useState, useEffect } from "react";
import authService from "../appwrite/auth";
import service from "../appwrite/configAppwrite";
import { Badge } from "../components/ui/badge";
import { Input } from "../componenets";
import toast, { Toaster } from "react-hot-toast";
import { Delete, Edit } from "lucide-react";

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
            bio: user.prefs.bio || "MegaBlog's golden star blogger!", // Adjust according to your user object structure
            image:
              user.prefs.image || "",
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

  // const handleSave = async () => {
  //   try {
  //     if (selectedFile) {
  //       // Upload image to Appwrite
  //       const fileResponse = await service.uploadFile(selectedFile);
  //       const fileId = fileResponse.$id;

  //       // Update user profile with new image URL
  //       await authService.updateUserProfile({
  //         image: service.getFilePreview(fileId), // Store the image preview URL
  //       });

  //       toast.success("Profile Photo updated successfully!");
  //     } else {
  //       // If no image selected, just update the name and bio
  //       // await authService.updateUser(userId, {
  //       //   name: profile.name,
  //       //   bio: profile.bio,
  //       // });
  //       toast.success("No selected file");
  //     }
  //   } catch (error) {
  //     console.error("Error saving profile:", error);
  //     toast.error("Failed to update profile.");
  //   }
  // };

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
    <div className="w-4/5 mx-auto p-6 pb-20">
      <Toaster />
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-xl pb-8">
        <div className="absolute right-12 mt-4 rounded">
          {/* Settings Button */}
          <button
            className="border border-gray-400 p-2 rounded text-gray-300 hover:text-gray-300 bg-gray-100 bg-opacity-10 hover:bg-opacity-20"
            title="Settings"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>
        </div>
        <div className="w-full h-[250px]">
          <img
            src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
            className="w-full h-full rounded-tl-lg rounded-tr-lg"
            alt="Profile background"
          />
        </div>
        <div className="flex flex-col items-center -mt-20">
          <img
            src={
              profile?.image ||
              "https://png.pngtree.com/png-clipart/20230912/original/pngtree-profile-pic-vector-png-image_11052670.png"
            }
            className="w-40 border-4 border-white rounded-full"
            alt="Profile"
          />
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-2xl">{profile.name}</p>
            <span className="bg-blue-500 rounded-full p-1" title="Verified">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-100 h-2.5 w-2.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
          </div>
          <p className="text-gray-700">
            {profile?.bio || "MegaBlog's golden star blogger!"}
          </p>
          <p className="text-sm text-gray-500">WorldWide</p>
        </div>
      </div>

      <h3 class="flex items-center w-full mt-12 mb-8">
        <span class="flex-grow bg-gray-200 rounded h-1"></span>
        <button class="mx-3 text-md font-medium border border-2 px-6 py-0.5 rounded-full hover:bg-gray-200">
          My Drafts
        </button>
        <span class="flex-grow bg-gray-200 rounded h-1"></span>
      </h3>

      <section className="flex flex-col justify-center antialiased bg-gray-50 text-gray-600 p-4">
        <div className="h-full">
          {drafts.length > 0 ? (
            drafts.map((draft, index) => (
              <div
                key={index}
                className="max-w-4xl mx-auto border border-indigo-600 shadow-lg rounded-lg mb-4"
              >
                <div className="px-6 py-5">
                  <div className="flex items-start">
                    <img
                      src={service.getFilePreview(draft.featuredImage)}
                      alt={draft.title}
                      className="rounded-lg shadow-md w-[100px] h-[100px] object-cover mr-4"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 mr-5 text-indigo-600"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                    >
                      <path d="M17 3a2.828 2.828 0 1 1 4 4L8 20H4v-4L17 3z" />
                    </svg>

                    <div className="flex-grow truncate">
                      <div className="w-full sm:flex justify-between items-center mb-3">
                        <h2 className="text-2xl leading-snug font-extrabold text-gray-800 truncate mb-1 sm:mb-0">
                          {draft.title}
                        </h2>
                        <div className="flex-shrink-0 flex items-center space-x-3 sm:ml-2">
                          <button className="flex items-center text-left text-sm font-medium text-gray-500 hover:text-gray-800 group focus:outline-none">
                            <svg
                              className="w-4 h-4 flex-shrink-0 mr-2 fill-current text-gray-400 group-hover:text-gray-600"
                              viewBox="0 0 16 16"
                            >
                              <path d="M14.682 2.318A4.485 4.485 0 0 0 11.5 1 4.377 4.377 0 0 0 8 2.707 4.383 4.383 0 0 0 4.5 1a4.5 4.5 0 0 0-3.182 7.682L8 15l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 12.247l-5.285-5A2.5 2.5 0 0 1 4.5 3c1.437 0 2.312.681 3.5 2.625C9.187 3.681 10.062 3 11.5 3a2.5 2.5 0 0 1 1.785 4.251h-.003Z" />
                            </svg>
                            <span>
                              498 <span className="sr-only">likes</span>
                            </span>
                          </button>
                          <button className="flex items-center text-left text-sm font-medium text-gray-500 hover:text-gray-800 group focus:outline-none">
                            <svg
                              className="w-4 h-4 flex-shrink-0 mr-2 fill-current text-gray-400 group-hover:text-gray-600"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7Zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8Z" />
                            </svg>
                            <span>
                              64 <span className="sr-only">comments</span>
                            </span>
                          </button>
                        </div>
                      </div>

                      <div className="w-full sm:flex justify-between items-center mb-3">
                        <p className="text-sm text-gray-400">
                          {draft.slug || draft.title}
                        </p>
                        <div className="text-sm text-gray-500">
                          Created @ {formatDate(draft.$createdAt)}
                        </div>
                      </div>

                      <div className="flex items-end justify-between whitespace-normal">
                        <div className="max-w-full text-gray-600">
                          <div className="mb-2">
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

                          {/* New Flex Container for Category and Button */}
                          <div className="flex justify-between items-center w-full mt-3">
                            <Badge className="p-1 px-2">
                              {draft.category || "Uncategorized"}
                            </Badge>

                            <a
                              href={`/edit/${draft.id}`}
                              className="flex-shrink-0 flex items-center justify-center text-indigo-600 w-10 h-10 rounded-full bg-gradient-to-b from-indigo-50 to-indigo-100 hover:from-white hover:to-indigo-50 focus:outline-none transition duration-150 ml-2"
                            >
                              <span className="block font-bold">
                                <span className="sr-only">Edit</span>
                                <Edit />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No drafts available.</p>
          )}
        </div>
      </section>

      <h3 class="flex items-center w-full mt-12 mb-8">
        <span class="flex-grow bg-gray-200 rounded h-1"></span>
        <button class="mx-3 text-md font-medium border border-2 px-6 py-0.5 rounded-full hover:bg-gray-200">
          My Blogs
        </button>
        <span class="flex-grow bg-gray-200 rounded h-1"></span>
      </h3>

      {/* Old Blog List */}
      <div className="mt-6">
      <section className="flex flex-col justify-center antialiased bg-gray-50 text-gray-600 p-4">
        <div className="h-full">
          {myBlogs.length > 0 ? (
            myBlogs.map((blog, index) => (
              <div
                key={index}
                className="max-w-5xl mx-auto border border-indigo-600 shadow-lg rounded-lg mb-4"
              >
                <div className="px-6 py-5">
                  <div className="flex items-start">
                    <img
                      src={service.getFilePreview(blog.featuredImage)}
                      alt={blog.title}
                      className="rounded-lg shadow-md w-[100px] h-[100px] object-cover mr-4"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 mr-5 text-indigo-600"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                    >
                      <path d="M17 3a2.828 2.828 0 1 1 4 4L8 20H4v-4L17 3z" />
                    </svg>

                    <div className="flex-grow truncate">
                      <div className="w-full sm:flex justify-between items-center mb-3">
                        <h2 className="text-2xl leading-snug font-extrabold text-gray-800 truncate mb-1 sm:mb-0">
                          {blog.title}
                        </h2>
                        <div className="flex-shrink-0 flex items-center space-x-3 sm:ml-2">
                          <button className="flex items-center text-left text-sm font-medium text-gray-500 hover:text-gray-800 group focus:outline-none">
                            <svg
                              className="w-4 h-4 flex-shrink-0 mr-2 fill-current text-gray-400 group-hover:text-gray-600"
                              viewBox="0 0 16 16"
                            >
                              <path d="M14.682 2.318A4.485 4.485 0 0 0 11.5 1 4.377 4.377 0 0 0 8 2.707 4.383 4.383 0 0 0 4.5 1a4.5 4.5 0 0 0-3.182 7.682L8 15l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 12.247l-5.285-5A2.5 2.5 0 0 1 4.5 3c1.437 0 2.312.681 3.5 2.625C9.187 3.681 10.062 3 11.5 3a2.5 2.5 0 0 1 1.785 4.251h-.003Z" />
                            </svg>
                            <span>
                              498 <span className="sr-only">likes</span>
                            </span>
                          </button>
                          <button className="flex items-center text-left text-sm font-medium text-gray-500 hover:text-gray-800 group focus:outline-none">
                            <svg
                              className="w-4 h-4 flex-shrink-0 mr-2 fill-current text-gray-400 group-hover:text-gray-600"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7Zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8Z" />
                            </svg>
                            <span>
                              64 <span className="sr-only">comments</span>
                            </span>
                          </button>
                        </div>
                      </div>

                      <div className="w-full sm:flex justify-between items-center mb-3">
                        <p className="text-sm text-gray-400">
                          {blog.slug || blog.title}
                        </p>
                        <div className="text-sm text-gray-500">
                          Created @ {formatDate(blog.$createdAt)}
                        </div>
                      </div>

                      <div className="flex items-end justify-between whitespace-normal">
                        <div className="max-w-full text-gray-600">
                          <div className="mb-2">
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

                          {/* New Flex Container for Category and Button */}
                          <div className="flex justify-between items-center w-full mt-3">
                            <Badge className="p-1 px-2">
                              {blog.category || "Uncategorized"}
                            </Badge>

                            <a
                              href={`/edit/${blog.id}`}
                              className="flex-shrink-0 flex items-center justify-center text-indigo-600 w-10 h-10 rounded-full bg-gradient-to-b from-indigo-50 to-indigo-100 hover:from-white hover:to-indigo-50 focus:outline-none transition duration-150 ml-2"
                            >
                              <span className="block font-bold">
                                <span className="sr-only">Delete</span>
                                <Delete />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No drafts available.</p>
          )}
        </div>
      </section>

      </div>
    </div>
  );
};

export default ProfilePage;
