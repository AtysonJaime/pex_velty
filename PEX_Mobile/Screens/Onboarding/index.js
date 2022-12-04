import { StyleSheet, Text, View, Image } from "react-native";
import Button from "./components/Button";

const imageBackground = require("../../assets/images/Vector.png");
const frameLogo = require("../../assets/images/Logo.png");

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={frameLogo} style={styles.image}></Image>
      <View style={styles.textArea}>
        <Text style={styles.title}>Bem vindo a PEX</Text>
        <Text style={styles.subtitle}>
          Economize tempo e dinheiro em todas as etapas da sua obra. Na reforma
          ou construção nós iremos te auxiliar em tudo.
        </Text>
      </View>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <Button
        label="Continuar"
        navigation
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    </View>
  );
};
export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    padding: 32,
    display: "flex",
    backgroundColor: "#EFEFEF",
    backgroundImage: `url(${imageBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "center",
    width: "100%",
    height: "100%",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 200,
    height: 110,
  },

  textArea: {
    display: "flex",
    marginTop: 122,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "500",
    lineHeight: 41,
    marginBottom: 16,
  },

  subtitle: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 19.6,
    color: "#999999",
    textAlign: "center",
  },
});
