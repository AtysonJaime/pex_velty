import React from "react";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import ButtonLink from "../../components/ButtonLink";
import ButtonTotal from "../../components/ButtonTotal";

const loginImage = require("../../assets/images/SignUpImage.png");
const SignUpScreen = ({ navigation }) => {
  const [emailInput, setEmailInput] = React.useState("");
  const [senhaInput, setSenhaInput] = React.useState("");
  const [isSelected, setSelection] = React.useState(false);
  return (
    <View style={styles.container}>
      <Image source={loginImage} style={styles.image}></Image>
      <View style={styles.containerInterno}>
        <Text style={styles.title}>Crie sua conta na PEX</Text>
        <Text style={styles.subtitle}>
          Informe o seus dados para criar sua conta na PEX e economizar muito na
          sua obra
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
      <View style={styles.checkboxContainer}>
        <BouncyCheckbox
          onPress={(isChecked) => {
            setSelection(isChecked);
          }}
        />
        <Text style={styles.label}>
          Li e aceito os Termos de serviço e políticia de privacidade
        </Text>
      </View>
      <View style={styles.containerAcesso}>
        <ButtonTotal label="Continuar" />
      </View>
      <View style={styles.containerCriarConta}>
        <Text style={styles.textCriarConta}>já possui uma conta?</Text>
        <ButtonLink
          label="Acessar"
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
      </View>
    </View>
  );
};

export default SignUpScreen;

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

  checkboxContainer: {
    paddingHorizontal: 30,
    display: "flex",
    flexDirection: "row",
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
