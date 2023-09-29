import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView} from "react-native";
import React from "react";

const RecetaNube = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.minibox}>
              <TouchableOpacity style={styles.boton}>
                <Text style={{ color: "white", fontSize: 20 }}>
                  ¡La Quiero!
                </Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#EFEFEF",
  },
  box: {
    backgroundColor: "#79AD60",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    height: "70%",
    width: "89.7%",
    left: "5.34%",
    top: "12.24%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 6,
  },
  minibox: {
    backgroundColor: "#668557",
    width: "90%",
    height: "85%",
    top: "6%",
    borderRadius: 10,
    marginBottom: 20,
  },
  boton: {
    backgroundColor: "#36C05D",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    width: "45%",
    height: "35%",
    top: "125%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 10,
  },
});

export default RecetaNube;
