import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  upper_card: {
    padding: 7,
    borderColor: "black",
  },
  title: {
    fontWeight: "bold",
    fontSize: 29,
    color: "#01452c",
  },
  static_text: {
    color: "tomato",
    fontWeight: "bold",
    padding: 3,
  },
  dynamic_text: {
    fontWeight: "bold",
    padding: 3,
  },
  text_view: {
    flexDirection: "row",
  },
  lower_card: {
    backgroundColor: "white",
    padding: 3,
  },
  details_title: {
    fontWeight: "bold",
    fontSize: 23,
    alignSelf: "center",
    color: "#01452c",
    padding: 3,
  },
  button_container: {
    margin: 3,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {},
});
