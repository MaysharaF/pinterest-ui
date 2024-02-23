import { View, StyleSheet, SafeAreaView } from "react-native";

import { theme } from "@/theme";
import { Filters } from "@/components/Filters";
import { FILTERS } from "@/utils/filters";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState(FILTERS[0]);
  return (
    <SafeAreaView style={styles.container}>
      <Filters filters={FILTERS} filter={filter} onChange={setFilter} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
  },
  text: {
    fontSize: 22,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold,
  },
});
