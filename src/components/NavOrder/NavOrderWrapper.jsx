import { Flag } from "@mui/icons-material";
import { Button, Fade, Menu, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { getAllCategories, getSubCategoryById } from "../../apis/category";

function NavOrderWrapper() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const open = Boolean(anchorEl);

  useEffect(() => {
    getAllCategories()
      .then((res) => setCategories(res.data.categories))
      .catch((err) => console.log(err));
  }, []);

  console.log(categories);

  const handleMouseOver = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMouseLever = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log(
    categories.map((item) => item.SubCategories.map((el) => el.name))
  );

  return (
    <Box
      component="nav"
      sx={{
        mx: "15.375rem",
        display: "flex",
        height: "3.5rem",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Box>
        {categories &&
          categories.map((item) => (
            <>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onMouseOver={handleMouseOver}
                value={item.id}
              >
                {item.name}
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                  onMouseLeave: handleMouseLever,
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </>
          ))}
      </Box>
    </Box>
  );
}

export default NavOrderWrapper;
