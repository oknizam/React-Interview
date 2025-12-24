import { useEffect, useMemo, useState } from "react"
import useDebounce from "../hooks/useDebounce";
import { apiPaths } from "../utils/constants";
import InputBox from "./UI/InputBox";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    (async () => {
      try {
        let response = await fetch(apiPaths.usersAPI);
        response = await response.json();
        if (response) {
          setUsers(response)
        }
      }
      catch (err) {
        console.error("user api call error", err)
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

  const searchedValue = useDebounce(searchText, 1000);

  const filteredUsers = useMemo(() => {
    const search = searchedValue?.toLowerCase();
    return users.filter(({ name, email, company, country }) => name?.toLowerCase().includes(search) || email?.toLowerCase().includes(search) ||
      company?.toLowerCase().includes(search) || country?.toLowerCase().includes(search))
  }, [users, searchedValue]);


  const debounceFunc = (callback, delay = 300) => {
    let timeout = null;
    return function (...args) {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        callback(...args)
      }, delay)

    }
  }

  const debounceSearch = useMemo(() => debounceFunc((search) => {
    console.log("api call for debounce without custom hook", search)
  }, 1000), [])

  useEffect(() => {
    if (searchText) {
      debounceSearch(searchText);
    }
  }, [searchText, debounceSearch])



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