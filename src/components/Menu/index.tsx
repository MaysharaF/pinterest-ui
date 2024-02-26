import { StyleSheet, Text, View } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

import BottomSheet from "@gorhom/bottom-sheet";

import { theme } from "@/theme";
import { forwardRef } from "react";
import { MenuButton } from "../MenuButton";

export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
  return (
    <BottomSheet
      index={0}
      snapPoints={[0.01, 230]}
      ref={ref}
      backgroundStyle={styles.container}
      handleComponent={() => null}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <FontAwesome
            name="close"
            size={24}
            onPress={onClose}
            style={styles.close}
          />
          <Text style={styles.title}>Comece a criar agora</Text>
        </View>

        <View style={styles.options}>
          <MenuButton title="Pin" icon="home"/>
          <MenuButton title="Colagem" icon="copy"/>
          <MenuButton title="Pasta" icon="folder"/>
        </View>
      </View>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray[800],
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
  },
  title: {
    fontFamily: theme.fontFamily.medium,
    fontSize: 18,
    color: theme.colors.white,
    flex: 1,
    textAlign: "center",
    marginRight: 24,
  },
  close: {
    color: theme.colors.white,
  },
  options: {
    flexDirection: "row",
    gap: 16,
    marginTop: 32
  }
});
