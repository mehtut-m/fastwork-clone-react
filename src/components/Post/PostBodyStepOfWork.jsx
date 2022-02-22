import { Box, Button, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

function PostBodyStepOfWork({ post }) {
  const [showAll, setShowAll] = useState(false);
  const [stepArr, setStepArr] = useState(post?.instruction || []);

  useEffect(() => {
    setStepArr(post.instruction);
  }, [post]);

  const steps = stepArr && !showAll ? stepArr.slice(0, 2) : stepArr;

  return (
    <Box>
      <Typography // TODO: Step of work
        component="p"
        color="primary.main"
        sx={{
          fontSize: '1.125rem',
          textAlign: 'start',
          marginTop: '1.125rem',
          fontWeight: 'bold',
        }}
      >
        ขั้นตอนการทำงาน
      </Typography>
      <Typography // TODO: Step Content
        component="p"
        sx={{
          fontSize: '1.125rem',
          textAlign: 'start',
          marginTop: '1.125rem',
        }}
      >
        สำหรับ {post?.name}
      </Typography>

      {stepArr &&
        steps.map((step, index) => (
          <Typography // TODO: Steps
            key={index}
            component="p"
            sx={{
              fontSize: '1.125rem',
              textAlign: 'start',
            }}
          >
            {index + 1}. {step}
          </Typography>
        ))}

      <Button // TODO: button see more
        sx={{
          fontSize: '1.125rem',
          fontWeight: 'bold',
          display: 'flex',
          justifyContent: 'flex-start',
          padding: '0',
        }}
        onClick={() => setShowAll((prev) => !prev)}
      >
        แสดงทั้งหมด
        {/* แสดงน้อยลง */}
      </Button>
    </Box>
  );
}

export default PostBodyStepOfWork;
