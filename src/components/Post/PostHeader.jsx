import { ImageList, ImageListItem } from '@mui/material';
import { Box } from '@mui/system';
import SwipeableTextMobileStepper, { images } from '../ImagesList/Carousel';

function PostHeader({ images }) {
  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '2rem',
      }}
    >
      <SwipeableTextMobileStepper images={images} />
      <Box>
        <ImageList
          sx={{ width: '21.875rem', height: '26.5rem', cursor: 'pointer' }}
          variant="quilted"
          cols={4}
          rowHeight={200}
        >
          {images.map((item) => (
            <ImageListItem
              key={item.url}
              cols={item.cols || 4}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.url, 500, item.rows, item.cols)}
                style={{ objectFit: 'cover' }}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}

export default PostHeader;
