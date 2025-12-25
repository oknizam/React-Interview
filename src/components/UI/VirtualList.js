import { List } from "react-window";

const VirtualList = ({ data = [] }) => {

  return (
    <div style={{ height: 100 }}>
      <List
        rowHeight={25}
        rowComponent={RowComponent}
        rowCount={data?.length}
        rowProps={{ data }}
      />
    </div>
  )

}

export default VirtualList;

const RowComponent = ({ index, data }) => {
  return (
    <div>{data[index]?.name}</div>
  )
}
