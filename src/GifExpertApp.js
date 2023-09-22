import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['one puch']);

    // const handleAdd = () => {
    //     //setCategories([...categories,'HunterXhunter'])//
    //     setCategories(cats => [...categories, 'HunterXhunter'])
    // }
    //const categories = ['one puch', 'samurai x', 'dragon ball Z'];
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategories={ setCategories } />
            
         {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map(category =>  
                   
                    <GifGrid 
                    category={ category } 
                    key={ category }
                    />
                    )
                }
            </ol>
        </>
    )
}
