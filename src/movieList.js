class MovieList {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        this.movies = [];
    }

    addMovie(movie) {
        this.movies.push(movie);
        this.render();
    }

    render() {
        this.container.innerHTML = '';

        this.movies.forEach(movie => {
            const movieCard = movie.render();
            this.container.appendChild(movieCard);
        });
    }
}

export default MovieList;
