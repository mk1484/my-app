import {useState, useEffect} from "react"

const Alert = () => {
    const [num, setNum] = useState(0);

    useEffect(() => {
        // alert();
    }, [num]);

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

export default Alert;