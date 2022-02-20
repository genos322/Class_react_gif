import React, { useState } from 'react';
import { AddCategory } from './Componentes/AddCategory';
import { GifGrid } from './Componentes/GifGrid';

export const GiftSearchApp = ()=>{

     

        const [categories, setCategories] = useState(['One Piece ']);

        // const handleAdd = ()=>{                                 //Agregando elementos al array   
        //      setCategories([ 'Black clover', ...categories]);
        //     // setCategories( cats =>['DBSuper',...cats]);      //otro método
        // }
        return(
            <div>
                <h2>GiftSe</h2>
                
               <AddCategory setCategories={setCategories}></AddCategory>
               <hr/>
                <ol>
                    {
                        categories.map((category)=>(
                            <GifGrid
                                key = {category}
                                category = {category}
                            />
                             ))
                    }
                </ol>
                <GifGrid> </GifGrid>
            </div>
        );

};
