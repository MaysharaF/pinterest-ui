import { Pressable, StyleSheet, Text, View } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

import { theme } from "@/theme";

//@ts-ignore
export function MenuButton({ title, icon }: MenuButtonProps) {
  return (
    <Pressable style={styles.container}>
      <View style={styles.icon}>
        <FontAwesome name={icon} size={32} color={theme.colors.white} />
      </View>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    color: theme.colors.white,
    fontFamily: theme.fontFamily.medium,
    fontSize: 14,
    marginTop: 10,
  },
  icon: {
    padding: 24,
    backgroundColor: theme.colors.gray[700],
    borderRadius: 22,
  },
});
