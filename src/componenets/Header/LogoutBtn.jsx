// src/components/LogoutBtn.js

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { setLoadingAuth, unSetLoadingAuth } from "../../store/loadingSlice";
import LoadingSpinner from "../LoadingSpinner";

function LogoutBtn() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading.loading);

  const logoutHandler = async () => {
    setShowModal(false); // Close modal after logout confirmation
    dispatch(setLoadingAuth()); // Start loading

    try {
      await authService.logout();
      dispatch(logout());
    } catch (error) {
      console.error("Logout failed:", error.message);
    } finally {
      dispatch(unSetLoadingAuth()); // End loading
    }
  };

  return (
    <>
      {/* Logout Button */}
      <button
        onClick={() => setShowModal(true)} // Show modal when button is clicked
      >
        Logout
      </button>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-bold mb-4 text-center">
              Are you sure you want to log out?
            </h2>
            <div className="flex justify-around">
              {/* Cancel Button */}
              <button
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

              {/* Confirm Logout Button with Loading Indicator */}
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 flex items-center"
                onClick={logoutHandler}
                disabled={isLoading} // Disable while loading
              >
                {isLoading ? (
                  <LoadingSpinner /> // Show loading spinner while logging out
                ) : (
                  "Confirm Logout"
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Full-page Loading Spinner */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <LoadingSpinner />
        </div>
      )}
    </>
  );
}

export default LogoutBtn;
