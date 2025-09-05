import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

interface Options {
  page?: number;
  limit?: number;
}

export const topRatedMoviesAction = async ({
  page = 1,
  limit = 10,
}: Options) => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/top_rated?", {
      params: {
        page: page,
      },
    });

    const movies = data.results.map(MovieMapper.fromTheMovieDBtoMovie);
    return movies;
  } catch (error) {
    console.error(error);
    throw "Cannot load now playing movies";
  }
};
