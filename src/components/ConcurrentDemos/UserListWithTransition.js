import { startTransition, useState } from "react";
import { USERS } from "../../utils/constants";
import InputBox from "../UI/InputBox";
import List from "../UI/List";


const UsersWithTransition = () => {
  const [users, setUsers] = useState(USERS);
  const [search, setSearch] = useState("");


  //  this is expensive operation
  const handleChangeFilter = (e) => {
    setSearch(e.target.value);
    // update ui slowely , this will not freeze input
    startTransition(() => {
      setUsers(() => USERS.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase())))
    });

  };


  return (<div>
    <h2>1.Search with start transition</h2>
    <InputBox label="Searc here" onChange={handleChangeFilter} value={search} />
    <List title="Users list" data={users} />
  </div>)

}

export default UsersWithTransition;