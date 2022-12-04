import { StyleSheet, Pressable, Text } from "react-native";

export default function ButtonTotal({ label, onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 56,
    borderRadius: 12,
    backgroundColor: "#F09200",
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 18.12,
  },
});
