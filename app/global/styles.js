import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF0E6",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 20,
  },
  header: {
    color: "#fa8072",
    fontWeight: "bold",
    fontSize: 30,
    letterSpacing: 6,
  },
  contentContainer: {
    flex: 4,
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#6a5acd",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 40,
  },
  disabledBtn: {
    backgroundColor: "#BFB8E9",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default styles;
