import { useState } from "react";
import useThrottle from "../hooks/useThrottle";
import { apiPaths } from "../utils/constants";
import Button from "./UI/Button";
import Card from "./UI/Card";

const LoadPosts = () => {
  const [posts, setPosts] = useState([]);

  const handleLoadPost = async () => {
    try {
      let response = await fetch(apiPaths.postsAPI);
      response = await response.json();
      if (response) {
        setPosts(response);
      }

    }
    catch (err) {
      console.log("error in loading posts api", err)
    }
  }

  const handleWithThrottle = useThrottle(handleLoadPost, 5000)


  return (
    <>
      <h3>Throttling component</h3>
      <Button buttonLabel="Click Here To Load" onClick={handleWithThrottle} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,200px)", gap: "10px" }}>
        {posts?.map((item) => <Card key={item?.id} title={item?.title} desc={item?.body} />)}
      </div>
    </>
  )

}

export default LoadPosts;