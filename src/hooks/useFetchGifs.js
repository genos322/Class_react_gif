import { useEffect, useState } from "react";
import { getGifs } from "../Helpers/getGifs";

export const useFetchGifs =(category)=>{
    //snipet us y tab
    const [state, setState]= useState({
        data:[],
        loading: true
    });

    useEffect(()=>{
        getGifs(category)
            .then(imgs =>{
                setState({
                    data: imgs,
                    loading: false
            
              })
    });
    },[category]);
    return state;
}