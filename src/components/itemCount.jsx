
import React, { useState } from 'react'

function ItemCount (props){
    const [count, setCount]= useState(props.initial);
    
    function handleAdd(){
        if(count < props.stock){
          setCount(count +1) ; 
        }
        
    }

    function handleSubstract(){
        if(count> props.initial){
           setCount(count -1) 
        }   
    }
    function handleOnAdd(){
        if (props.stock> 0 && count<= props.stock){
            props.onAdd(count)
        }
    }
    return (
        <div>
            <h2>Tus compras</h2>
            <div>
                <button onClick={handleSubstract}> - </button>
                <span> {count} </span>
                <button onClick={handleAdd}> + </button>
            </div>
            <div>
                <button onClick={handleOnAdd}>Comprar</button>
            </div>
        </div>
    )
}

export default ItemCount