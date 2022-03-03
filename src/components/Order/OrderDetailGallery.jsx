import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const OrderDetailGallery = ({ imgArr }) => {
  const itemData = imgArr.map((item) => ({ img: item.url }));
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item, index) => (
        <SimpleReactLightbox>
          <SRLWrapper>
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                style={{ maxHeight: '450px', maxWidth: '450' }}
                loading="lazy"
              />
            </ImageListItem>
          </SRLWrapper>
        </SimpleReactLightbox>
      ))}
    </ImageList>
  );
};

export default OrderDetailGallery;
