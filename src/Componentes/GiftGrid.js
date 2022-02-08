import React from 'react';
export const GifGrid = ({catergory})=>{

    const getGifs = async()=>{
        const url = 'https://api.giphy.com/v1/gifs/search?q=naruti&limit=10&api_key=hPiCkQ2nqU5Ni3J7UrFu9fjvM8tjWdmA'
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map( img =>{
            return{
                id: img.data,
                title: img.title,
                url: img.images?.dowsized_medium.url
            }
        })
        console.log(data);
    }
        getGifs();

        return(
            <div>
            <h3>ñ category </h3>
            </div>
        );
    
    
    }
  