import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";
import {
  NestableDraggableFlatList,
  NestableScrollContainer,
} from "react-native-draggable-flatlist";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather } from "@expo/vector-icons";

export default function HomeScreen() {
  const Companies = [
    {
      id: "company-01",
      name: "Firma 1",
    },
    {
      id: "company-02",
      name: "Firma 2",
    },
    {
      id: "company-03",
      name: "Firma 3",
    },
    {
      id: "company-04",
      name: "Firma 4",
    },
    {
      id: "company-05",
      name: "Firma 5",
    },
  ];

  const [data, setData] = useState(Companies);

  useEffect(() => {
    AsyncStorage.getItem("data").then((value) => {
      if (value) {
        AsyncStorage.clear();
      }
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="transfluent" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NestableScrollContainer>
          <Text style={styles.header}>Şirketler</Text>
          <NestableDraggableFlatList
            data={data}
            renderItem={({ item, drag }) => (
              <TouchableOpacity
                style={{
                  backgroundColor: "#86C17A",
                  margin: 10,
                  padding: 10,
                  borderRadius: 18,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                onPressIn={drag}
                activeOpacity={0.75}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 8,
                    alignItems: "center",
                  }}
                >
                  <Feather name="menu" size={24} color="black" />
                  <Text style={styles.text}>{item.name}</Text>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: "white",
                    padding: 4,
                    borderRadius: 8,
                  }}
                  onPress={() => {
                    alert("Randevu Alındı");
                  }}
                >
                  <Text>Randevu Al</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            )}
            dragItemOverflow={true}
            stickyHeaderHiddenOnScroll={true}
            keyExtractor={(item, index) => `item-${index}`}
            onDragEnd={({ data }) => {
              setData(data);
              AsyncStorage.setItem("data", JSON.stringify(data)).then(() => {
                console.log("Kaydedildi");
              });
            }}
          />
        </NestableScrollContainer>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  header: {
    fontSize: 30,
    paddingHorizontal: 24,
    textAlign: "center",
    color: "#86C17A",
  },
});
