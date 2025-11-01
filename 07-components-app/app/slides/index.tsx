import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import ThemeText from "@/presentation/shared/ThemeText";
import {
  View,
  Text,
  ImageSourcePropType,
  FlatList,
  Image,
  useWindowDimensions,
} from "react-native";

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: "Titulo 1",
    desc: "Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.",
    img: require("../../assets/images/slides/slide-1.png"),
  },
  {
    title: "Titulo 2",
    desc: "Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ",
    img: require("../../assets/images/slides/slide-2.png"),
  },
  {
    title: "Titulo 3",
    desc: "Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.",
    img: require("../../assets/images/slides/slide-3.png"),
  },
];

const SlidesScreen = () => {
  return (
    <ThemedView>
      <FlatList
        data={items}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
      />
      <ThemedButton className="absolute bottom-12 right-5 2-[150px]">
        Siguiente
      </ThemedButton>
      <ThemedButton className="absolute bottom-12 right-5 2-[150px]">
        Finalizar
      </ThemedButton>
    </ThemedView>
  );
};
export default SlidesScreen;

interface SlideItemProps {
  item: Slide;
}

const SlideItem = ({ item }: SlideItemProps) => {
  const { width } = useWindowDimensions();
  const { title, desc, img } = item;
  return (
    <ThemedView
      className="flex-1 rounded p-10 justify-center bg-red-500"
      style={{ width }}
    >
      <Image
        source={img}
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: "center",
          alignSelf: "center",
        }}
      />
      <ThemeText
        type="h1"
        className="text-light-primary dark:text-dark-primary"
      >
        {title}
      </ThemeText>

      <ThemeText className="mt-10">{desc}</ThemeText>
    </ThemedView>
  );
};
