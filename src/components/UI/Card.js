const Card = ({ title, desc = "This is a simple card description." }) => {
  return (
    <div class="card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

export default Card;