import { View, Image, FlatList } from "react-native";

import { styles } from "./styles";

import logopng from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";
import { GameCard } from "../../components/GameCard";

import { GAMES } from "../../utils/games";
export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logopng} style={styles.logo} />
      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />
      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        contentContainerStyle={styles.contentList}
        horizontal
      />
    </View>
  );
}
