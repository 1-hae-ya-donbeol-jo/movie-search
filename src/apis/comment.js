export const addComment = (movieId, comment) => {
  const parsedComments = JSON.parse(localStorage.getItem("comments") || "{}");
  const movieComments = parsedComments[movieId] || [];

  const commentId = movieComments.length > 0 ? movieComments[movieComments.length - 1].id + 1 : 1;
  const newComment = { ...comment, id: commentId };

  const newMovieComments = [...movieComments, newComment];
  parsedComments[movieId] = newMovieComments;

  localStorage.setItem("comments", JSON.stringify(parsedComments));
};
