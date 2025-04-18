import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {options} from "../utils/constants"
import { addPolularMovies } from "../utils/movieSlice";



const usePopularMovies = () => {
  const dispatch = useDispatch();

  const fetchMovieList = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', options);
    const resultJSON = await data.json();
    dispatch(addPolularMovies(resultJSON.results));


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

export default usePopularMovies;
