const CommonComponent = () => {

  const handleClickParent = (e) => {
    e.stopPropagation();
    console.log("parent click")
  }

  const handleClickChild = (e) => {
    e.stopPropagation();
    console.log("child click")
  }
  return (
    <>
      <h4>Event Capturing and Event Buubling with stopPropogation</h4>
      <div aria-label="parent-click"
        onClick={handleClickParent}
      // onClickCapture={handleClickParent}
      >
        Click me Parent
        <div aria-label="child-click"
          onClick={handleClickChild}
        // onClickCapture={handleClickChild}
        >Click me child</div>
      </div>
    </>
  )
};

export default CommonComponent;

// here we have both Event Bubbling and Event Capturing , we can prevent this by having e.stopPropogation()

// Event Bubbling -> onClick  is like event triggred in child will causes child execute first then parent event to be get triggred


// Event Capturing -> onClickCapture is like event triggred in child will causes parent execute first then child event to be get triggred
