import {create} from "zustand";
import { Artist } from "../utils/Types";

interface ArtistStore{
    artists: Artist[];
    moreArtist: Artist[];
    setArtist : (artists : Artist[])=> void;
    clearArtist: ()=> void;
    setQueryArtist: (artists : Artist[])=> void;
}
export const usePopularArtist = create<ArtistStore>((set)=>({
    artists:[],
    moreArtist:[],
    setArtist: (artists)=>{
        set({artists})
    },
    clearArtist: ()=>{
        set({artists : []});
    },
    setQueryArtist:(artists)=> (set({moreArtist:artists})),
}));