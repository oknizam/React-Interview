
const CustomTable = ({ columns, data }) => {

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          {columns.map(({ key, title }) => {
            return (
              <th key={key}>{title}</th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => <tr key={row.id}>
          {columns.map((col) => (
            <td key={col.key}>{row[col.key]}</td>
          ))}
        </tr>)}
      </tbody>
    </table>
  )
}

export default CustomTable;