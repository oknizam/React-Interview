import UserListWithDifferedValue from "./UserListWithDifferedValue";
import UsersWithTransition from "./UserListWithTransition";
import UserListWithUseTransition from "./UserListWithUseTransition";

const ConcurrentUI = () => {
  return (
    <div style={{ padding: "20px 30px", display: "grid", gridTemplateColumns: "50% 50%", justifyContent: "center", alignItems: "center" }}>
      <UsersWithTransition />
      <UserListWithUseTransition />
      <UserListWithDifferedValue />
    </div>
  )
};

export default ConcurrentUI;