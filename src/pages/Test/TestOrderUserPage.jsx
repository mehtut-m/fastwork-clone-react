import { Box, Button, FormControl, Input, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "../../config/axios";

function TestOrderUserPage() {
  const [comment, setComment] = useState("");
  const [image, setImage] = useState("");
  const [order, setOrder] = useState([]);

  const orderId = 1; // ! Hand code for test

  const handleClickSubmit = async (e) => {
    e.preventDefault();
  };

  const fetchOrder = async () => {
    try {
      const res = await axios.get(`/orders/${orderId}`);
      console.log(res.data);
      setOrder(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexFlow: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" sx={{ m: 1, fontSize: "2rem" }}>
          ฟอร์ม สำหรับ ส่งงาน
        </Typography>
        <FormControl
          sx={{
            m: 1,
            minWidth: 120,
            maxWidth: "28.75rem",
            width: "100%",
            gap: "2rem",
          }}
        >
          {/* // TODO: comment */}
          <Input
            placeholder="เขียนสำหรับคำเมนต์"
            onChange={(e) => setComment(e.target.value)}
          />
        </FormControl>

        {/* // TODO: button submit */}
        <Button variant="contained" onClick={handleClickSubmit}>
          Submit
        </Button>
      </Box>
    </>
  );
}

export default TestOrderUserPage;
