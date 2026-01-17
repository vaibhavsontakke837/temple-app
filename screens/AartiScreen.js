import { useTranslation } from "react-i18next";

import AartiCard from "../components/mobile/AartiCard";
import ScreenContainer from "../components/mobile/ScreenContainer";
import SectionTitle from "../components/SectionTitle";
import { AARTI_LIST } from "../data/aarti";

export default function AartiScreen() {
  const { t } = useTranslation();

  return (
    <ScreenContainer>
      <SectionTitle title={t("aarti")} />

      {AARTI_LIST.map((item) => (
        <AartiCard
          key={item.id}
          aartiId={item.id}
          audio={item.audio}
        />
      ))}
    </ScreenContainer>
  );
}
