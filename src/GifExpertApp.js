import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory'
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {
    
    
    const [categories, setCategories] = useState(['Hola']);

   
    return (
        <div>
            <h2 className="text-center">Gif</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            
            
            <ol>
                {
                    categories.map( category => ( 
                        <GifGrid 
                            key ={ category }
                            category={ category } />
                    
                    ))
                }
            </ol>
        </div>
    )
}