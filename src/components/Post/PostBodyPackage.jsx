import { Typography } from '@mui/material';
import PostBodyPackageList from './PostBodyPackageList';

function PostBodyPackage({ post, handleOpen, handleClose }) {
  return (
    <>
      <Typography // TODO: Package List
        component="h2"
        sx={{
          color: '#7900FF',
          fontSize: '2rem',
          marginTop: '1.125rem',
          textAlign: 'start',
        }}
      >
        แพ็กเกจ
      </Typography>
      <PostBodyPackageList
        post={post}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </>
  );
}

export default PostBodyPackage;
