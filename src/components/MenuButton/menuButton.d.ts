import { FontAwesome } from "@expo/vector-icons";

type MenuButtonProps = {
  title: string;
  icon: keyof typeof FontAwesome.glyphMap;
};
