import React, { useMemo } from "react";
import { View, Text, useWindowDimensions } from "react-native";
import { stylesFactory } from "./style";

const Test = () => {
  const { width } = useWindowDimensions();

  const styles = useMemo(() => {
    return stylesFactory(width);
  }, [width]);

  return (
    <View style={styles.card}>
      <Text>Test</Text>
    </View>
  );
};

export default Test;
