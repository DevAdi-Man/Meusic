import { axiosInstance } from "./user.api";

export const fetchBrowseCategories = async (limit=50)=>{
    try {
        const response = await axiosInstance.get('/browse/categories',{
            params:{
                limit,
                locale:"en_IN"
            }
        });
        console.log("categories data --> ",response.data.categories.items);
        
        return response.data.categories.items;
    } catch (error) {
        throw error;
    }
}