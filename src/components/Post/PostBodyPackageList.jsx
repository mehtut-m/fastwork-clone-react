import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import PostBodyPackageItem from './PostBodyPackageItem';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function PostBodyPackageList({ post, handleClose, handleOpen }) {
  const packages = post.Packages;

  return (
    <Box>
      {packages &&
        packages.map((item, index) => (
          <PostBodyPackageItem
            index={index}
            packageItem={item}
            handleClose={handleClose}
            handleOpen={handleOpen}
          />
        ))}
    </Box>
  );
}

export default PostBodyPackageList;
