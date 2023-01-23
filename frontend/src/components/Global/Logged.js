import { SmileOutlined } from '@ant-design/icons';
import { userLog } from "../Global/UserLog.js";

export default function Logged() {
  return (
    <>
      <div className="account">
        <p>{userLog.username.toUpperCase()}</p>
        <SmileOutlined style={{ fontSize: '1.7em', color: '#b2fcfb' }} />
      </div>
    </>
  )
}
