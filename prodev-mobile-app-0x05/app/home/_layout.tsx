import { Tabs } from "expo-router";
import { AntDesign,EvilIcons,Feather,FontAwesome,Ionicons } from "@expo/vector-icons";
const HomeRootLayout=()=>{
    return(
        <Tabs screenOptions={{
            tabBarActiveTintColor:"#34967C",
            headerShown:false
        }}>
 <Tabs.Screen
        name="index" options={{
            title:"Home",
            tabBarIcon:({color})=><AntDesign name="home" color={color} size={24}/>
        }}
        />
        <Tabs.Screen
        name="search" options={{
            title:"Search",
            tabBarIcon:({color})=><Feather name="search" color={color} size={24}/>
        }}
        />
        <Tabs.Screen
        name="saved" options={{
            title:"Saved",
            tabBarIcon:({color})=><EvilIcons name="heart" color={color} size={27}/>
        }}
        />
        <Tabs.Screen
        name="inbox" options={{
            title:"Inbox",
            tabBarIcon:({color})=><Ionicons name="chatbubbles-outline" size={24} color={color} />
        }}
        />
         <Tabs.Screen
        name="profile" options={{
            title:"Profile",
            tabBarIcon:({color})=><FontAwesome name="user-o" size={24} color={color} />
        }}
        />
        </Tabs>
       
    )
}
export default HomeRootLayout