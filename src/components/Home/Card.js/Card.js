import React, { useState } from 'react';

const Card = () => {
    const [count,setCount]=useState(0)



    return (
        <div>
     
            <div class="container card-style text-center " >
                <div class="card-body">
                <h5 class="card-title">{count}</h5>
               <div className="mt-4">
               
                <button type="button" onClick={()=>setCount(count-1)} class="btn btn-primary mx-2">Decrement</button>
                
                <button type="button" onClick={()=>setCount(count+1)} class="btn btn-primary mx-2">Increment</button>
               </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Card;