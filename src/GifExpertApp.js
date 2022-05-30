import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  

    const [category, setCategories] = useState([`Samurai X`]);

    // const handleAdd = () => {

    //     // setCategorias(['Tom y Jerry', ...categorias]);
    //     setCategorias(cats => [...cats, 'Tom y Jerry']);

    // };

    return (
    <div>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr />

        <ol>
            {
                category.map(category => (
                    <GifGrid 
                    key={category}
                    category={category}
                    />
                ))
            }            
        </ol>
    </div>
  )
}
