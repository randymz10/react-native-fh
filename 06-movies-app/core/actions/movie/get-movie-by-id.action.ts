import { movieApi } from "@/core/api/movie-api";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import { MovieDBMovieResponse } from "@/infrastructure/interfaces/moviedb-movie.response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const getMoviebyIdAction = async (
  id: number | string
): Promise<CompleteMovie> => {
  try {
    const { data } = await movieApi.get<MovieDBMovieResponse>(`${id}`);
    console.log("Película - HTTP cargada");
    return MovieMapper.fromTheMovieDBToCompleteMovie(data);
  } catch (error) {
    console.error(error);
    throw "Cannot load now playing movies";
  }
};
