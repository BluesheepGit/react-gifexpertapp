import React, {useState} from 'react';
import PropType from 'prop-types';

export const  AddCategory=({setCategprias})=> {

        const [inputValue,setInputValue] =  useState("");

        const handleInputChange=(e)=>{
            setInputValue(e.target.value);
        }

        const handleSubmit=(e)=>{
                e.preventDefault();

                if (inputValue.trim().length >2)
                {
                        setCategprias(categorias => [ inputValue,...categorias]);
                        setInputValue("");
                }
        }

        return(
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        )
}

export default AddCategory;

AddCategory.propTypes={
        setCategprias: PropType.func.isRequired
}
