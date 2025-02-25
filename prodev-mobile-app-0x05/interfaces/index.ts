import { ImageSourcePropType } from "react-native"
export interface PropertyListingProps{
    image:ImageSourcePropType
    favorite:boolean
    amount:number
    propertyName:string
    discount?:string
    rate:number
   
    currency:string
    location:PropertyLocationProps
}
export interface PropertyLocationProps{
country:string
city:string
street:string
}
export interface PropertyListing{
    listings:PropertyListingProps[]
}