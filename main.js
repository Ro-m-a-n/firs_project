const data = [
  {
    id: 1,
    year: "2000-2010",
    genres: [
      {
        id: 1,
        name: "horror",
        movies: [
          {
            id: 1,
            name: "Clown",
            stars: ["Mel Gibson", "Hew Jackman", "Nickie Star"],
          },
          {
            id: 2,
            name: "Clown 2",
            stars: ["Mel Gibson", "Some Random Star"],
          },
          {
            id: 3,
            name: "Clown 3",
            stars: [
              "Mel Gibson became to expensive and we took Alexander Nevskiy",
              "Ruki Bazuki",
            ],
          },
        ],
      },
      {
        id: 2,
        name: "comedy",
        movies: [
          {
            id: 1,
            name: "American Pie",
            stars: ["Stifler", "Mamka Stiflera"],
          },
          {
            id: 2,
            name: "Random Movie",
            stars: ["Mel Gibson", "Some Random Star"],
          },
          {
            id: 3,
            name: "Ivan Vasilievich I Mel Gibson",
            stars: ["Ne Mel Gibson", "Ruki Bazuki"],
          },
        ],
      },
      {
        id: 2,
        name: "blockbuster",
        movies: [
          {
            id: 1,
            name: "Fast and Furios",
            stars: ["Liciy", "Lyciy iz Restlinga", "Lyciy iz Brazzers"],
          },
          {
            id: 2,
            name: "Avengers",
            stars: [
              "Paul Bethany",
              "Elizabeth Olsen",
              "Scarlet Johanson",
              "Robert Junior",
              "Chadwik Bowsman",
            ],
          },
          {
            id: 3,
            name: "Die Hard",
            stars: ["Mel Gibson", "Bruce Willis"],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    year: "2010-2020",
    genres: [
      {
        id: 1,
        name: "horror",
        movies: [
          {
            id: 1,
            name: "Russian Economy: reload",
            stars: ["Putin", "Medvedev", "Alexander Nevskiy"],
          },
          {
            id: 2,
            name: "Random 4.8 imdb horror",
            stars: ["Kwdwd", "ADwdh"],
          },
          {
            id: 3,
            name: "Fantasy shutted down atm",
            stars: [
              "Mel Gibson became to expensive and we took Alexander Nevskiy",
              "Ruki Bazuki",
            ],
          },
        ],
      },
      {
        id: 2,
        name: "comedy",
        movies: [
          {
            id: 1,
            name: "American Pie",
            stars: ["Stifler", "Mamka Stiflera"],
          },
          {
            id: 2,
            name: "Random Movie 2",
            stars: ["Mel Gibson", "Some Random Star"],
          },
          {
            id: 3,
            name: "Ivan Vasilievich I Mel Gibson",
            stars: ["Ne Mel Gibson", "Ruki Bazuki"],
          },
        ],
      },
      {
        id: 2,
        name: "blockbuster",
        movies: [
          {
            id: 1,
            name: "Fast and Furios",
            stars: ["Liciy", "Lyciy iz Restlinga", "Lyciy iz Brazzers"],
          },
          {
            id: 2,
            name: "Avengers",
            stars: [
              "Paul Bethany",
              "Elizabeth Olsen",
              "Scarlet Johanson",
              "Robert Junior",
              "Chadwik Bowsman",
            ],
          },
          {
            id: 3,
            name: "Die Hard 2",
            stars: ["Mel Gibson", "Bruce Willis"],
          },
        ],
      },
    ],
  },
];

window.onload = function () {
  let genres = data.map((genr) => {
    return genr.genres;
  });
  let movies = genres.flat().map((movie) => {
    return movie.movies;
  });
  let filteredMovies = movies
    .flat()
    .filter((star) => star.stars.indexOf("Mel Gibson")==-1);
  let answer = filteredMovies.map(movie => movie.name)
  
  
    console.log(answer);
};

// let movies = genres.map((genr1) => {
//   return genr1.movies;
// });
//       // let stars = movies.flat().map((movie) => {
// //   return movie.stars;
// // });
// let filteredMovies = movies
//   .flat()
//   .filter((movie) => movie.stars.includes("Mel Gibson"));

// let answer = filteredMovies.map((movie) => {
//   return movie.name;
// });

// console.log(answer);
// console.log();
