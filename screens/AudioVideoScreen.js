import { useTranslation } from "react-i18next";
import MediaCard from "../components/mobile/MediaCard";
import ScreenContainer from "../components/mobile/ScreenContainer";
import SectionHeader from "../components/mobile/SectionHeader";

export default function AudioVideoScreen() {
  const { t } = useTranslation();

  const audioData = t("audioData", { returnObjects: true });
  const videoData = t("videoData", { returnObjects: true });

  return (
    <ScreenContainer>
      <SectionHeader title={t("audioSection")} />

      {Object.values(audioData).map((item, index) => (
        <MediaCard
          key={`audio-${index}`}
          title={item.title}
          desc={item.desc}
        />
      ))}

      <SectionHeader title={t("videoSection")} />

      {Object.values(videoData).map((item, index) => (
        <MediaCard
          key={`video-${index}`}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </ScreenContainer>
  );
}
