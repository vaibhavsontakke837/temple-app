import { Image, StyleSheet, View, TouchableOpacity, Platform, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../styles/theme";

export default function ImageCard({ source, style, showDownload = false }) {
  const downloadImage = async () => {
    if (Platform.OS === "web") {
      try {
        const uri = typeof source === 'number' ? source : source.uri;
        const link = document.createElement("a");
        link.href = uri;
        link.download = `image_${Date.now()}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        alert("Failed to download image");
      }
    } else {
      try {
        const FileSystem = require("expo-file-system");
        const MediaLibrary = require("expo-media-library");
        
        const { status } = await MediaLibrary.requestPermissionsAsync();
        if (status !== "granted") {
          Alert.alert("Permission needed", "Please grant permission to save images");
          return;
        }

        const uri = Image.resolveAssetSource(source).uri;
        const fileUri = FileSystem.documentDirectory + `image_${Date.now()}.jpg`;
        
        const downloadResult = await FileSystem.downloadAsync(uri, fileUri);
        await MediaLibrary.saveToLibraryAsync(downloadResult.uri);
        
        Alert.alert("Success", "Image downloaded successfully");
      } catch (error) {
        Alert.alert("Error", "Failed to download image");
      }
    }
  };

  return (
    <View style={[styles.card, style]}>
      <Image source={source} style={styles.image} resizeMode="cover" />
      {showDownload && (
        <TouchableOpacity style={styles.downloadButton} onPress={downloadImage}>
          <Ionicons name="download-outline" size={20} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: theme.radii.md,
    overflow: "hidden",
    backgroundColor: theme.colors.white,
    ...theme.shadow.soft,
    position: "relative",
  },
  image: {
    width: "100%",
    height: 140,
  },
  downloadButton: {
    position: "absolute",
    bottom: 8,
    right: 8,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 20,
    padding: 8,
  },
});
