import { useState } from 'react';
import PackageFormItem from './PackageFormItem';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { addApiPackages } from '../../../apis/post';

function PackageFormWrapper({
  activeStep,
  handleBack,
  handleNext,
  categoryForm,
  setCategoryForm,
}) {
  const [packages, setPackages] = useState([{}]);
  const { postId } = categoryForm;
  const addPackages = () => {
    setPackages([...packages, {}]);
  };
  const handleClickNext = async () => {
    console.log(addPackages);
    console.log(packages);
    const res = await addApiPackages({ postId, packages });
    console.log(res);
    setCategoryForm((prev) => ({ ...prev, packages }));
  };

  return (
    <>
      {packages.map((item, index) => (
        <PackageFormItem
          isMultiplePkg={packages.length > 1}
          key={index}
          number={index + 1}
          setPackages={setPackages}
          idx={index}
        />
      ))}

      <Box>
        <Button
          sx={{ display: 'flex', mx: 'auto', fontSize: '1.125rem' }}
          onClick={addPackages}
          disabled={packages.length >= 3}
        >
          <AddCircleIcon sx={{ mr: '.5rem' }} />
          เพิ่มขั้นตอน
        </Button>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: `flex-end` }}>
        {activeStep !== 0 && (
          <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
            กลับ
          </Button>
        )}

        <Button
          variant="contained"
          onClick={handleClickNext}
          sx={{ mt: 3, ml: 1 }}
        >
          บันทึกและไปต่อ
        </Button>
      </Box>
    </>
  );
}

export default PackageFormWrapper;
