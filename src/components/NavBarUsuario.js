import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Platform, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomeUsuario from "../screens/usuario/HomeUsuario";
import MisRecetas from "../screens/usuario/MisRecetas";
import MisSolicitudes from "../screens/usuario/MisSolicitudes";
import FarmaciasCercanas from "../screens/usuario/FarmaciasCercanas";
import CuentaUsuario from "../screens/usuario/CuentaUsuario";

import { Ionicons } from '@expo/vector-icons';
import { Entypo } from "@expo/vector-icons"; //recetas
import { FontAwesome5 } from "@expo/vector-icons"; //logo
import { Feather } from '@expo/vector-icons'; //mas
import { FontAwesome } from "@expo/vector-icons"; //farmacias


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
export default function NavBarUsuario() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
          name="MisRecetas"
          component={MisRecetas}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center", alignContent: 'center' }}>
                  <Entypo name="text-document-inverted" size={24} color="black"/>
                  <Text style={{ fontSize: 12, color: "#000000" }}>
                    Mis Recetas
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="FarmaciasCercanas"
          component={FarmaciasCercanas}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center", alignContent: 'center' }}
                >
                  <FontAwesome name="user-md" size={24} color="black" />
                  <Text style={{ fontSize: 12, color: "#000000" }}>
                    Farmacias Cercanas
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="HomeUsuario"
          component={HomeUsuario}
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
          name="MisSolicitudes"
          component={MisSolicitudes}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center", alignContent: 'center' }}>
                  <Ionicons name="notifications-outline" size={24} color="black" />
                  <Text style={{ fontSize: 12, color: "#000000", textAlign: 'center' }}>
                    Mis Solicitudes
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="CuentaUsuario"
          component={CuentaUsuario}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center", alignContent: 'center' }}>
                  <Feather name="more-horizontal" size={24} color="black" />
                  <Text style={{ fontSize: 12, color: "#000000" }}>
                    Mi Cuenta
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
