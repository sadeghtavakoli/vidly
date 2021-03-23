

export function getSortedMovies (movies = [], options ) {
    const sortedMovies = movies.sort((a,b) =>{
        if(options.order)   return b[options.column] - a[options.column];

        return a[options.column] - b[options.column]
    })
        return sortedMovies
}