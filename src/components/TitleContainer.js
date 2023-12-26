import React, { useState } from "react";
import Buttons from "./Buttons";
import Comments from "./Comments";

function TitleContainer({ videoData }) {
  const renderedTitle = (
    <>
      <h1>{videoData.title}</h1>
      <h5>
        {videoData.views} Views | Uploaded {videoData.createdAt}
      </h5>
    </>
  );

  const [upvotes, setUpVotes] = useState(videoData.upvotes);
  const [downvotes, setDownVotes] = useState(videoData.downvotes);
  const [commentsVisibility, setCommentsVisibility] = useState(false);
  const [comments, setComments] = useState(videoData.comments);

  const upvoteFunction = () => setUpVotes((prev) => prev + 1);
  const downvoteFunction = () => setDownVotes((prev) => prev + 1);
  const commentVisibilityFunction = () =>
    setCommentsVisibility((prev) => (prev = !prev));

  const handleUpvote = (commentId) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? { ...comment, upvotes: (comment.upvotes || 0) + 1 }
          : comment
      )
    );
  };

  const handleDownvote = (commentId) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? { ...comment, downvotes: (comment.downvotes || 0) + 1 }
          : comment
      )
    );
  };

  const handleRemoveComment = (commentId) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== commentId)
    );
  };

  return (
    <div>
      {renderedTitle}
      <Buttons
        upvoteFunction={upvoteFunction}
        downvoteFunction={downvoteFunction}
        upvotes={upvotes}
        downvotes={downvotes}
        commentsVisibility={commentsVisibility}
        commentVisibilityFunction={commentVisibilityFunction}
      />
      <p value="blank-space"></p>
      {commentsVisibility ? null : (
        <Comments
          videoData={videoData}
          comments={comments}
          handleRemoveComment={handleRemoveComment}
          handleUpvote={handleUpvote}
          handleDownvote={handleDownvote}
        />
      )}
    </div>
  );
}

export default TitleContainer;
