import { Box } from '@mui/material';
import PostBodyTopic from '../Post/PostBodyTopic';
import PostBodyContent from './PostBodyContent';
import PostBodyFreelance from './PostBodyFreelance';
import PostBodyPackage from './PostBodyPackage';
import PostBodyReview from './PostBodyReview';
import PostBodyStepOfWork from './PostBodyStepOfWork';
import PostPackage from './PostPackage';

function PostBody({ post, handleOpen, handleClose }) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '1.5rem',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ maxWidth: '700px' }}>
        <PostBodyTopic post={post} />
        <PostBodyContent post={post} />
        <PostBodyStepOfWork post={post} />
        <PostBodyPackage
          post={post}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
        <PostBodyFreelance post={post} />
        <PostBodyReview post={post} />
      </Box>

      <PostPackage post={post} />
    </Box>
  );
}

export default PostBody;
