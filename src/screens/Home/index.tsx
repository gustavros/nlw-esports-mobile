import { View, Image, FlatList } from "react-native";

import logoImage from "../../assets/logo-nlw-esports.png";

import { styles } from "./styles";
import { GAMES } from "../../utils/games";

import { Heading } from "../../components/Heading";
import { GameCard } from "../../components/GameCard";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.logo} />

      <Heading
        title="Encontre o seu duo!"
        subtitle="Selecione o que deseja jogar..."
      />

      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}
