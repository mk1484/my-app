import React, {useState} from "react"

const Btn = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>ボタン</button>
            <div>{console.log(toggle)}</div>
        </div>
    )
}

export default Btn;