import React, { useState } from "react";

function Comments({
  videoData,
  handleRemoveComment,
  handleUpvote,
  handleDownvote,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedComments, setSortedComments] = useState(videoData.comments);

//   const comments = videoData.comments;
  const commentsHeader = (
    <>
      <h2>{videoData.comments.length} Comments</h2>
      <input
        type="text"
        placeholder="Search by username"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button onClick={() => handleSort("user")}>Sort by Username</button>
    </>
  );

  const handleSort = (key) => {
    const sorted = [...videoData.comments].sort((a, b) =>
      a[key].localeCompare(b[key])
    );
    setSortedComments(sorted);
  };

  const commentBody = sortedComments
  .filter((comment)=> 
  comment.user.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .map((comment) => (
    <div key={comment.id}>
      <h3>{comment.user}</h3>
      <p>{comment.comment}</p>
      <button onClick={() => handleRemoveComment(comment.id)}>
          Remove Comment
        </button>
        <button onClick={() => handleUpvote(comment.id)}>
          Upvote
        </button>
        <button onClick={() => handleDownvote(comment.id)}>
          Downvote
        </button>
    </div>

  ));

  return (
    <div>
      {commentsHeader}
      <p value="blank-space"></p>
      {commentBody}
    </div>
  );
}
export default Comments;
