import React, {useState} from 'react'

export default function Hookbasic() {
    const [like,setLike] = useState(0);
    return (
        <div>
            <button onClick={() => setLike(like+1)}>Like {like}</button>
        </div>
    )
}

