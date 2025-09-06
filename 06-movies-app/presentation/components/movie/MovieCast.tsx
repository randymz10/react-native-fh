import React from "react";
import { FlatList, Text } from "react-native";
import { Cast } from "@/infrastructure/interfaces/cast.interface";
import { ActorCard } from "./ActorCard";

interface Props {
  cast: Cast[];
}
const MovieCast = ({ cast }: Props) => {
  return (
    <>
      <Text className="font-bold text-2xl ml-5 mb-5">Actores</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={cast}
        keyExtractor={(item, i) => `${item.id} -${i}`}
        renderItem={({ item }) => <ActorCard actor={item} />}
      />
    </>
  );
};

export default MovieCast;
