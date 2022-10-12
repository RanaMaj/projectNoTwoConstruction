import { StyleSheet } from "react-native";

export const stylesFactory = (width) => {
  return StyleSheet.create({
    card: {
      width: width / 2 - 35,
      height: width / 2 - 30,
      backgroundColor: "white",
      justifyContent: "space-evenly",
      alignItems: "center",
      elevation: 3,
      borderRadius: 8,
      marginVertical: 10,
      marginHorizontal: 12,
    },
  });
};
