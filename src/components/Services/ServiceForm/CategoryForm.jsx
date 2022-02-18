import { useEffect, useState } from 'react';
import { getAllCategories } from '../../../apis/category';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';
import { createPostCategory } from '../../../apis/post';

function CategoryForm({
  activeStep,
  handleBack,
  handleNext,
  categoryForm,
  setCategoryForm,
}) {
  const [selectedSubCat, setSelectedSubCat] = useState(null);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    getAllCategories()
      .then((res) => setCategories(res.data.categories))
      .catch((err) => console.log(err));
  }, []);

  const handleClickNext = async () => {
    const res = await createPostCategory(selectedSubCat);
    setCategoryForm((prev) => ({
      ...prev,
      postId: res.data.post.id,
      subCategoryId: selectedSubCat,
      categoryId: subCategories[0]?.categoryId,
    }));
    handleNext();
  };

  const handleClickBack = () => {
    handleBack();
  };

  return (
    <>
      <FormControl sx={{ m: 1, width: '100%' }}>
        <Typography sx={{ fontWeight: 500, fontSize: 24, mb: '1rem' }}>
          หมวดหมู่ของผลงาน
        </Typography>
        <Select
          defaultValue="-1"
          onChange={(e) => {
            const categoryItem = categories.find(
              (item) => item.id === e.target.value
            );
            console.log(categoryItem);
            setSubCategories(categoryItem.SubCategories);
          }}
        >
          <MenuItem value="-1" disabled>
            หมวดหมู่ของงาน
          </MenuItem>
          {categories.map(({ id, name }) => {
            return (
              <MenuItem key={id} value={id}>
                {name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <FormControl
        sx={{ m: 1, minWidth: 120, maxWidth: '28.75rem', width: '100%' }}
      >
        <Typography sx={{ fontWeight: 500, fontSize: 24, mb: '1rem' }}>
          หมวดหมู่รอง
        </Typography>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          defaultValue={'-1'}
          onChange={(e) => setSelectedSubCat(e.target.value)}
        >
          <MenuItem value="-1" disabled>
            หมวดหมู่รอง
          </MenuItem>
          {subCategories.map(({ id, name }) => {
            return (
              <MenuItem key={id} value={id}>
                {name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
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

export default CategoryForm;
