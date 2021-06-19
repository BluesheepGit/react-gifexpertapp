import React, {useState} from 'react';
import AddCategory from "./components/AddCategory";
import {GiftGrid} from "./components/GiftGrid";

const GiftExpertApp=()=> {

    const [categorias,setCategprias] = useState(['Pokemon']);

    /*
    const handleadd=()=>{
       // setCategprias([...categorias,'HunterXhunter']);
        setCategprias(categ=>[...categ,'HunterXHunter'])
    }
    */

        return (
                <>
                    <h2>Gift Expert</h2>
                    <AddCategory setCategprias={setCategprias}/>
                    <hr/>


                    <ol>
                        {
                            categorias.map(categoria=>{
                                return <GiftGrid
                                    key={categoria}
                                    category={categoria}
                                />
                            })
                        }
                    </ol>

                </>
        )
}

export default GiftExpertApp;