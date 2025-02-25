import { Text, View,TextInput,TouchableOpacity,Image } from "react-native";
import { styles } from "@/styles/_joinstyle";
import { SafeAreaProvider,SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome,Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
export default function SignIn() {
    const router=useRouter();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
      <View style={styles.iconsection}
    >

      <Ionicons name="arrow-back" size={25} onPress={()=>router.push("/")}/>
      <Image source={require("@/assets/images/logo-green.png")}/>
    </View>
    <View style={styles.titleTextGroup}>
    <Text style={styles.titleText}>Create Your </Text>
    <Text style={styles.titleText}>Account</Text>
    <Text style={styles.subText}>Enter your details to create a new account.</Text>
    </View>
   
    <View style={styles.formGroup}>
      <View>
        <Text style={styles.formLabel}>Email</Text>
        <TextInput keyboardType="email-address" style={styles.formControl}></TextInput>
      </View>
      <View style={{marginTop:20}}>
      <Text style={styles.formLabel}>Password</Text>
      <View style={styles.formPasswordControl}>
        <TextInput style={{flex:1}}></TextInput>
        <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
      </View>
      </View>
      <View style={{marginTop:20}}>
      <Text style={styles.formLabel}>Confirm Password</Text>
      <View style={styles.formPasswordControl}>
        <TextInput style={{flex:1}}></TextInput>
        <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
      </View>
      </View>

      
      

    </View>
    <TouchableOpacity style={styles.primaryButton}>
      <Text style={styles.buttonText}>Sign In</Text>
    </TouchableOpacity>
    <View style={styles.dividerGroup}>
<View style={styles.divider}>
</View>
<Text style={styles.dividerText}>
  OR
</Text>
<View style={styles.divider}></View>

</View>
<View style={styles.signupgroup}>
<TouchableOpacity style={styles.secondaryButton}>
  <View style={{flexDirection:"row",alignItems:"center",gap:5}}>
    <Image source={require("@/assets/images/google.png")}/>
    <Text style={styles.signupTitleText}>Continue with Google</Text>
  </View>
</TouchableOpacity>
<TouchableOpacity style={styles.secondaryButton}>
<View style={{flexDirection:"row",alignItems:"center",gap:5}}>
<Image source={require("@/assets/images/facebook.png")} />
    <Text style={styles.signupTitleText}>Continue with Facebook</Text>
  </View>
</TouchableOpacity>
</View>
  <View style={styles.subTextGroup}>
    <Text style={styles.subText}>Don't have an account?</Text>
    <TouchableOpacity onPress={()=>router.push("/signin")}>
    <Text style={styles.subTextJoin} >Join Now</Text>
    </TouchableOpacity>
   

  </View>

    </SafeAreaView>
    </SafeAreaProvider>
   
  );
}
