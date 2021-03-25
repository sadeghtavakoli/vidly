import http from "./httpService";

const apiEndpoint = "/movies";

function movieUrl(movieId) {
  return `${apiEndpoint}/${movieId}`;
}
export function getMovies() {
  return http.get(apiEndpoint);
}

export function getMovie(id) {
  return http.get(movieUrl(id));
}

export function saveMovie(movie) {
  const body = { ...movie };
  if (movie._id) {
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }

  delete body.like;
  console.log(movie);
  return http.post(apiEndpoint, body);
}

export function deleteMovie(id) {
  return http.delete(movieUrl(id));
}
