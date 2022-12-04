import { StyleSheet, View, Pressable, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Button({ label, onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>
          {label}
          <AntDesign
            style={styles.buttonIcon}
            name="arrowright"
            size={24}
            color="white"
          />
        </Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 32,
    right: 20,
    backgroundColor: "#F09200",
    borderRadius: 20,
  },
  button: {
    width: "100%",
    height: "100%",
    padding: 25,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
    display: "flex",
    justifyContent: "center",
  },
  buttonIcon: {
    marginLeft: 5,
  },
});
