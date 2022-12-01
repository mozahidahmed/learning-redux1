import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from '../../../App';
import Card from './Card'

const Parent = () => {
   const {count} = useContext(COUNTER_CONTEXT);
    return (
        <div>
            <h5>Parent</h5>
            <h5>{count}</h5>

            <Card> </Card>
        </div>
    );
};

export default Parent;