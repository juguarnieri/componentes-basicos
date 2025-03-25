import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Home() {
  const [name, setName] = useState("");
  const [classGroup, setClassGroup] = useState("");
  const [age, setAge] = useState("");

  const handleConfirm = () => {
    alert(`Name: ${name}, Class: ${classGroup}, Age: ${age}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preencha os campos</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Turma"
        value={classGroup}
        onChangeText={(text) => setClassGroup(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Idade"
        value={age}
        onChangeText={(text) => setAge(text)}
      />

      <Button title="Confirmar" onPress={handleConfirm} color="#ff00a8" />

      <TouchableOpacity style={styles.customButton} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirmar </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1bddf",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ff00a8",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#ff00a8",
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: "#e19fcb",
    paddingHorizontal: 10,
    marginBottom: 20,
    padding: 10,
  },
  customButton: {
    backgroundColor: "#ff00a8",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});