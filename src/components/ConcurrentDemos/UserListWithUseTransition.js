import { useTransition, useState } from "react";
import { USERS } from "../../utils/constants";
import InputBox from "../UI/InputBox";
import List from "../UI/List";


const UserListWithUseTransition = () => {
  const [users, setUsers] = useState(USERS);
  const [search, setSearch] = useState("");
  const [isPending, startTransition] = useTransition(); // this gives loading state


  //  this is expensive operation 
  const handleChangeFilter = (e) => {
    setSearch(e.target.value);
    // update ui slowely , this will not lagy input

    startTransition(() => {
      setTimeout(() => {
        setUsers(() => USERS.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase())));
      }, 2000);
    });

  };


  return (<>
    <h2>Search with useTransition</h2>
    {isPending && <div>Filtering data....</div>}
    <InputBox label="Searc here" onChange={handleChangeFilter} value={search} />
    <List title="Users list" data={users} />
  </>)

}

export default UserListWithUseTransition;