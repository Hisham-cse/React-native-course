import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        }}
    >
      <Text style={{
        fontSize:20,
        fontWeight:"700",
        color:"#aa99ff" 
        }}>React Native once coded can be used on both Android and IOS</Text>
    </View>
  );
}
