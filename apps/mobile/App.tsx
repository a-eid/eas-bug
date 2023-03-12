import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { round } from "utils"

export function App() {
  return (
    <View style={styles.container}>
      <Text>{round(1.22222, 2)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
