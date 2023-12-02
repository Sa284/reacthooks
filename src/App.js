import MovieCard from './movieCard.js';
import MovieList from './movieList.js';
import Filter from './filter.js';

// Sample images
const sampleImages = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
];

// Initialize MovieList
const movieList = new MovieList('.movie-list-container');

// Initialize Filter with the MovieList
const filter = new Filter(movieList);

// Function to handle adding a new movie
function addNewMovie(title, description, posterURL, rating) {
    const newMovie = new MovieCard(title, description, posterURL, rating);
    movieList.addMovie(newMovie);
}

// Sample movies
sampleImages.forEach((image, index) => {
    addNewMovie(`Movie ${index + 1}`, `Description for Movie ${index + 1}`, image, 3.5 + index);
});

// Function to handle applying filters
function applyFilters() {
    const titleFilter = document.getElementById('titleFilter').value;
    const ratingFilter = parseFloat(document.getElementById('ratingFilter').value);

    filter.applyFilters(titleFilter, ratingFilter);
}

// Event listener for applying filters
document.getElementById('applyFiltersBtn').addEventListener('click', applyFilters);
