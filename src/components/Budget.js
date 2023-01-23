import { useState } from 'react';

const Budget = () => {

    const [cost, setCost] = useState('');


    return (
        <div className='alert alert-secondary'>
            <span>Budget:<input
                        required='required'
                        type='number'
                        id='cost'
                        value={cost}
                        style={{ marginLeft: '.1rem' , size: 10}}
                        onChange={(event) => setCost(event.target.value)}
                        max= {20000}
                        min= {0}
                        step = {10}
                        >
                        </input> </span></div>
       
    );
};

export default Budget;