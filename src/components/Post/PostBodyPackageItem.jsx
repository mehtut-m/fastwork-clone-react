import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function PostBodyPackageItem({ packageItem, handleClose, handleOpen, index }) {
  const { id, name, duration, description } = packageItem;
  return (
    <Box
      component="div"
      sx={{
        border: '1px solid #000',
        borderRadius: '5px',
        marginTop: '1.125rem',
      }}
    >
      <Typography // TODO: Name Package 1
        component="p"
        sx={{
          fontSize: '1.125rem',
          fontWeight: 'bold',
          textAlign: 'start',
          marginLeft: '1rem',
          marginTop: '1rem',
        }}
      >
        {name}
      </Typography>
      <Box component="div" sx={{ display: 'flex', gap: '0.5rem' }}>
        <CalendarTodayIcon // TODO: Calender
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            marginLeft: '1rem',
            color: 'gray',
          }}
        />
        <Typography component="p" sx={{ color: 'gray' }}>
          ระยะเวลาในการทำงาน {duration} วัน
        </Typography>
      </Box>

      <Typography // TODO: Package content
        component="p"
        sx={{
          fontSize: '1.125rem',
          textAlign: 'start',
          margin: '1rem',
        }}
      >
        {name} : {description}
      </Typography>
      <Typography component="hr" sx={{ margin: '1rem' }}></Typography>

      <Box // TODO: Footer
        component="div"
        sx={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
          marginTop: '1rem',
          marginBottom: '1rem',
        }}
      >
        <Button // TODO: Button for click
          sx={{
            marginRight: '1rem',
            background: '#7900FF',
            color: '#fff',
            ':hover': { background: '#7900FF', color: '#fff' },
          }}
          onClick={() => handleOpen(index)}
        >
          สนใจจ้าง
        </Button>
      </Box>
    </Box>
  );
}

export default PostBodyPackageItem;
