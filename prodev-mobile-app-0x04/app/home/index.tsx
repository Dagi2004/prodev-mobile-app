import PropertyListing from "@/app-example/components/PropertyListing";
import { styles } from "./_homestyle";
import { Feather } from "@expo/vector-icons";
import {
    View,
    Text,
    TextInput,
    Image,
    ScrollView,
    Dimensions,
    TouchableHighlight,
} from "react-native"
import { FILTERS,SAMPLE_DATA } from "@/app-example/constants/data";
const Home=()=>{
    return(
        <View style={styles.container}>
            <View style={styles.searchGroup}>
                <View style={styles.searchFormGroup}>
                    <View style={styles.searchControlGroup}>
                        <Text style={styles.searchFormText}>
                            Where to?
                        </Text>
                        <TextInput style={{...styles.searchControl,...styles.textInputText}} placeholder="Location .Date .Add guest"/>
                    </View>
                    <View style={styles.searchButton}>
                        <Feather name="search" size={24} color="white"/>
                    </View>
                </View>
            </View>
            <View style={{
                height:72,
                backgroundColor:"white",
            }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.filterGroup}>

{FILTERS.map((filter,index)=>(
    <View style={styles.filterContainer} key={index}>
        <Text>{filter}</Text>
    </View>
))}
                    </View>
                </ScrollView>
            </View>
            <ScrollView style={styles.listingContainer}>
                <PropertyListing listings={SAMPLE_DATA}/>
                <View style={styles.paginationConatiner}>
<TouchableHighlight style={styles.showMoreButton}>
    <Text style={styles.showMoreButtonText}>Show More</Text>
</TouchableHighlight>
                </View>
            </ScrollView>
        </View>
    )
}
export default Home