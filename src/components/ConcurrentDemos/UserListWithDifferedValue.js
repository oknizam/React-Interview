import { useDeferredValue, useState } from "react";
import { USERS } from "../../utils/constants";
import InputBox from "../UI/InputBox";
import List from "../UI/List";


const UserListWithDifferedValue = () => {
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search); // update it later

  const filterdUsers = USERS.filter((item) => item.name.toLowerCase().includes(deferredSearch.toLocaleLowerCase()))

  return (<>
    <h2>Search with useDeferredValue</h2>
    <InputBox label="Searc here" onChange={(e) => setSearch(e.target.value)} value={search} />
    <List title="Users list" data={filterdUsers} />
  </>)

}

export default UserListWithDifferedValue;