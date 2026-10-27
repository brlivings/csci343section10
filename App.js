import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Merriweather_700Bold } from "@expo-google-fonts/merriweather";
import {
  SourceSans3_400Regular,
  SourceSans3_600SemiBold,
} from "@expo-google-fonts/source-sans-3";

import USNewsScreen from "./screens/USNewsScreen";
import WorldNewsScreen from "./screens/WorldNewsScreen";
import TechNewsScreen from "./screens/TechNewsScreen";
import BookmarkedNewsScreen from "./screens/BookmarkedNewsScreen";
import NewsDetailScreen from "./screens/NewsDetailScreen";
import Colors from "./constants/colors";

// Keep the splash screen up until the fonts are ready
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

// Titles shown in the drawer header depending on which tab is open
const tabTitles = {
  USNews: "U.S. News",
  WorldNews: "World News",
  TechNews: "Tech News",
};

// Bottom tabs holding the three news categories
function TabNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.accent,
        tabBarInactiveTintColor: Colors.inactive,
        tabBarStyle: { backgroundColor: Colors.primary },
        sceneStyle: { backgroundColor: Colors.background },
        tabBarLabelStyle: { fontFamily: "sansBold", fontSize: 12 },
      }}
    >
      <Tabs.Screen
        name="USNews"
        component={USNewsScreen}
        options={{
          tabBarLabel: "U.S.",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="flag" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="WorldNews"
        component={WorldNewsScreen}
        options={{
          tabBarLabel: "World",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="earth" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="TechNews"
        component={TechNewsScreen}
        options={{
          tabBarLabel: "Tech",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hardware-chip-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

// Side drawer with the tab navigator and the bookmarks page
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary },
        headerTintColor: "white",
        headerTitleStyle: { fontFamily: "serifBold" },
        sceneStyle: { backgroundColor: Colors.background },
        drawerStyle: { backgroundColor: Colors.background },
        drawerActiveTintColor: "white",
        drawerActiveBackgroundColor: Colors.primary,
        drawerInactiveTintColor: Colors.primary,
        drawerLabelStyle: { fontFamily: "sansBold", fontSize: 16 },
      }}
    >
      <Drawer.Screen
        name="NewsTabs"
        component={TabNavigator}
        options={({ route }) => ({
          title: tabTitles[getFocusedRouteNameFromRoute(route) ?? "USNews"],
          drawerLabel: "Latest News",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="newspaper-outline" color={color} size={size} />
          ),
        })}
      />
      <Drawer.Screen
        name="BookmarkedNews"
        component={BookmarkedNewsScreen}
        options={{
          title: "Bookmarked News",
          drawerLabel: "Bookmarks",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="bookmarks-outline" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    serifBold: Merriweather_700Bold,
    sans: SourceSans3_400Regular,
    sansBold: SourceSans3_600SemiBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // Show nothing (splash stays visible) until fonts finish loading
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer onReady={onLayoutRootView}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary },
            headerTintColor: "white",
            headerTitleStyle: { fontFamily: "serifBold" },
            contentStyle: { backgroundColor: Colors.background },
          }}
        >
          <Stack.Screen
            name="DrawerScreen"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NewsDetail"
            component={NewsDetailScreen}
            options={{ title: "Story", headerBackTitle: "Back" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
