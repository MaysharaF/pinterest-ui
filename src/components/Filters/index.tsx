import { FlatList, StyleSheet } from "react-native";

import { Filter } from "@/components/Filter";

export function Filters({ filters, filter, onChange }: FiltersProps) {
  return (
    <FlatList
      data={filters}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <Filter
          filter={item}
          selected={item === filter}
          onPress={() => onChange(item)}
        />
      )}
      horizontal
      style={styles.list}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: 6,
    maxHeight: 34
  },
  content: {
    gap: 24,
    paddingHorizontal: 8,
  },
});
