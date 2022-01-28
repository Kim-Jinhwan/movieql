export let movies = [
  {
    id: 0,
    name: "movie1",
    score: 0.1
  },
  {
    id: 1,
    name: "movie2",
    score: 0.2
  },
  {
    id: 2,
    name: "movie3",
    score: 0.1
  },
  {
    id: 3,
    name: "movie4",
    score: 0.1
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovies = movies.filter(movie => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if(movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  console.log(movies);
  return newMovie;
};