import React, { useState } from 'react';

const Child = ({count,setCount}) => {
   



    return (
        <div>
     
            <div class="container Child-style text-center " >
                <div class="Child-body">
                    <h5>Child</h5>
                <h5 class="Child-title">{count}</h5>
               <div className="mt-4">
               
                <button type="button" onClick={()=>setCount(count-1)} class="btn btn-primary mx-2">Decrement</button>
                
                <button type="button" onClick={()=>setCount(count+1)} class="btn btn-primary mx-2">Increment</button>
               </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Child;