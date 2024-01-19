import { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [borderColor, setBorderColor] = useState<"lightgray" | "purple">(
    "lightgray"
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Talk GPT</Text>
      <Text style={styles.description}>
        Press the button to start talking to GPT-3
      </Text>
      <Text style={styles.message}>Yor mesaage:</Text>
      <Pressable
        onPressIn={() => setBorderColor("purple")}
        onPressOut={() => setBorderColor("lightgray")}
        style={{
          ...styles.content,
          borderColor: borderColor,
        }}
      >
        <Text>Hold to Speak</Text>
      </Pressable>
      <Button
        title="Reply last message"
        onPress={() => alert("Simple Button pressed")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e8e8",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    fontWeight: "normal",
  },
  message: {
    fontSize: 14,
    fontWeight: "600",
  },
  content: {
    backgroundColor: "#efefef",
    borderRadius: 10,
    padding: 20,
    marginVertical: 20,
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
});
