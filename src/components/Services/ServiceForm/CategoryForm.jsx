import { useEffect, useState } from 'react';
import { getAllCategories } from '../../../apis/category';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';

function CategoryForm() {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    getAllCategories()
      .then((res) => setCategories(res.data.categories))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <FormControl sx={{ m: 1, width: '100%' }}>
        <Typography sx={{ fontWeight: 500, fontSize: 24, mb: '1rem' }}>
          หมวดหมู่ของผลงาน
        </Typography>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          defaultValue="-1"
          onChange={(e) => {
            const categoryItem = categories.find(
              (item) => item.id === e.target.value
            );
            setSubCategories(categoryItem.SubCategories);
          }}
        >
          <MenuItem value="-1" disabled>
            หมวดหมู่ของงาน
          </MenuItem>
          {categories.map(({ id, name }) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))}
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
          defaultValue="-1"
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
    </>
  );
}

export default CategoryForm;
