// import { StatusBar } from "expo-status-bar";
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
import {
  GestureHandlerRootView,
  State,
  LongPressGestureHandler,
} from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Feather } from "@expo/vector-icons";

export default function HomeScreen() {
  const Companies = [
    {
      id: "service-01",
      name: "Hizmet 1",
      category: "Kuaför",
      processTime: "40 dk",
      price: "250 TL",
    },
    {
      id: "service-02",
      name: "Hizmet 2",
      category: "Kuaför",
      processTime: "40 dk",
      price: "250 TL",
    },
    {
      id: "service-03",
      name: "Hizmet 3",
      category: "Kuaför",
      processTime: "40 dk",
      price: "250 TL",
    },
    {
      id: "service-04",
      name: "Hizmet 4",
      category: "Kuaför",
      processTime: "40 dk",
      price: "250 TL",
    },
    {
      id: "service-05",
      name: "Hizmet 5",
      category: "Kuaför",
      processTime: "40 dk",
      price: "250 TL",
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
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NestableScrollContainer>
          <Text style={styles.header}>Hizmet Listesi</Text>
          <NestableDraggableFlatList
            data={data}
            renderItem={({ item, drag }) => (
              <View
                style={{
                  backgroundColor: "#86C17A",
                  marginHorizontal: 48,
                  marginVertical: 10,
                  padding: 16,
                  borderRadius: 18,
                  display: "flex",
                  flexDirection: "row",
                }}
                // onPressIn={drag}
              >
                <TouchableOpacity onPressIn={drag} style={{ padding: 6 }}>
                  <View
                    style={{ padding: 6, flex: 1, backgroundColor: "white" }}
                  ></View>
                </TouchableOpacity>
                <View
                  style={{
                    display: "flex",
                    gap: 8,
                    alignItems: "center",
                    flex: 1,
                    marginLeft: 4,
                  }}
                >
                  <View style={{ paddingHorizontal: 4, width: "100%" }}>
                    <Text
                      style={{
                        color: "white",
                        paddingVertical: 10,
                        fontSize: 20,
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text style={{ color: "white" }}>
                      Kategori: {item.category}
                    </Text>
                    <Text style={{ color: "white" }}>
                      İşlem Süresi: {item.processTime}
                    </Text>
                    <Text style={{ color: "white" }}>Ücret: {item.price}</Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "white",
                        padding: 12,
                        borderRadius: 8,
                        alignSelf: "center",
                        width: "100%",
                        margin: 8,
                      }}
                      onPress={() => {
                        alert("Randevu Alındı");
                      }}
                    >
                      <Text style={{ alignSelf: "center" }}>Düzenle</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
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
