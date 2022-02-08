import React, { useState } from 'react';
import { AddCategory } from './Componentes/AddCategory';
import { GifGrid } from './Componentes/GiftGrid';

export const GiftSearchApp = ()=>{

     

        const [categories, setCategories] = useState(['One Piece', 'kimetsu', 'Shingeki ']);

        const handleAdd = ()=>{                                 //Agregando elementos al array   
             setCategories([ 'Black clover', ...categories]);
            // setCategories( cats =>['DBSuper',...cats]);      //otro método
        }
        return(
            <div>
                <h2>GiftSe</h2>
                <hr/>
               <AddCategory setCategories={setCategories}></AddCategory>
                <ol>
                    {
                        categories.map((category)=>{
                            return <li key={category}>{category}</li>
                        })
                    }
                </ol>
                <GifGrid> </GifGrid>
            </div>
        );

};
