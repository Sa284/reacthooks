class MovieCard {
    constructor(title, description, posterURL, rating) {
        this.title = title;
        this.description = description;
        this.posterURL = posterURL;
        this.rating = rating;
    }

    render() {
        const card = document.createElement('div');
        card.classList.add('movie-card');
        card.innerHTML = `
            <img class="poster" src="${this.posterURL}" alt="${this.title} Poster">
            <div class="movie-info">
                <h2 class="title">${this.title}</h2>
                <p class="description">${this.description}</p>
                <p class="rating">Rating: ${this.rating}</p>
            </div>
        `;
        return card;
    }
}

export default MovieCard;
