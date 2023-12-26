import React from "react";

function Buttons({
  upvotes,
  downvotes,
  upvoteFunction,
  downvoteFunction,
  commentsVisibility,
  commentVisibilityFunction
}) {
  const upVoteButton = (
    <>
      <btn className="btn btn-outline-secondary" onClick={upvoteFunction}>
        {upvotes} 👍
      </btn>
    </>
  );

  const downVoteButton = (
    <>
      <btn className="btn btn-outline-secondary" onClick={downvoteFunction}>
        {downvotes} 👎
      </btn>
    </>
  );

  const hideCommentsButton = (
    <>
      <btn className="btn btn-outline-secondary" onClick={commentVisibilityFunction}>
        {commentsVisibility ? "Show Comments" : "Hide Comments"}
      </btn>
    </>
  );

  return (
    <div>
      <div>
        {upVoteButton}
        {downVoteButton}
      </div>
      <div>
        <p value='blank-space'></p>
      {hideCommentsButton}
      <hr></hr>
      </div>
    </div>
  );
}

export default Buttons;