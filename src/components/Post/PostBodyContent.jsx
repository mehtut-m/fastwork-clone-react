import { Typography } from '@mui/material';

function PostBodyContent({ post }) {
  return (
    <Typography // TODO: Content
      component="p"
      sx={{
        fontSize: '1.125rem',
        textAlign: 'start',
        marginTop: '1.125rem',
      }}
    >
      {post?.description}
    </Typography>
  );
}

export default PostBodyContent;
