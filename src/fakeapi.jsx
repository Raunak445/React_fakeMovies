   const movies=  [
        {
          "Title": "The Lion King",
          "Year": "2019",
          "id":1,
          "Runtime": "118 min",
  
        },
        {
          "Title": "Mowgli: Legend of the Jungle",
          "Year": "2018",
          "Runtime": "104 min",
          "id":2,
        
        },
        {
          "Title": "Doctor Strange",
          "Year": "2016",
          "Runtime": "115 min",
          "id":3,
          
        },
        {
          "Title": "John Wick",
          "Year": "2014",
          "Runtime": "101 min",
          "id":4,
         
        },
        {
          "Title": "The Notebook",
          "Year": "2004",
          "Runtime": "123 min",
          "id":5,
        
        }
      ]


      export function getMovies()
      {
         return movies;

      }

      export function getMovie(id){
        return movies.find(m=>m.id===id)
      }

   