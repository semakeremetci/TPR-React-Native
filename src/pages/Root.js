import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DetailsScreen from "./DetailsScreen";
import HomeScreen from "./HomeScreen";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function Root() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#000",
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "#86C17A",
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={27} color={color} />
          ),
        }}
        name="Nails"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-details"
              size={27}
              color={color}
            />
          ),
        }}
        name="Details"
        component={DetailsScreen}
      />
    </Tab.Navigator>
  );
}

export default Root;
