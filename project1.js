let data = [
  {
      "id": "M1",
      "title": "The Godfather",
      "storyline": "A chilling portrait of the Corleone family's rise and near fall from power in America along with balancing the story of the Sicilian clan's ugly crime business in which they are engaged.",
      "poster_url": "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg"
  },
  {
      "id": "M2",
      "title": "The Dark Knight",
      "storyline": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      "poster_url": "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg"
  },
  {
      "id": "M3",
      "title": "Inception",
      "storyline": "A thief, who steals corporate secrets through the use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "poster_url": "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"
  },
  {
      "id": "M4",
      "title": "Interstellar",
      "storyline": "A team of explorers travel beyond this galaxy through a newly discovered wormhole to discover whether mankind has a future among the stars.",
      "poster_url": "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
  },
  {
      "id": "M5",
      "title": "Shahid",
      "storyline": "Shahid Azmi becomes an unlikely champion of human rights, particularly for India's Muslim minority.",
      "poster_url": "https://upload.wikimedia.org/wikipedia/en/c/cd/Shahid_Poster_%282013%29.jpg"
  },
  {
      "id": "M6",
      "title": "Annabelle: Creation",
      "storyline": "12 years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, where they soon become the target of the dollmaker's possessed creation, Annabelle.",
      "poster_url": "https://upload.wikimedia.org/wikipedia/en/0/08/Annabelle_Creation.jpg",
  }
];
  
div = document.getElementById("cards");

let movieList = function(data){
    let movieCard = "";
    data.forEach(movie =>{
        console.log(movie)
      movieCard += `
      <div class="card">
          <img src=${movie.poster_url} class="card-img-top" alt=${movie.title} style="width:max-width;height: 300px">
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text" style="overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;">${movie.storyline}</p>
          </div>
        </div>
      `
    })
    div.innerHTML = movieCard;
  }
  movieList(data);
  input = document.getElementById('movieSearch');
  
  let filterData = function(event){
    keyword = input.value.toLowerCase();
    movieSearch = data.filter(function(movie){
          movie = movie.title.toLowerCase();
         return movie.indexOf(keyword) > -1; 
    });
    
    movieList(movieSearch);
  }

  
  input.addEventListener('keyup', filterData);
  /*input = document.getElementById('filtered_data');
  
  let filterData = function(event){
    keyword = input.value.toLowerCase();
    filtered_data = data.filter(function(item){
          item = item.title.toLowerCase();
         return item.indexOf(keyword) > -1; 
    });
    
    movieList(filtered_data);
  }

  
  input.addEventListener('keyup', filterData);*/