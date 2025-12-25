
const PageCenter = (props) => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontSize: "24px",
      fontWeight: "800",
      gap: 20,
      ...props.styles
    }}>
      {props.children}
    </div>
  )

}
export default PageCenter;