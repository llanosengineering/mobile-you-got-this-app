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
    textAlign: "center",
  },
  subHeader: {
    color: "charcoal",
    fontWeight: "bold",
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
    backgroundColor: "#6b8e23",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 40,
  },
  disabledBtn: {
    backgroundColor: "#708090",
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
