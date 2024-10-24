import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";
import React from "react";
import { useState } from "react";

export default function PostCommentSection() {
  const [data] = useState([]);

  return (
    <div className="text-center">
      <h1>Hello CodeSandbox</h1>
      <CommentSection
        customNoComment={() => {
          return <div>Không có bình luận</div>;
        }}
        currentUser={{
          currentUserId: "01a",
          currentUserImg:
            "https://ui-avatars.com/api/name=Riya&background=random",
          currentUserProfile:
            "https://www.linkedin.com/in/riya-negi-8879631a9/",
          currentUserFullName: "Riya Negi"
        }}
        advancedInput={true}
        hrStyle={{ border: "0.5px solid #ff0072" }}
        commentData={data}
        logIn={{
          loginLink: "http://localhost:3001/",
          signupLink: "http://localhost:3001/"
        }}
        customImg="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=60"
        inputStyle={{ border: "1px solid rgb(208 208 208)" }}
        formStyle={{ backgroundColor: "white" }}
        submitBtnStyle={{
          border: "1px solid black",
          backgroundColor: "black",
          padding: "7px 15px"
        }}
        cancelBtnStyle={{
          border: "1px solid gray",
          backgroundColor: "gray",
          color: "white",
          padding: "7px 15px"
        }}
        replyInputStyle={{ borderBottom: "1px solid black", color: "black" }}
      />
    </div>
  );
}
