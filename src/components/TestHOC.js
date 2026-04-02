import withLogger from "./HOCLogger"

function Test(props) {
  return (<>
    <h4>export with hoc</h4>

  </>)
}

const TestHOC = withLogger(Test);

export default TestHOC;