import React from 'react';
const Condtionrender = ()=> {
    const array1 = ['Apple','Mango','Orange','Grapes'];
    return(
        <div>
            {array1 && array1.length>0 && (
                <div>
                    <h2>Fruits List</h2>{array1.map((fruit)=>(<h3>{fruit}</h3>))}
                </div>
                )
            }
         </div>
    )
}

export default Condtionrender;