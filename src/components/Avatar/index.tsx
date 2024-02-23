import { Image, StyleSheet, ImageProps } from "react-native";

import { theme } from "@/theme";

export function Avatar({ selected, ...rest }: AvatarProps & ImageProps) {
  return <Image style={[styles.image, selected && styles.selected]} {...rest} />;
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    borderRadius: 25,
  },
  selected: {
    borderWidth: 3,
    borderColor: theme.colors.white,
  },
});
