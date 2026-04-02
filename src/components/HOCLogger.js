export default function withLogger(WrapperComponent) {
  return function EnhancedComponent(props) {
    console.log("props", props);
    return (
      <WrapperComponent {...props} />
    )
  }
}