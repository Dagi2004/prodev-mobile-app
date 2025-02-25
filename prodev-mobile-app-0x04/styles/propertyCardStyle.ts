import { StyleSheet } from "react-native"
const styles=StyleSheet.create({
    container:{
        height:400,
        borderRadius:10,
        overflow:"hidden",
        marginBottom:16
    },
    overlay : {
        height:400,
        backgroundColor:"rgba(0,0,0,0.3)",
        padding:16,
        justifyContent:"space-between"
    },
    favoriteGroup:{
        alignItems:"flex-end"
    },
    favoriteOverlay:{
        backgroundColor:"rgba(0,0,0,0.4)",
        width:48,
        height:48,
        borderRadius:24,
        justifyContent:"center",
        alignItems:"center"
    },
    rateGroup:{
        flexDirection:"row",
        alignItems:"center",
        columnGap:5
    },
    
    group:{
        position:"absolute",
        left:30,
        bottom:30
    },
    priceGroup:{
        backgroundColor:"#f9f9f9",
        borderRadius:30,
        width:104,
        height:45,
        alignItems:"center",
        justifyContent:"center"

    } ,
    rateText:{
        color:"white",
        fontSize:17,
        fontWeight:500,
        marginLeft:4
    } ,
    priceText:{
        fontSize:17,
        fontWeight:500,
        color:"black"
    },
    cardGroup:{
        flexDirection:"column",
        columnGap:40,
        alignItems:"center"
    } , 
    cardTextGroup:{
        width:205
    } ,
    cardLargeText:{
        fontWeight:600,
        fontSize:26,
        color:"white"
    } , 
    cardSmallText: {
        fontSize: 15,
        fontWeight: 400,
        color: "white",
      },
})
export {styles}