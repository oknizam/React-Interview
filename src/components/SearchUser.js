import { useMemo, useState } from "react"
import { USERS } from "../utils/constants";

const SearchUser = () => {

  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    return USERS.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
  }, [search])


  return (<>
    <input type="text" onChange={e => setSearch(e.target.value)} /> <br />
    <ul>
      {filteredUsers.map((user) => <li key={user.id}>{user.name}</li>)}
    </ul>
  </>)
}

export default SearchUser;