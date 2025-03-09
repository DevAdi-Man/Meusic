import { Dimensions } from "react-native";
import { PercentageFunction } from "../utils/Types";

const {width:deviceWidht,height:deviceHeight} = Dimensions.get('window');

export const wp: PercentageFunction = percentage => {
    const width = deviceWidht;

    return (percentage * width) /100;
}

export const hp: PercentageFunction = percentage =>{
    const height = deviceHeight;
    return (percentage * height) / 100;
}