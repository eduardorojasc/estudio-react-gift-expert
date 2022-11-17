import { useState,useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages]=useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //console.log({images, isLoading });
    const getImages = async()=>{
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
    
    useEffect(
        ()=>{
            getImages();
        },
        []
    )

    return {
        //images:images,
        images,
        //isLoading:isLoading
        isLoading
    }
}

// const [images, setImages]=useState([]);

    // const getImages = async()=>{
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }
    
    // useEffect(
    //     ()=>{
    //         getImages();
    //     },
    //     []
    // )