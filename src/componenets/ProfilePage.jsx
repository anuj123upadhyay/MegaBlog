import { useState, useEffect } from "react";
import authService from "../appwrite/auth";
import service from "../appwrite/configAppwrite";

const ProfilePage = () => {
  const [drafts, setDrafts] = useState([]);
  const [myBlogs, setMyBlogs] = useState([]);
  const [profile, setProfile] = useState({
    name: "Sawan Kushwah",
    bio: "A passionate software developer working on multiple tech stacks.",
  });
  const [newDraftTitle, setNewDraftTitle] = useState("");
  const [newDraftDetails, setNewDraftDetails] = useState("");
  const [posts, setPosts] = useState([]);


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
            bio: user.bio || "No bio available.", // Adjust according to your user object structure
          });
        }
        console.log("first", user);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };

    fetchCurrentUser();
  }, []);

  useEffect(() => {
    service.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [id]: value,
    }));
  };

  // Handle saving changes (this can be modified to include API calls)
  const handleSave = () => {
    console.log("Profile saved:", profile);
    alert("Profile changes saved successfully!");
  };

  // Simulating data fetching from API with dummy data
  // useEffect(() => {
  // setMyBlogs(mockOldBlogs);
  // setDrafts(drafts)
  // }, []);

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

  return (
    <div className="w-4/5 mx-auto p-6 pb-20">
      <div className="flex w-full justify-between">
        {/* Profile Settings */}
        <div className="mt-6 p-6 bg-white rounded-lg shadow-md w-3/5">
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

          <button
            onClick={handleSave}
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Save Changes
          </button>
        </div>

        {/* Profile Header */}
        <div className="bg-white p-6 rounded-lg border-2 border-blue-300 shadow-lg w-1/3 h-64 flex flex-col items-center transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
          <img
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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
                className="border-b border-gray-200 py-3 px-2 bg-gray-50 hover:bg-gray-100 transition-all duration-300 rounded-lg shadow-sm"
              >
                <span className="text-gray-700 font-medium">
                  {" "}
                  <span className="font-bold text-lg">
                    {index + 1} {draft.title}
                  </span>
                  <br />
                  {draft.details}
                </span>
                <button
                  onClick={() => handlePostDraft(draft)}
                  className="ml-4 bg-green-500 text-white px-5 py-1 rounded-md hover:bg-green-600 transition-all duration-300"
                >
                  Post
                </button>
              </li>
            ))
          ) : (
            <p className="text-gray-500">No drafts available.</p>
          )}
        </ul>
        <div className="mt-6">
          <input
            type="text"
            value={newDraftTitle}
            onChange={(e) => setNewDraftTitle(e.target.value)}
            placeholder="Draft Title..."
            className="border border-gray-300 p-3 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
          />
          <textarea
            value={newDraftDetails}
            onChange={(e) => setNewDraftDetails(e.target.value)}
            placeholder="Draft Details..."
            className="border border-gray-300 p-3 w-full mt-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 h-32"
          ></textarea>
          <button
            onClick={handleSaveDraft}
            className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-all duration-300 w-full sm:w-auto"
          >
            Save Draft
          </button>
        </div>
      </div>
      <div className="my-8 border-t-2 border-gray-500 w-4/5 m-auto"></div>

      {/* Old Blog List */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">MY Blogs</h2>
        <ul className="space-y-4">
          {myBlogs.length ? (
            myBlogs.map((blog, index) => (
              <li
                key={index}
                className="border-b border-gray-200 pb-4 hover:bg-gray-50 transition-all duration-300 rounded-lg shadow-sm p-4"
              >
                <h3 className="text-xl font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mt-2">{blog.excerpt}</p>
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
