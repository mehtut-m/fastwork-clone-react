import { useParams, Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { getPostById } from '../../apis/post';
import CheckoutModal from '../Checkout/CheckoutModal';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { CheckoutContext } from '../../contexts/CheckoutContext';
import PostBody from './PostBody';
import PostHeader from './PostHeader';
import { Breadcrumbs, Container, Typography } from '@mui/material';

function Post() {
  const { id } = useParams();
  const { selectPackage } = useContext(CheckoutContext);
  const [post, setPost] = useState({});
  const [selectedPackageIdx, setSelectedPackageIdx] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (idx) => {
    setSelectedPackageIdx(idx);
    selectPackage(post?.Packages?.[idx].id, post);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getPostById(id).then((res) => setPost(res.data.post));
  }, [id]);

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" to="/category/id">
      ประเภทงานทั้งหมด
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      to={`/subcategory/${post?.subCategoryId}`}
    >
      {post?.SubCategory?.Category?.name}
    </Link>,
    <Link underline="hover" key="3" color="inherit" to="/">
      {post?.SubCategory?.name}
    </Link>,
  ];

  return (
    <>
      <Container sx={{ maxWidth: '66.5rem' }}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          sx={{ color: 'primary.main' }}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <PostHeader images={post?.PostImages || []} />
        <PostBody
          post={post}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
        <CheckoutModal
          open={open}
          handleClose={handleClose}
          selectedPackageIdx={selectedPackageIdx}
          post={post}
        />
      </Container>
    </>
  );
}

export default Post;
