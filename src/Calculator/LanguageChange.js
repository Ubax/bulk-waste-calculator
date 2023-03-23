import { Stack } from "@mui/joy";
import { Image } from "./Image";
import { useTranslation } from "react-i18next";

export function LanguageChange() {
  const { i18n } = useTranslation();
  return (
    <Stack direction="row">
      <Image
        style={{
          height: 24,
          cursor: "pointer",
        }}
        src="/img/usa-flag.svg"
        alt="English language"
        onClick={() => i18n.changeLanguage("en")}
      />
      <Image
        style={{
          height: 24,
          cursor: "pointer",
        }}
        src="/img/germany-flag.svg"
        alt="German language"
        onClick={() => i18n.changeLanguage("de")}
      />
    </Stack>
  );
}
