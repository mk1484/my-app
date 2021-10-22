import { useContext } from "react";
import { Card } from "./Card";
import { AdminFlagContext } from "./providers/AdminFlagProvider";

export const EditName = () => {
    const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);
    const onClickSwitch = () => setIsAdmin(!isAdmin);

    return (
        <div>
          {/* {条件 ? 条件がtrueの時の処理:条件がfalseの時の処理 }   */}
          {isAdmin ? <span>管理者</span> : <span>管理者以外</span>}
          <button onClick={onClickSwitch}>切り替え</button>
          <Card isAdmin={isAdmin} />
        </div>
    )
};

export default EditName;