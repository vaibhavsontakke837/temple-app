import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dimensions, FlatList, Image, Modal, Pressable, StyleSheet, View } from "react-native";

import ImageCard from "../components/mobile/ImageCard";
import ScreenContainer from "../components/mobile/ScreenContainer";
import SectionHeader from "../components/mobile/SectionHeader";
import { theme } from "../styles/theme";

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - theme.spacing.md * 3) / 2;

const GALLERY_DATA = [
  { id: "1", image: require("../assets/gallery/1.jpg") },
  // { id: "2", image: require("../assets/gallery/2.jpg") },
  { id: "6", image: require("../assets/gallery/6.jpg") },
  { id: "8", image: require("../assets/gallery/templefront.jpeg") },
  { id: "9", image: require("../assets/gallery/templeside.jpeg") },
    { id: "16", image: require("../assets/gallery/img1.jpeg") },
  { id: "17", image: require("../assets/gallery/img2.jpeg") },
  { id: "18", image: require("../assets/gallery/img3.jpeg") },
  { id: "19", image: require("../assets/gallery/img4.jpeg") },
  { id: "20", image: require("../assets/gallery/img5.jpeg") },
  { id: "7", image: require("../assets/gallery/Murti.jpeg") },
  { id: "3", image: require("../assets/gallery/3.jpg") },
  { id: "4", image: require("../assets/gallery/4.jpg") },
  { id: "5", image: require("../assets/gallery/5.jpg") },
  { id: "10", image: require("../assets/gallery/SamathiPlace.png") },
  { id: "11", image: require("../assets/gallery/Chalma.png") },
  { id: "12", image: require("../assets/gallery/Datta.png") },
  { id: "13", image: require("../assets/gallery/Prachin.png") },
  { id: "14", image: require("../assets/gallery/SunChamatkar.png") },
  { id: "15", image: require("../assets/gallery/WarasaSmarak.png") },

];

export default function GalleryScreen() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openImage = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <ScreenContainer>
      <SectionHeader title={t("gallery")} />

      <FlatList
        data={GALLERY_DATA}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <Pressable onPress={() => openImage(item.image)}>
            <ImageCard 
              source={item.image} 
              style={{ width: CARD_WIDTH }} 
              showDownload={false}
            />
          </Pressable>
        )}
        showsVerticalScrollIndicator={false}
      />

      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={closeModal}
        animationType="fade"
      >
        <View style={styles.modalContainer}>
          <Pressable style={styles.modalOverlay} onPress={closeModal} />
          <View style={styles.modalContent}>
            <Pressable style={styles.closeButton} onPress={closeModal}>
              <Ionicons name="close" size={30} color="#fff" />
            </Pressable>
            {selectedImage && (
              <Image
                source={selectedImage}
                style={styles.fullImage}
                resizeMode="contain"
              />
            )}
          </View>
        </View>
      </Modal>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  row: {
    justifyContent: "space-between",
    marginBottom: theme.spacing.md,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  modalContent: {
    width: "90%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: -40,
    right: 0,
    zIndex: 1,
    padding: 10,
  },
  fullImage: {
    width: "100%",
    height: "100%",
  },
});
