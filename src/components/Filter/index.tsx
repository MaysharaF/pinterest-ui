import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

import { theme } from "@/theme";

export function Filter({
  filter,
  selected,
  ...rest
}: PressableProps & FilterProps) {
  return (
    <Pressable
      style={[styles.pressable, selected && styles.pressableSelected]}
      {...rest}
    >
      <Text style={styles.text}>{filter}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    paddingBottom: 6,
  },
  text: {
    color: theme.colors.white,
    fontSize: 16,
    fontFamily: theme.fontFamily.medium,
  },
  pressableSelected: {
    borderBottomWidth: 4,
    borderBottomColor: theme.colors.white,
  },
});
