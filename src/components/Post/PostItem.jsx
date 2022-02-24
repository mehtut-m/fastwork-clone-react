import { Link, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { Box } from '@mui/system';
import { Avatar } from '@mui/material';
import { formatThaiCurrency } from '../../services/currencyService';

function PostItem({ item }) {
  const packageArr = item.Packages.sort((a, b) => a.price - b.price);
  return (
    <Card
      sx={{
        maxWidth: 321,
        maxHeight: 360,
        minWidth: 242,
        '&:hover': {
          transform: 'translateY(-5px)',
          transition: 'all .2s ease-in-out',
        },
      }}
    >
      <Link to={`/post/${item.id}`}>
        <CardMedia
          sx={{ height: '187px' }}
          component="img"
          height="140"
          image={item.PostImages[0].url}
          alt="PostImage"
        />

        <CardContent sx={{ position: 'relative', pt: '1.5rem', pb: '.125rem' }}>
          <Avatar
            sx={{
              position: 'absolute',
              transform: 'translateY(50%)',
              top: '-50%',
            }}
            src={item.User.profileImage}
          />
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: 'start', fontSize: '1.125rem' }}
          >
            {item.name}
          </Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', padding: '0' }}>
            <StarIcon sx={{ color: '#FBBC05', fontSize: '1.25rem' }} />
            <Typography>4.86 (78)</Typography>
          </Box>

          <Box sx={{ p: '5px 4px', color: '#000', height: '50px' }}>
            <Typography sx={{}}>เริ่มต้น</Typography>
            <Typography sx={{}}>
              {formatThaiCurrency(packageArr[0].price)}
            </Typography>
          </Box>
        </CardActions>
      </Link>
    </Card>
  );
}

export default PostItem;
