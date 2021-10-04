import React, {useState} from "react"

const CountupBtn = () => {
    const [num, setNum] = useState(0);

    const onClickButtton = () => {
        setNum(num + 1);
    }

    return (
        <div>
            <button onClick={onClickButtton}>カウントアップ</button>
           <p>{num}</p>
        </div>
    )
}

export default CountupBtn;