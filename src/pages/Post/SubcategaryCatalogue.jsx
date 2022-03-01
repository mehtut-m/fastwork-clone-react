import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostBySubCategories } from '../../apis/post';
import { getSubCategoryById } from '../../apis/category';
import Catalogue from '../../components/Post/Catalogue';

function SubcategaryCatalogue() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState({});

  useEffect(() => {
    getPostBySubCategories(id)
      .then((res) => {
        setPosts(res.data.post);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getSubCategoryById(id)
      .then((res) => {
        setCategoryInfo(res.data.subCategory);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Catalogue posts={posts} categoryInfo={categoryInfo} setPosts={setPosts} />
  );
}

export default SubcategaryCatalogue;
