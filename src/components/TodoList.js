import useAPI from "../hooks/useAPI";
import { apiPaths } from "../utils/constants";
import Card from "./UI/Card";

const TodoList = () => {
  const { data, loader } = useAPI(apiPaths.todoAPI);
  return (
    <>
      <h3>Todo List with Custom Hook and grid template utils</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,200px)", gap: "10px" }}>

        {loader && <div>
          loading......
        </div>}
        {data?.map((item) => <Card key={item?.id} title={item.title} />)}
      </div>
    </>

  )

}

export default TodoList;