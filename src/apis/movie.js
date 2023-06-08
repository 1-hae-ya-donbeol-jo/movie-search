export const fetchMovie = async restUrl => {
  const results = await fetch(`https://api.themoviedb.org/3/${restUrl}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODZhZjcxNzY0MTVhYjk3MWU5YjRjZWFhOTA0NTY4YiIsInN1YiI6IjY0NzBhMDI4YzVhZGE1MDBhODJkZmMwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MW5UL8xFifiCQX7ozBfj0REWT4TL4S75oHk9Zki44-0"
    }
  }).then(response => response.json());

  return results;
};

export const getPopularMovieList = async () => {
  const { results: movieList } = await fetchMovie("movie/popular");
  return movieList;
};

export const getNowPlayingMovie = async () => {
  const { results: nowPlayingMovieList } = await fetchMovie("movie/now_playing");

  return nowPlayingMovieList;
};

export const getSearchMovieList = async query => {
  const { results: searchMovieList } = await fetchMovie(`search/movie?query=${query}`);

  return searchMovieList;
};

export const getDetailMovie = async movieId => {
  const response = await fetchMovie(`movie/${movieId}`);

  return response;
};

export const getSimilarMovie = async movieId => {
  const { results: response } = await fetchMovie(`movie/${movieId}/similar`);

  return response;
};

export const getDetailMovieImages = async movieId => {
  const { backdrops: detailMovieImages } = await fetchMovie(`movie/${movieId}/images`);

  return detailMovieImages;
};
