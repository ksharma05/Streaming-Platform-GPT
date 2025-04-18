import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {options} from "../utils/constants"
import { addNowPlayingMovies, addTopRatedMovies } from "../utils/movieSlice";



const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const fetchMovieList = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', options);
    const resultJSON = await data.json();
    dispatch(addTopRatedMovies(resultJSON.results));


      // .then((res) => res.json())
      // .then((res) => {
      //   console.log(res.results);
      //   dispatch(addNowPlayingMovies(res.results));
      // })
      // .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchMovieList();
  }, []);
};

export default useTopRatedMovies;
