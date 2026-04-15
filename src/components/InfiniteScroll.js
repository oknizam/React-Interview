import { useCallback, useEffect, useRef, useState } from "react";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const ref = useRef(null);
  const limit = 20;

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      let offset = (page - 1) * limit;
      let res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_start=${offset}&_limit=${limit}`
      );
      res = await res.json();
      setData((prev) => [...res, ...prev]);
      if (res?.length < limit) {
        setHasMore(false);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [page])

  useEffect(() => {
    fetchData();
  }, [page, fetchData]);

  const lastEleRef = useCallback((node) => {
    if (loading || !hasMore) return;

    if (ref.current) ref.current.disconnect();

    ref.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    });
    if (node) ref.current.observe(node);
  }, [loading, hasMore]);

  return (
    <>
      {data.map((item, index) => {
        if (index === data.length - 1) {
          return (
            <div ref={lastEleRef} key={item.id}>
              {item.title}
            </div>
          );
        } else {
          return <div key={item.id}>{item.title}</div>;
        }
      })}
      {loading && <div>loading...</div>}
      {!hasMore && <div>No more data !</div>}
    </>
  );
};
export default InfiniteScroll;
