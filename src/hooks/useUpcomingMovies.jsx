import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {options} from "../utils/constants"
import { addUpcomingMovies } from "../utils/movieSlice";



const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const moviesUp = useSelector(store=>store.movies.upcomingMovies)
  const fetchMovieList = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', options);
    const resultJSON = await data.json();
    dispatch(addUpcomingMovies(resultJSON.results));


      // .then((res) => res.json())
      // .then((res) => {
      //   console.log(res.results);
      //   dispatch(addNowPlayingMovies(res.results));
      // })
      // .catch((err) => console.error(err));
  };

  useEffect(() => {
    !moviesUp && fetchMovieList();
  }, []);
};

export default useUpcomingMovies;
