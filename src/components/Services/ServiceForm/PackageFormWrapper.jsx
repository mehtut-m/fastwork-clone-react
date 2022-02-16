import { useState } from 'react';
import PackageFormItem from './PackageFormItem';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';

function PackageFormWrapper() {
  const [packages, setPackages] = useState(['']);
  const addPackages = () => {
    setPackages([...packages, '']);
  };
  console.log(packages.length);
  return (
    <>
      {packages.map((item, index) => (
        <PackageFormItem
          isMultiplePkg={packages.length > 1}
          key={index}
          number={index + 1}
        />
      ))}

      <Button
        sx={{ display: 'flex', mx: 'auto', fontSize: '1.125rem' }}
        onClick={addPackages}
        disabled={packages.length >= 3}
      >
        <AddCircleIcon sx={{ mr: '.5rem' }} />
        เพิ่มขั้นตอน
      </Button>
    </>
  );
}

export default PackageFormWrapper;
