import { USERS } from "../../utils/constants";

const List = ({ list = USERS }) => {

  return (
    <>
      <h4>Lists with keys</h4>
      {list.map((item, _index) => <li key={item.id}>{item.name}</li>)}
    </>
  )
}
export default List;

// Here we are creating lists , each list is identified by key because react do reconcillation using diff algorithem, it needs unique identity to avoide unncessary re-renders, if i use index as unque key every render index will be created again which will cause again re-render to avoide we use unique keys