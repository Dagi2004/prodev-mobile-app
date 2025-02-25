import { StyleSheet } from "react-native";
const styles=StyleSheet.create({
    container: {
        justifyContent:"center",
        
        flex: 1,
        
      }, 
      searchGroup:{
        backgroundColor:"#34967c",
        width:430,
        height:135
    },  
    searchFormGroup:{
        width:390,
        height:54,
        position:"absolute",
        top:50,
    borderRadius:15,
        left:3,
        backgroundColor:"white",
        borderColor:"#F6F6F65C",
        flexDirection:"row",
alignItems:"center",
        justifyContent:"space-around",

    } ,
    searchControlGroup:{
        width:174,
        height:34,
        marginLeft:3,
        marginTop:6,
        flexDirection:"column",
    } ,
    searchFormText:{
        color:"#161117",
        fontWeight:600,
        fontSize:12
    } ,
    searchControl:{
        width:174,
        height:15,
        flexDirection:"row",
        alignItems:"center",
        gap:6
    }, 
    textInputText:{
        fontSize:12,
        color:"#BEBEBE",
        fontWeight:400
    } ,
    searchButton:{
        width:39,
        height:39,
        borderRadius:45,
        backgroundColor:"#FFA800"
    } , 
    filterGroup:{
        width:430,
        height:72,
        color:"white",
        flexDirection:"row",
        gap:6,
        boxShadow:"white"
    } ,
    filterContainer:{
        width:62,
        height:56
    } ,
    listingContainer:{
        width:390,
        height:374,
        color:"white",
        borderRadius:18
    } ,
    paginationConatiner:{
        justifyContent:"center",
        alignItems:"center",
      marginTop:30
    } ,
    showMoreButton:{
  backgroundColor:"#161117",
  borderRadius:50,
  width:180,
  height:55
    } ,
    showMoreButtonText:{
        color:"white",
        fontWeight:500,
        marginHorizontal:"auto",
       justifyContent:"center",
       alignContent:"center",
        fontSize:20
    }
})
export {styles}