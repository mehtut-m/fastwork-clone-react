import { Button, FormControl, Input, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import axios from "../../config/axios";

function TestOrderFreelancePage() {
  const [commentFreelance, setCommentFreelance] = useState("");
  const [imageFreelance, setImageFreelance] = useState("");
  const [order, setOrder] = useState([]);
  const [dayLeft, setDayLeft] = useState("");
  const [hoursLeft, setHoursLeft] = useState("");
  const [minutesLeft, setMinutesLeft] = useState("");
  const [secondsLeft, setSecondsLeft] = useState("");

  const orderId = 1; // ! Hand code for test

  // TODO: axios to backend
  const submitOrderToReview = async (
    commentFreelance,
    imageFreelance,
    orderId
  ) => {
    const formData = new FormData();
    formData.append("orderId", orderId);
    formData.append("comment", commentFreelance);
    formData.append("image", imageFreelance);
    console.log(formData);
    try {
      const res = await axios.patch("/orders/update-status-review", formData);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // TODO: submit form
  const handleClickSubmit = async (e) => {
    e.preventDefault();
    await submitOrderToReview(commentFreelance, imageFreelance, orderId); // ! Hard code order id
  };

  const fetchOrder = async () => {
    try {
      const res = await axios.get(`/orders/${orderId}`);
      console.log(res.data.order);
      setOrder(res.data.order);
    } catch (err) {
      console.log(err);
    }
  };

  const countDownDate = new Date(order.deadlineDate).getTime();
  const timeToDay = new Date().getTime();
  const timeleft = countDownDate - timeToDay;
  const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDayLeft(days);
      setHoursLeft(hours);
      setMinutesLeft(minutes);
      setSecondsLeft(seconds);
    }, 1000);
    return () => clearTimeout(timer);
  });

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
        <Typography component="p">
          จำนวนการแก้ไขงานที่เหลือ : {order && order.reviseCount}
        </Typography>
        <Typography>
          ระยะเวลาสิ้นสุดงาน : {dayLeft} วัน : {hoursLeft} ชั่วโมง :{" "}
          {minutesLeft} นาที : {secondsLeft} วินาที
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
          {/* // TODO: commentFreelance */}
          <Input
            placeholder="เขียนสำหรับคอมเมนต์"
            onChange={(e) => setCommentFreelance(e.target.value)}
          />
        </FormControl>

        <FormControl
          sx={{
            m: 1,
            minWidth: 120,
            maxWidth: "28.75rem",
            width: "100%",
            gap: "2rem",
          }}
        >
          {/* // TODO: should image */}
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              type="file"
              onChange={(e) => {
                if (e.target.files[0]) setImageFreelance(e.target.files[0]);
              }}
            />
            <Button variant="contained" onClick={() => setImageFreelance("")}>
              Remove
            </Button>
          </label>
        </FormControl>
        {/* // TODO: button submit */}
        <Button variant="contained" onClick={handleClickSubmit}>
          Submit
        </Button>
      </Box>
    </>
  );
}

export default TestOrderFreelancePage;
