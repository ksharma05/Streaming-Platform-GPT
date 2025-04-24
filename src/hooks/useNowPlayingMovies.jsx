import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {options} from "../utils/constants"
import { addNowPlayingMovies } from "../utils/movieSlice";



const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const moviesNow = useSelector(store=>store.movies.nowPlayingMovies)
  const fetchMovieList = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options);
    const resultJSON = await data.json();
    dispatch(addNowPlayingMovies(resultJSON.results));


      // .then((res) => res.json())
      // .then((res) => {
      //   console.log(res.results);
      //   dispatch(addNowPlayingMovies(res.results));
      // })
      // .catch((err) => console.error(err));
  };

  useEffect(() => {
    !moviesNow && fetchMovieList();
  }, []);
};

export default useNowPlayingMovies;
