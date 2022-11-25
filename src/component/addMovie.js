import { useNavigate } from "react-router-dom";
const AddMovie = () => {
    const state = {
        MoviesName: "",
        MoviesSubtitle: "",
        MoviesDescription: ""
    }
    const navigate = useNavigate();
    const submitMovie = (e) => {
        e.preventDefault();
        const TheMovies = localStorage.getItem('TheMovies') ? JSON.parse(localStorage.getItem('TheMovies')) : []
        TheMovies.push(state)
        localStorage.setItem("TheMovies", JSON.stringify(TheMovies))
        navigate("/Movies", { state: { state } })
    }


    return (
        <form id="movieForm" onSubmit={submitMovie}>
            <input className="MovieInput" placeholder="Name" onChange={(e) => state.MoviesName = e.target.value} ></input>
            <input className="MovieInput" placeholder="Subtitle" onChange={(e) => state.MoviesSubtitle = e.target.value} ></input>
            <input className="MovieInput" placeholder="Description" onChange={(e) => state.MoviesDescription = e.target.value}></input>
            <input type="submit" value="Submit" />
        </form>
    )

}
export default AddMovie