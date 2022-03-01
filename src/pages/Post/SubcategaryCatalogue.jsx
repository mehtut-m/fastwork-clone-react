import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostBySubCategories } from "../../apis/post";
import { getSubCategoryById } from "../../apis/category";
import Catalogue from "../../components/Post/Catalogue";
import NavOrderWrapper from "../../components/NavOrder/NavOrderWrapper";
import { Box } from "@mui/system";

function SubcategaryCatalogue() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState({});
  const temp = posts
    .concat(posts)
    .concat(posts)
    .concat(posts)
    .concat(posts)
    .concat(posts)
    .concat(posts)
    .concat(posts)
    .concat(posts)
    .concat(posts)
    .concat(posts)
    .concat(posts)
    .concat(posts)
    .concat(posts)
    .concat(posts)
    .concat(posts)
    .concat(posts)
    .concat(posts)
    .concat(posts)
    .concat(posts)
    .concat(posts)
    .concat(posts)
    .concat(posts)
    .concat(posts)
    .concat(posts)
    .concat(posts)
    .concat(posts)
    .concat(posts)
    .concat(posts)
    .concat(posts)
    .concat(posts)
    .concat(posts)
    .concat(posts)
    .concat(posts);

  useEffect(() => {
    getPostBySubCategories(id)
      .then((res) => setPosts(res.data.post))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getSubCategoryById(id)
      .then((res) => setCategoryInfo(res.data.subCategory))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <Box
        sx={{
          boxShadow: "0px 5px 4px 0px rgba(0,0,0,0.10)",
        }}
      >
        <NavOrderWrapper />
      </Box>
      <Catalogue posts={temp} categoryInfo={categoryInfo} />
    </>
  );
}

export default SubcategaryCatalogue;
