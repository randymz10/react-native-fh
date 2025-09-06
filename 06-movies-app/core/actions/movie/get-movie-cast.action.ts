import { movieApi } from "@/core/api/movie-api";
import { Cast } from "@/infrastructure/interfaces/cast.interface";
import { CreditsResponse } from "@/infrastructure/interfaces/credits-response.interface";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";

export const getMovieCastAction = async (movieId: number): Promise<Cast[]> => {
  try {
    const { data } = await movieApi.get<CreditsResponse>(`/${movieId}/credits`);
    return data.cast.map(CastMapper.fromMovieDBCastToEntity);
  } catch (error) {
    console.error(error);
    throw "Cannot load cast by id";
  }
};
