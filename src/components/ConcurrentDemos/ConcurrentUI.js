import UserListWithDifferedValue from "./UserListWithDifferedValue";
import UsersWithTransition from "./UserListWithTransition";
import UserListWithUseTransition from "./UserListWithUseTransition";

const ConcurrentUI = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <UsersWithTransition />
      <UserListWithUseTransition />
      <UserListWithDifferedValue />
    </div>
  )
};

export default ConcurrentUI;