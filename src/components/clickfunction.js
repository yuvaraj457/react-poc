import React from 'react';

const Clickfunction = ()=> {
    let clickhandle = ()=> {
        console.log('Clicked by function method.');
    }
    return (
        <div>
            <button onClick={clickhandle}>Click Me</button>
        </div>
    )
}

export default Clickfunction;