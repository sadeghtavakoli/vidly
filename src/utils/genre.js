

export function getGenreMovies (allMovies , selectedGenreId) {
    const genreMovies = selectedGenreId ?
    allMovies.filter(movie => movie.genre._id === selectedGenreId):
    allMovies

    return genreMovies


}