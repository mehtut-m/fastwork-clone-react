import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import PostItem from './PostItem';

function PostWrapper() {
  return (
    <Container component="main" maxWidth="unset">
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 12, sm: 12, md: 12 }}
      >
        {Array.from(Array(12)).map((_, index) => (
          <Grid item xs={4} sm={4} md={4} key={index}>
            <PostItem>xs=2</PostItem>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PostWrapper;
