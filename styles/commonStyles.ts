import { colors } from "./colors";
import { spacings } from "./spacing";




export const commonStyles = {
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacings.md,
  },
  card: {
    backgroundColor: colors.cardBg,
    borderRadius: 10,
    padding: spacings.md,
    marginBottom: spacings.md,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
};
