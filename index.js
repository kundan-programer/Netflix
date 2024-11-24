let movies = [
  {
    Name: "RRR",
    poster:
      "https://i.pinimg.com/564x/d0/16/31/d0163192f486c344981bdf60d38e3bd0.jpg",
    Title:
      "RRR actually began as a prototype title when the movie was in development. Director S.S. Rajamouli has since revealed that the title director and the two main actors (via Bollywood Hungama)",
    rating: 9.2,
  },
  {
    Name: "MoonLight",
    poster:
      "https://s.yimg.com/ny/api/res/1.2/ZzAHlDHi8a2xdBRRbruaYQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkyOA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5",
    Title:
      "Rhodes, André Holland, Janelle Monáe, Ashton Sanders, Jharrel Jerome, Naomie Harris, and Mahershala Ali. ",
    rating: 7.2,
  },
  {
    Name: "Lagaan",
    poster: "https://upload.wikimedia.org/wikipedia/en/b/b6/Lagaan.jpg",
    Title:
      "Once Upon a Time in India (transl. Land tax) is a 2001 Indian Hindi-language epic musical[5] sports drama film written and directed by Ashutosh Gowariker. ",
    rating: 9.82,
  },
  {
    Name: "Avanger",
    poster: "https://wallpapercave.com/dwp1x/wp4770368.jpg",
    Title:
      "Rhodes, André Holland, Janelle Monáe, Ashton Sanders, Jharrel Jerome, Naomie Harris, and Mahershala Ali.",
    rating: 9.82,
  },
  {
    Name: "Spiderman",
    poster:
      "https://i.pinimg.com/236x/3a/23/f9/3a23f9bd994e0019c194655e1bc728f8.jpg",
    Title:
      "Timely Comics, the precursor to Marvel Comics, was founded in 1939 by pulp magazine publisher Martin Goodman",
    rating: 9.82,
  },
  {
    Name: "Iron Man",
    poster:
      "https://i.pinimg.com/236x/3f/cd/07/3fcd07bae3ee169ef648cef6633e7afd.jpg",
    Title:
      "When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.",
    rating: 9.92,
  },
  {
    Name: "Dark",
    poster:
      "https://marketplace.canva.com/EAFVCFkAg3w/1/0/1131w/canva-red-and-black-horror-movie-poster-AOBSIAmLWOs.jpg",
    Title:
      "Rhodes, André Holland, Janelle Monáe, Ashton Sanders, Jharrel Jerome, Naomie Harris, and Mahershala Ali.",
    rating: 8.1,
  },
  {
    Name: "ghayal",
    poster:
      "https://static-koimoi.akamaized.net/wp-content/new-galleries/2015/11/ghayal-once-again-movie-poster-1.jpg",
    Title:
      "Rhodes, André Holland, Janelle Monáe, Ashton Sanders, Jharrel Jerome, Naomie Harris, and Mahershala Ali.",
    rating: 9.0,
  },
  {
    Name: "Bhoot police",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzxsbBVRy2cML4NcnwsTPa6yQf5gWZxhc69sXai35urQDrXCDqOiqSVHD7QMCNA8YOfUI&usqp=CAU",
    Title:
      "Rhodes, André Holland, Janelle Monáe, Ashton Sanders, Jharrel Jerome, Naomie Harris, and Mahershala Ali.",
    rating: 7.2,
  },
  {
    Name: "Brahmastra",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEwgqMGqvEV28E52xk1BFD_-a4aeFKt4IPBd1v1zM8ZN0WUGD_TTPjLqeXmdKSS8nrpOI&usqp=CAU",
    Title:
      "Rhodes, André Holland, Janelle Monáe, Ashton Sanders, Jharrel Jerome, Naomie Harris, and Mahershala Ali.",
    rating: 8.2,
  },
  {
    Name: "mujhse shaadu karogi",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3kBgxrfOx9Mfpt70HvXZ62EZFOPtMnp46RW_kkR3fWttEnhxKMq3pUCxP3ElybFgQReo&usqp=CAU",
    Title:
      "Rhodes, André Holland, Janelle Monáe, Ashton Sanders, Jharrel Jerome, Naomie Harris, and Mahershala Ali.",
    rating: 6.6,
  },
  {
    Name: "guzaarish",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS9PSJBaewbPuGifsWS7mF6mBJeQQXg46ZBHJ8BfS2gvAwAjOBfVoKxFK6u1RWPS4Ji18&usqp=CAU",
    Title:
      "Renowned former magician Ethan, now a quadriplegic, files a petition for euthanasia. While he awaits the verdict, Omar, a young magic enthusiast, convinces Ethan to pass on his legacy to him.",
    rating: 7.4,
  },
  {
    Name: "Leo Movie (2023)",
    poster:
      "https://i.pinimg.com/736x/28/2d/a0/282da074001c31106e08e54a44d1861e.jpg",
    Title:
      "The movie revolves around the turn of events in the life of a young man (Thalapathy Vijay) who makes chocolates.",
    rating: 8.8,
  },
  {
    Name: "Mureder2",
    poster:
      "https://m.media-amazon.com/images/M/MV5BODBiNTk1NjUtZDY3NC00YjUwLTgxNmItMjExZjcyNDdkZjQ1XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_.jpg",
    Title:
      "Rhodes, André Holland, Janelle Monáe, Ashton Sanders, Jharrel Jerome, Naomie Harris, and Mahershala Ali.",
    rating: 8.2,
  },
  {
    Name: "Pet Sematary (2019)",
    poster:
      "https://i.pinimg.com/564x/d0/11/33/d0113352f4b921fc92d958e106daefe1.jpg",
    Title:
      "Louis Creed, his wife Rachel, and their two children, Gage and Ellie, move to a rural home where they are welcomed and enlightened about the eerie 'Pet Sematary' located nearby.",
    rating: 9.2,
  },
  {
    Name: "Prey",
    poster:
      "https://i.pinimg.com/736x/41/52/af/4152af2f6a0f87e907c181ad6b82ea03.jpg",
    Title:
      "Louis Creed, his wife Rachel, and their two children, Gage and Ellie, move to a rural home where they are welcomed and enlightened about the eerie 'Pet Sematary' located nearby.",
    rating: 7.2,
  },
  {
    Name: "Tanu manu",
    poster:
      "https://i.pinimg.com/236x/54/69/cb/5469cbe95a0c88209b079b6ce2e4017b.jpg",
    Title:
      "Manu comes to India to find a bride and falls for Tanu at first sight, but free-spirited Tanu has no plan to marry him",
    rating: 6.8,
  },
  {
    Name: "Hate Story 2",
    poster:
      "https://i.pinimg.com/236x/af/0f/66/af0f667b4470f7b402942f2b766dff0f.jpg",
    Title:
      "Sonika, the mistress of political leader Mandar Mhatre, falls in love with her college friend Akshay. When Mandar kills Akshay, she devises a plan to take revenge on him.",
    rating: 8.92,
  },
  {
    Name: "Mastram",
    poster: "https://im.rediff.com/movies/2016/feb/03outrageous-posters8.jpg",
    Title:
      "Mastram is an 2020 Indian erotic drama streaming television series on MX Player. It stars Anshuman Jha, Tara Alisha Berry. Tara Alisha Berry was also in the 2014 Hindi biopic of the same name. Season 1 released on 30 April 2020. ",
    rating: 7.2,
  },
];

function searchMovie() {
  let movieName = document.getElementById("search1").value;

  if (movieName !== "") {
    let resutlt = movies.filter(function (movie) {
      return movie.Name.toUpperCase().includes(movieName.toUpperCase());
    });
    displayMovie(resutlt);
  } else {
    displayMovie(movies);
  }
}
function displayMovie(data) {
  document.getElementById("Movies").innerHTML = "";

  let htmlString = ``;

  for (let i = 0; i < data.length; i++) {
    htmlString =
      htmlString +
      ` <div class="movie">
<div class="overlay">
<div class="video"></div>
<div class="details">
<h1>${data[i].Name}</h1>
<h3>IMDB:${data[i].rating}</h3>
<p>${data[i].Title}</p>
</div>

</div>

<img class="poster"
src=${data[i].poster} alt="error to load"> 
</div>
`;
    document.getElementById("Movies").innerHTML = htmlString;
  }
  console.log(htmlString);
}
displayMovie(movies);
