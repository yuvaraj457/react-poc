import React from 'react';
function Listandmap(){
    const array1 = ['Yuvaraj', '04-05-1999','LAMP'];
    let details  = array1.map((detail,index)=><h3 key={index}>{detail}</h3>);
    return(
        <div>
            <h2>Employee Detail</h2>
            {details}
        </div>
    )
}
export default Listandmap;