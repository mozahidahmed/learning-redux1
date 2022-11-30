import React, { useState } from 'react';
import Card from './Card'

const Parent = () => {
    const [count,setCount]=useState(0)
    return (
        <div>
            <h5>{count}</h5>

            <Card count={count} setCount={setCount}> </Card>
        </div>
    );
};

export default Parent;