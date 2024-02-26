import { ScrollView, StyleSheet, View } from "react-native";

import { Post } from "@/components/Post";

export function Posts({ posts }: PostsProps) {
  function postsByColumn(column: "rigth" | "left") {
    const rest = column === "left" ? 0 : 1;

    return posts
      .filter((_, index) => index % 2 === rest)
      .map((post) => <Post key={post.id} post={post} />);
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.list}
    >
      <View style={styles.container}>
        <View style={styles.column}>{postsByColumn("left")}</View>
        <View style={styles.column}>{postsByColumn("rigth")}</View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  column: {
    flex: 1,
  },
  list: {
    paddingTop: 16,
  },
});
