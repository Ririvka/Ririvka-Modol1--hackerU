let allData = [];

let myPosts = [
  {
    postID: 1,
    postTitle: "TitleOfPost1",
    postBody:
      "Body of Post1, Body of Post1, Body of Post1, Body of Post1, Body of Post1.",
  },
  {
    postID: 2,
    postTitle: "TitleOfPost2",
    postBody:
      "Body of Post2, Body of Post2, Body of Post2, Body of Post2, Body of Post2.",
  },
  {
    postID: 3,
    postTitle: "TitleOfPost3",
    postBody:
      "Body of Post3, Body of Post3, Body of Post3, Body of Post3, Body of Post3.",
  },
];

let myComments = [
  {
    commentID: 1,
    commentToPost: 1,
    commentBody:
      "Body of Comment1, Body of Comment1, Body of Comment1, Body of Comment1, Body of Comment1.",
  },
  {
    commentID: 2,
    commentToPost: 1,
    commentBody:
      "Body of Comment2, Body of Comment2, Body of Comment2, Body of Comment2, Body of Comment2.",
  },
  {
    commentID: 3,
    commentToPost: 2,
    commentBody:
      "Body of Comment3, Body of Comment3, Body of Comment3, Body of Comment3, Body of Comment3.",
  },
  {
    commentID: 4,
    commentToPost: 2,
    commentBody:
      "Body of Comment4, Body of Comment4, Body of Comment4, Body of Comment4, Body of Comment4.",
  },
  {
    commentID: 5,
    commentToPost: 3,
    commentBody:
      "Body of Comment5, Body of Comment5, Body of Comment5, Body of Comment5, Body of Comment5.",
  },
  {
    commentID: 6,
    commentToPost: 3,
    commentBody:
      "Body of Comment6, Body of Comment6, Body of Comment6, Body of Comment6, Body of Comment6.",
  },
];

let getPosts = new Promise((resolve) => {
  setTimeout(() => {
    console.log(myPosts);
    resolve(myPosts);
  }, 3000);
});

let getComments = new Promise((resolve) => {
  setTimeout(() => {
    console.log(myComments);
    resolve(myComments);
  }, 4000);
});

function pushPosts(postsToPush) {
  allData.push(postsToPush);
  return postsToPush;
}
function pushComments(commentsToPush) {
  allData.push(commentsToPush);
  return commentsToPush;
}

getPosts
  .then((allPosts) => pushPosts(allPosts))
  .then(() => getComments)
  .then((allComments) => pushComments(allComments))
  .then(() => printToHtml(allData));

function printToHtml(myData) {
  console.log(myData);
}
