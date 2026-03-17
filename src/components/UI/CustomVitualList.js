const { useState } = require("react")

const CustomVirtualList = ({ items = [], itemHeight = 40, height = 400 }) => {

  const [scrollTop, setScrollTop] = useState(0);

  const totalHeight = items.length * itemHeight;

  const startIndex = Math.floor(scrollTop / itemHeight);
  const visibalCount = Math.ceil(height / itemHeight);

  const visibalItems = items.slice(startIndex, startIndex + visibalCount + 1);


  const offsetY = startIndex * itemHeight; //how much to shift item downwords


  const handleScroll = (e) => {
    setScrollTop(e.target.scrollTop)
  }

  console.log("totalHeight", totalHeight, "startIndex", startIndex, "visibalCount", visibalCount, 'visibalItems', visibalItems, "offsetY", offsetY)
  return (
    <div style={{ height, overflowY: "auto", border: "1px solid gray" }} onScroll={handleScroll}>
      <div style={{ height: totalHeight, position: "relative" }}>
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {visibalItems.map((item) => (
            <div
              key={item.id}
              style={{
                height: itemHeight,
                borderBottom: "1px solid #eee",
                display: "flex",
                alignItems: "center",
                paddingLeft: "10px",
              }}
            >
              {item?.name}
            </div>
          ))}
        </div>
      </div>

    </div>
  )

}

export default CustomVirtualList;