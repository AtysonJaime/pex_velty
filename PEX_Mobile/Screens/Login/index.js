import React from "react";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";
import ButtonLink from "../../components/ButtonLink";
import ButtonTotal from "../../components/ButtonTotal";

const loginImage = require("../../assets/images/LoginImage.png");
const LoginScreen = ({ navigation }) => {
  const [emailInput, setEmailInput] = React.useState("");
  const [senhaInput, setSenhaInput] = React.useState("");
  return (
    <View style={styles.container}>
      <Image source={loginImage} style={styles.image}></Image>
      <View style={styles.containerInterno}>
        <Text style={styles.title}>Bem vindo a PEX</Text>
        <Text style={styles.subtitle}>
          Informe os seus dados para ter acesso a um mundo de economia para sua
          obra.
        </Text>
      </View>
      <View style={styles.containerInterno}>
        <TextInput
          style={styles.input}
          onChangeText={setEmailInput}
          value={emailInput}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={setSenhaInput}
          value={senhaInput}
          placeholder="Senha"
        />
      </View>
      <View style={styles.containerLink}>
        <ButtonLink label="Esqueci minha senha" />
      </View>
      <View style={styles.containerAcesso}>
        <ButtonTotal label="Acessar" />
      </View>
      <View style={styles.containerCriarConta}>
        <Text style={styles.textCriarConta}>Não possui uma conta?</Text>
        <ButtonLink
          label="Criar conta"
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#EFEFEF",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  image: {
    width: "100%",
  },
  containerInterno: {
    paddingHorizontal: 30,
    paddingVertical: 15,
  },

  title: {
    fontSize: 24,
    fontWeight: "500",
    lineHeight: 31.06,
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 19.6,
    color: "#999999",
  },

  input: {
    width: "100%",
    height: 56,
    borderRadius: 12,
    backgroundColor: "#F8F8F9",
    padding: 18,
    marginBottom: 8,
  },

  containerLink: {
    paddingHorizontal: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  containerAcesso: {
    paddingHorizontal: 30,
    paddingVertical: 5,
  },
  containerCriarConta: {
    paddingHorizontal: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textCriarConta: {
    marginRight: 5,
  },
});
