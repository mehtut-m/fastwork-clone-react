import { Typography } from '@mui/material';

function PostBodyTopic({ post }) {
  return (
    <Typography // TODO: Topic
      component="h2"
      sx={{ fontSize: '2rem', textAlign: 'start', color: '#7900FF' }}
    >
      {post?.name}
    </Typography>
  );
}

export default PostBodyTopic;
