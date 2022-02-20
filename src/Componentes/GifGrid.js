import React from 'react';
import {useFetchGifs} from '../hooks/useFetchGifs';
//import { getGifs } from '../Helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category})=>{

    // const [images, setImages] = useState([]);
    const {data: images , loading} =useFetchGifs(category);

    // useEffect( ()=>{
    //     getGifs(category)
    //     .then(setImages);
    // }, [category] );
    
 
        return(
            <>
            <h3>{ category }</h3>
            {loading && <p>loading...</p>}
            <div className='cardGrid'>
                {
                    
                    images.map((img)=>(
                        <GifGridItem 
                        key = {img.id}
                        {...img}        //  img = {img}
                         />
                    ))
                }
         
            </div>
            </>
        )
    
    
    }
  