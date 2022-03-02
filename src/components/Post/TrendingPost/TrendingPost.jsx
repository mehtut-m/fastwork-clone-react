import { Box, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { getPostBySubCategories } from '../../../apis/post';
import React, { useEffect, useState } from 'react';
import PostItem from '../PostItem';

function TrendingPost({ categoryId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPostBySubCategories(categoryId)
      .then((res) => setPosts(res.data.post))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      {/* Header */}
      <Typography
        component="h3"
        sx={{ fontSize: '2rem', textAlign: 'start', my: '2rem' }}
      >
        ยอดนิยมในหมวด
        <Link to={`/sub-category/${categoryId}`}>
          <Typography
            component="span"
            sx={{
              color: 'primary.main',
              fontSize: 'inherit',
              ml: '.5rem',
              '&::before': {
                content: '""',
                width: '0px',
                height: '1px',
                background: 'black',
                transition: '300ms',
              },
              '&:hover::before': {
                width: '100%',
              },
            }}
          >
            {posts?.[0]?.SubCategory.name}
          </Typography>
        </Link>
      </Typography>

      <Box sx={{ display: 'flex', gap: '.5rem' }}>
        {posts.map((item) => (
          <PostItem item={item} key={item.id} />
        ))}
      </Box>
    </Container>
  );
}

export default TrendingPost;
