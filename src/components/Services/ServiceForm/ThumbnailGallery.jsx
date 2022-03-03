import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ThumbnailGallery = ({ imgArr }) => {
  const itemData = imgArr.map((item) => ({
    img: URL.createObjectURL(item),
  }));

  return (
    <ImageList
      sx={{
        mt: '1rem',
        width: 500,
        height: 450,
        borderRadius: '.5rem',
      }}
      cols={3}
      rowHeight={164}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          sx={{
            borderRadius: '.5rem',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            transition: 'transform .2s ease-out',
            '&:hover': {
              transform: 'translateY(-2px)',
            },
            my: '.5rem',
            mx: '.25rem',
          }}
        >
          <img
            src={`${item.img}`}
            srcSet={`${item.img}`}
            alt={item.title}
            style={{ objectFit: 'contain' }}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ThumbnailGallery;
