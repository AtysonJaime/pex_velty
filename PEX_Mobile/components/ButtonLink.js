import { StyleSheet, Pressable, Text } from "react-native";

export default function ButtonLink({ label, onPress }) {
  return (
    <Pressable style={styles.link} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  buttonLabel: {
    color: "#F09200",
    fontSize: 14,
  },
});
