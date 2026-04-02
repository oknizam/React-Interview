import React, { useEffect, useRef, useState } from "react";

function InfiniteScroll() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);

  // Fetch data
  const fetchData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
    );
    const data = await res.json();
    setItems(prev => [...prev, ...data]);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPage(prev => prev + 1);
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {items.map(item => (
        <div key={item.id} style={{ padding: "10px", border: "1px solid #ccc" }}>
          {item.title}
        </div>
      ))}

      {/* Loader */}
      <div ref={loaderRef} style={{ height: "50px", textAlign: "center" }}>
        Loading...
      </div>
    </div>
  );
}

export default InfiniteScroll;