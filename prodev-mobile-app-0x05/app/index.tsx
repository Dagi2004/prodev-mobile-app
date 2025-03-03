import { Dimensions, ImageBackground, Text, View ,Image,TouchableOpacity} from "react-native";
import {SafeAreaView,SafeAreaProvider} from "react-native-safe-area-context"
import { styles } from "@/styles/_mainstyle";
import { useRouter } from "expo-router";


const {height}=Dimensions.get("window")
export default function Index() {
  const router=useRouter();
  
    return (
      <SafeAreaProvider>
        <SafeAreaView style={{flex:1}}>
          <ImageBackground source={require("@/assets/images/hero-icon.png")}
           style={[styles.backgroundImageContainer,{height}]}
           resizeMode="cover"
          >
            <View style={styles.container}>
            <View style={styles.logoConatiner}>
          <Image source={require("@/assets/images/Logo.png")} />
          </View>
            
        
          <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Find your favorite place here</Text>
  <Text style={styles.titleSubText}>The best prices for over 2 </Text>
  <Text style={styles.titleSubText}>million properties worldwide</Text>
          </View>
          <View style={{position:"absolute",bottom:0,width:"100%"}}>
         <View style={styles.buttonGroup}>
  <TouchableOpacity style={styles.buttonPrimary} 
  onPress={()=>router.push("/join")}>
  
    <Text style={{...styles.buttonPrimaryText,color:"black"}} 
   >Join Here</Text>
  
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonSecondary} onPress={()=>router.push("/signin")}>
    <Text style={{...styles.buttonSecondaryText,color:"white"}}>Sign In </Text>
  </TouchableOpacity>
         </View>
         <View style={{alignItems:"center",paddingVertical:20}}>
         <TouchableOpacity onPress={() => router.push("/home" as any)}>
          <Text style={{color:"white"}}>Continue to home</Text>
          </TouchableOpacity>
  
         </View>
         </View>
         </View>
         
          </ImageBackground>
        </SafeAreaView>
      </SafeAreaProvider>
      
    );
  }
  