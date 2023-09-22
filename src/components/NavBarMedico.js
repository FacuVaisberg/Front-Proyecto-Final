import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomeMedico from "../screens/medico/HomeMedico";
import AgregarRecetaScreen from "../screens/medico/AgregarRecetaScreen";
import DatosPersonalesScreen from "../screens/medico/DatosPersonalesScreen";
import RecetasSubidasScreen from "../screens/medico/RecetasSubidasScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

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
export default function NavBarMedico() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={HomeMedico}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Ionicons name="home" size={24} color="black" />
                  <Text style={{ fontSize: 12, color: "#000000" }}></Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="AgregarReceta"
          component={AgregarRecetaScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <MaterialIcons name="post-add" size={24} color="black" />
                  <Text style={{ fontSize: 12, color: "#000000" }}>
                    Agregar Receta
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="PharmaLife"
          component={HomeMedico}
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
          name="DatosPersonales"
          component={DatosPersonalesScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <FontAwesome name="user-md" size={24} color="black" />
                  <Text style={{ fontSize: 12, color: "#000000" }}>
                    Datos Personales
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="RecetasSubidas"
          component={RecetasSubidasScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Entypo
                    name="text-document-inverted"
                    size={24}
                    color="black"
                  />
                  <Text style={{ fontSize: 12, color: "#000000" }}>
                    Recetas Subidas
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
