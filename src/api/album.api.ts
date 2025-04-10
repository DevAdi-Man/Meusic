import axios from "axios";
import { axiosInstance } from "./user.api";

export const fetchAlbum = async (market:string = 'IN',limit:number=20)=>{
    try {
        const response = await axiosInstance.get('/browse/new-releases',{
            params:{market,limit}
        })
        // console.log("---> ",response.data.albums.items);
        
        return response.data.albums.items;
    } catch (error) {
        // console.error("Failed to fetch Album",error);
        throw error
    }
}

