import {  useLocation } from "react-router-dom";

const ShowMovies = () => {
    let location = useLocation();
    


    return (

        <div>
           <image  id="smImage"> </image>
            <h1 id="smUserName">{location.state.movies.MoviesName}</h1>
            <h1 id="smMovieName">{location.state.movies.MoviesSubtitle}</h1>
            <h2 id="smMovieSubtitle">{location.state.movies.MoviesDescription}</h2>
        </div>
    )
}
export default ShowMovies