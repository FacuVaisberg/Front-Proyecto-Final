import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomeFarmacia from "../screens/farmacia/HomeFarmacia";
import RecetasPendientes from "../screens/farmacia/RecetasPendientes";
import RegistroVentas from "../screens/farmacia/RegistroVentas";

import { FontAwesome5 } from "@expo/vector-icons"; //logo
import { Ionicons } from '@expo/vector-icons'; // recetasPendientes
import { Octicons } from '@expo/vector-icons'; //historialVentas

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    heigth: 60,
    backgroundColor: "#7CB164",
  },
};
export default function NavBarFarmacia() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="RecetasPendientes"
          component={RecetasPendientes}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Ionicons name="receipt" size={24} color="black" />
                  <Text style={{ fontSize: 12, color: "#000000" }}>
                    Recetas Pendientes
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="PharmaLife"
          component={HomeFarmacia}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    top: Platform.OS == "ios" ? -10 : -20,
                    width: Platform.OS == "ios" ? 50 : 60,
                    heigth: Platform.OS == "ios" ? 50 : 60,
                    borderRadius: Platform.OS == "ios" ? 25 : 30,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#7CB164",
                  }}
                >
                  <FontAwesome5
                    name="heartbeat"
                    size={24}
                    color={focused ? "#000000" : "#111"}
                  />
                  <Text style={{ fontSize: 12, color: "#000000" }}></Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="RegistroVentas"
          component={RegistroVentas}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Octicons name="history" size={24} color="black" />
                  <Text style={{ fontSize: 12, color: "#000000" }}>
                    Historial de ventas
                  </Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navContainer: {
    position: "absolute",
    alignItems: "center",
    bottom: 0,
  },
  navBar: {
    flexDirection: "row",
    backgroundColor: "#7CB164",
    width: "97%",
    justifyContent: "space-evenly",
    borderRadius: 30,
  },
  iconBehave: {
    padding: 14,
  },
});
