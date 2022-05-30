import { useEffect, useState } from "react";
import { getGrid } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
 
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        
        getGrid(category).then(imgs => {

        
            console.log(imgs);
            setState({
                data: imgs,
                loading: false
            });
        
            
        });


    }, [category]);

    return state;

}
