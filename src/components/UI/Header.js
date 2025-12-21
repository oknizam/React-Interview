const Header = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Header;

// <> </> Called fragments used to group multiple dom elements / components because every react components need parent element, if we use any DOM element layout will change, because each element have thier own propties