class Filter {
    constructor(movieList) {
        this.movieList = movieList;
    }

    applyFilters(titleFilter, ratingFilter) {
        const filteredMovies = this.movieList.movies.filter(movie => {
            const titleMatch = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
            const ratingMatch = movie.rating >= ratingFilter;

            return titleMatch && ratingMatch;
        });

        this.movieList.movies = filteredMovies;
        this.movieList.render();
    }
}

export default Filter;
