import { Box, Button, selectClasses, Typography } from '@mui/material';
import { formatThaiCurrency } from '../../services/currencyService';
import { useState } from 'react';
import Radio from '@mui/material/Radio';

function PostPackage({ post }) {
  const [packageSelect, setPackageSelect] = useState(0);
  const packages = post?.Packages;

  return (
    <Box
      component="section"
      sx={{
        borderRadius: '5px',
        width: '33%',
        maxWidth: '351px',
        border: '1px solid gray',
        height: '100%',
        position: 'sticky',
        top: '8.5rem',
      }}
    >
      <Box
        component="div"
        sx={{
          display: 'flex',
          width: '100%',
        }}
      >
        {packages &&
          packages.length > 1 &&
          packages.map((pkg, index) => (
            <Button
              key={pkg.id}
              variant="contained" // ! change when click other button
              sx={{ height: '4.8rem', borderRadius: 0, width: '100%' }}
              onClick={() => {
                setPackageSelect(index);
              }}
            >
              {formatThaiCurrency(pkg.price)}
            </Button>
          ))}
      </Box>

      {/*  */}
      <Box
        sx={{
          mx: '1.375rem',
          my: '1.125rem',
        }}
      >
        <Typography // TODO: Topic name package
          component="p"
          sx={{
            fontSize: '1rem',
            textAlign: 'start',
            color: '#7900FF',
          }}
        >
          แพ็กเกจ : {packages && packages[packageSelect].name}
        </Typography>
        <Typography // TODO: Content
          sx={{
            fontSize: '1rem',
            mt: '.75rem',
            textAlign: 'start',
          }}
        >
          {packages && packages[packageSelect].description}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '0.8rem',
            marginBottom: '1.375rem',
          }}
        >
          <Typography sx={{ marginLeft: '1.375rem', fontWeight: 'bold' }}>
            ระยะเวลาในการทำงาน
          </Typography>
          <Typography
            sx={{
              marginRight: '1.375rem',
              fontWeight: 'bold',
              color: '#7900FF',
            }}
          >
            {packages && packages[packageSelect].duration} วัน
          </Typography>
        </Box>
      </Box>
      <Typography component="hr" sx={{ margin: '1rem' }}></Typography>
      <Button // TODO: button
        sx={{
          background: '#7900FF',
          color: '#fff',
          width: '13.125rem',
          height: '2.75rem',
          marginBottom: '1.375rem',
          ':hover': { background: '#7900FF', color: '#fff' },
        }}
      >
        สนใจจ้าง
      </Button>
    </Box>
  );
}

export default PostPackage;
