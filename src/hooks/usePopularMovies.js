import { useEffect } from "react";
import { API_OPTIONS } from "../utilities/constants";
import { useDispatch } from "react-redux";
import { addPopularVideos } from "../utilities/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularVideos(json.results))

  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
