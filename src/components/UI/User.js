
import PropTypes from "prop-types";

const User = ({ name, age }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div>
        Name : {name}
      </div>
      <div>
        Age : {age}
      </div>
    </div>
  )
}

User.prototype = {
  name: PropTypes.string,
  age: PropTypes.number
}

export default User;

//  mainely we don't require proptypes if we are using typescript