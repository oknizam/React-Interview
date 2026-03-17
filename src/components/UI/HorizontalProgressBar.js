
const ProgressBar = ({ width, background }) => {

  return (
    <div style={{ height: 20, background: "#ddd", borderRadius: 10 }}>
      <div style={{ height: "100%", width, background, borderRadius: 10 }} />
    </div>
  )
};

export default ProgressBar;

