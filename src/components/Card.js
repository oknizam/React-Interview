import PropTypes from "prop-types";

export default function Card({ name, city }) {
  console.log("name", typeof name)
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "5px" }}>
      <span>Name: {name}</span>
      <span>City: {city}</span>
    </div>
  )

}

Card.prototype = {
  name: PropTypes.string,
  city: PropTypes.string,
}