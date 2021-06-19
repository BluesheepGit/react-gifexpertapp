import React from 'react';
import {GifGridItems} from "./GifGridItem";
import {useFetchGifs} from "../hooks/useFetchGifs";

export const GiftGrid=({category})=> {

    const {data:images,loading} =useFetchGifs(category);

    return(
        <>
            <h3 className="animate__animated animate__fadeInDown">{category}</h3>
            {loading && <p className="animate__animated animate__pulse">Cargando...</p> }
            <div className="cardGrid">
                {
                    //images.map(({id,title})=>(    <li key={id}>{title}</li>))
                    images.map(img=>(
                        <GifGridItems
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}

