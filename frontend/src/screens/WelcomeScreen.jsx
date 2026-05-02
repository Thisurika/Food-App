import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView
} from "react-native";
import { StatusBar } from "expo-status-bar";

const { width, height } = Dimensions.get("window");

const WelcomeScreen = ({ onExplore }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: "https://www.pritikin.com/wp-content/uploads/2024/05/Healthy-Plate-Weight-Loss-Solution-Strategies-1024x576.jpg" }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.brandTitle}>Welcome to GoFood</Text>
          <Text style={styles.title}>Fast delivery at{"\n"}your doorstep</Text>
          <Text style={styles.subtitle}>
            Home delivery and online reservation{"\n"}system for restaurants & cafe
          </Text>
        </View>

        <TouchableOpacity 
          style={styles.button} 
          onPress={onExplore}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Let's Explore</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B5D49", // Dark green
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 60,
    paddingHorizontal: 30,
  },
  imageContainer: {
    width: width * 0.8,
    height: width * 0.8,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: (width * 0.8) / 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    alignItems: "center",
    marginVertical: 30,
  },
  brandTitle: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "600",
    marginBottom: 10,
    letterSpacing: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    lineHeight: 40,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(255,255,255,0.7)",
    textAlign: "center",
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    paddingVertical: 18,
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: "#0B5D49",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
