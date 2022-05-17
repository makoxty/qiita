import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

interface ResponseData {
  posts: ApiResponseData[];
}
interface ApiResponseData {
  id: number;
  name: string;
  color: string;
  age: number;
}
const Crud = () => {
  const [posts, setPosts] = useState<ResponseData | []>([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/hedgehogs/")
      .then((response) => {
        if (response.data) {
          setPosts(response.data);
        } else {
          console.log("responmseデータがありません");
        }
      })
      .catch(() => {
        console.log("通信に失敗しました");
      });
  }, []);

  return (
    <>
      <p>responseデータ</p>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.name}</p>
          <p>{post.age}</p>
        </div>
      ))}
    </>
  );
};

export default Crud;
