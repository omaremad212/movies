// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
const movies = [
    {
        title: "John Wick: Chapter 4",
        year: "2023",
        rating: "8.0",
        genre: "Action, Crime, Thriller",
        image: "./images/★.webp",
        era: "2020s"
    },
    {
        title: "Top Gun: Maverick",
        year: "2022",
        rating: "8.3",
        genre: "Action, Drama",
        image: "./images/bcb41438-fdb4-4b65-aacc-d877d664ed76.webp",
        era: "2020s"
    },
    {
        title: "Mad Max: Fury Road",
        year: "2015",
        rating: "8.1",
        genre: "Action, Adventure, Sci-Fi",
        image: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        era: "2010s"
    },
    {
        title: "The Dark Knight",
        year: "2008",
        rating: "9.0",
        genre: "Action, Crime, Drama",
        image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        era: "2000s"
    },
    {
        title: "The Matrix",
        year: "1999",
        rating: "8.7",
        genre: "Action, Sci-Fi",
        image: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        era: "1990s"
    },
    {
        title: "Die Hard",
        year: "1988",
        rating: "8.2",
        genre: "Action, Thriller",
        image: "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        era: "classic"
    },
    {
        title: "Mission: Impossible - Fallout",
        year: "2018",
        rating: "7.7",
        genre: "Action, Adventure, Thriller",
        image: "./images/tom.webp",
        era: "2010s"
    },
    {
        title: "The Raid 2",
        year: "2014",
        rating: "8.2",
        genre: "Action, Crime, Thriller",
        image: "./images/The Raid 2_ You will not regret it!!!.webp",
        era: "2010s"
    },
    {
        title: "Gladiator",
        year: "2000",
        rating: "8.5",
        genre: "Action, Adventure, Drama",
        image: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        era: "2000s"
    },
    {
        title: "Terminator 2: Judgment Day",
        year: "1991",
        rating: "8.6",
        genre: "Action, Sci-Fi",
        image: "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        era: "1990s"
    },
    {
        title: "Predator",
        year: "1987",
        rating: "7.8",
        genre: "Action, Adventure, Horror",
        image: "./images/How Ghana's Gory, Gaudy Movie Posters Became High Art.webp",
        era: "classic"
    },
    {
        title: "Avengers: Endgame",
        year: "2019",
        rating: "8.4",
        genre: "Action, Adventure, Drama",
        image: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
        era: "2010s"
    },
    {
        title: "Inception",
        year: "2010",
        rating: "8.8",
        genre: "Action, Adventure, Sci-Fi",
        image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        era: "2010s"
    },
    {
        title: "The Bourne Ultimatum",
        year: "2007",
        rating: "8.0",
        genre: "Action, Mystery, Thriller",
        image: "./images/ca70d70f26a1cbcabcac95632f9ece13.webp",
        era: "2000s"
    },
    {
        title: "The Rock",
        year: "1996",
        rating: "7.4",
        genre: "Action, Adventure, Thriller",
        image: "./images/The Rock.webp",
        era: "1990s"
    }
];

// DOM elements
const moviesContainer = document.getElementById('movies-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const loadMoreBtn = document.getElementById('load-more');
const loadingIndicator = document.getElementById('loading');

// Current filter and visible movies count
let currentFilter = 'all';
let visibleMovies = 8;

// Display movies
function displayMovies(filter = 'all', count = visibleMovies) {
    moviesContainer.innerHTML = '';
    
    const filteredMovies = filter === 'all' 
        ? movies 
        : movies.filter(movie => movie.era === filter);
    
    const moviesToShow = filteredMovies.slice(0, count);
    
    moviesToShow.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card bg-gray-800 rounded-lg overflow-hidden shadow-lg relative h-full';
        movieCard.innerHTML = `
            <div class="relative h-80 overflow-hidden">
                <img src="${movie.image}" alt="${movie.title}" class="movie-poster w-full h-full object-cover">
                <div class="movie-info absolute inset-0 flex flex-col justify-end p-4">
                    <div class="flex justify-between items-center mb-2">
                        <span class="bg-red-600 text-xs px-2 py-1 rounded">${movie.year}</span>
                        <span class="bg-yellow-600 text-xs px-2 py-1 rounded flex items-center">
                            <i class="fas fa-star mr-1"></i> ${movie.rating}
                        </span>
                    </div>
                    <h3 class="text-xl font-bold mb-1">${movie.title}</h3>
                    <p class="text-gray-400 text-sm">${movie.genre}</p>
                </div>
            </div>
            <div class="p-4">
                <button class="w-full bg-gray-700 hover:bg-gray-600 py-2 rounded transition-all flex items-center justify-center">
                    <i class="fas fa-play mr-2"></i> Watch Trailer
                </button>
            </div>
        `;
        moviesContainer.appendChild(movieCard);
    });
}

// Initial display
displayMovies();

// Filter buttons event listeners
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        currentFilter = button.dataset.filter;
        visibleMovies = 8;
        displayMovies(currentFilter, visibleMovies);
    });
});

// Load more functionality
loadMoreBtn.addEventListener('click', () => {
    loadingIndicator.classList.remove('hidden');
    loadMoreBtn.disabled = true;
    
    // Simulate loading delay
    setTimeout(() => {
        visibleMovies += 4;
        displayMovies(currentFilter, visibleMovies);
        loadingIndicator.classList.add('hidden');
        loadMoreBtn.disabled = false;
        
        // Hide load more button if all movies are shown
        const filteredMovies = currentFilter === 'all' 
            ? movies 
            : movies.filter(movie => movie.era === currentFilter);
        
        if (visibleMovies >= filteredMovies.length) {
            loadMoreBtn.classList.add('hidden');
        }
    }, 1000);
});

// Infinite scroll (optional)
window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    
    if (scrollTop + clientHeight >= scrollHeight - 5 && !loadingIndicator.classList.contains('hidden') === false) {
        const filteredMovies = currentFilter === 'all' 
            ? movies 
            : movies.filter(movie => movie.era === currentFilter);
        
        if (visibleMovies < filteredMovies.length) {
            loadingIndicator.classList.remove('hidden');
            
            setTimeout(() => {
                visibleMovies += 4;
                displayMovies(currentFilter, visibleMovies);
                loadingIndicator.classList.add('hidden');
            }, 1000);
        }
    }
});
