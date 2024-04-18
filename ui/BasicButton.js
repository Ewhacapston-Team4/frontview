import { Pressable, Text, View, StyleSheet } from "react-native";

import Colors from "../constants/Colors";

function BasicButton({ title, onPress }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

export default BasicButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.point,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginVertical: 4,
    elevation: 4,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: {
    fontFamily: "nnsq-bold",
    color: Colors.darkblue,
    fontSize: 25,
  },
});