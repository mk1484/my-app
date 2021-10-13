import React, { useState, memo, useCallback } from "react";
import { Child1 } from "./Child1";
import { Child4 } from "./Child4";

export const CountupBtn = memo (() => {
    console.log("CountupBtnレンダリング");

    const [num, setNum] = useState(0);

    const onClickButtton = () => {
        setNum(num + 1);
    }

    const onClickReset = useCallback(() => {
        setNum(0);
    }, []);

    return (
        <div>
            <button onClick={onClickButtton}>カウントアップ</button>
           <p>{num}</p>
           <Child1 onClickReset={onClickReset} />
           <Child4 />
        </div>
    )
});

export default CountupBtn;