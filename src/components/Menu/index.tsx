import { StyleSheet, Text, View } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

import BottomSheet from "@gorhom/bottom-sheet";

import { theme } from "@/theme";
import { forwardRef } from "react";

export const Menu = forwardRef<BottomSheet, MenuProps>(({onClose}, ref) => {
  return (
    <BottomSheet index={0} snapPoints={[0.01, 230]} ref={ref}>
      <View>
        <FontAwesome name="close" size={24} onPress={onClose}/>
        <Text>Comece a criar agora</Text>
      </View>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  container: {},
  content: {
    height: 300,
    width: "100%",
    backgroundColor: "white",
  },
  title: {
    fontFamily: theme.fontFamily.medium,
    fontSize: 18,
  },
});
