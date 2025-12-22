import { useEffect, useMemo, useState } from "react"
import InputBox from "./InputBox";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    (async () => {
      let response = await fetch('https://json-placeholder.mock.beeceptor.com/users');
      response = await response.json();
      if (response) {
        setUsers(response)
      }
    })(); // immedietely invoked function

    let timeout = setTimeout(() => {
      console.log("setTimeout triggred")
    }, 1000);

    return () => {
      clearTimeout(timeout);
    }
    // clear timeoout //cleanup

  }, []);

  const filteredUsers = useMemo(() => {
    const search = searchText?.toLowerCase();
    return users.filter(({ name, email, company, country }) => name?.toLowerCase().includes(search) || email?.toLowerCase().includes(search) ||
      company?.toLowerCase().includes(search) || country?.toLowerCase().includes(search))
  }, [users, searchText])


  return (
    <>
      <h3>User table</h3>
      <InputBox label="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      <br />
      <table>
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Email
            </th>
            <th>
              Company
            </th>
            <th>
              country
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers?.map((user, _index) => <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.company}</td>
            <td>{user.country}</td>
          </tr>)}
        </tbody>
      </table>
    </>
  )

}

export default Users;

//  useeffect with simple api call (side effects)