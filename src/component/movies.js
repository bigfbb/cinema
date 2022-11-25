import { useNavigate } from "react-router-dom";

const Movies = ()=>{
    const TheMovies = localStorage.getItem("TheMovies") ?
    JSON.parse(localStorage.getItem("TheMovies")) : [];
    const navigate=useNavigate()
    const ToShowMovies =(movie)=>{
        navigate("/Movies/"+movie.MoviesName , { state: { movies: movie } } )
    }
    return (
    
        TheMovies.map((value, index) => {
            console.log(TheMovies)
          return (
            <div key={index} id="movieCard">
              <h1>{value.MoviesName}</h1>
              <h3>{value.MoviesSubtitle}</h3>
              <button onClick={(e)=>ToShowMovies(value)}>read more</button>
            </div>
          )
        })
      )
}
export default Movies