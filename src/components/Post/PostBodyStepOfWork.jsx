import { Button, Typography } from "@mui/material";

function PostBodyStepOfWork() {
  return (
    <>
      <Typography // TODO: Step of work
        component="p"
        sx={{
          fontSize: "1.125rem",
          textAlign: "start",
          marginTop: "1.125rem",
          fontWeight: "bold",
        }}
      >
        ขั้นตอนการทำงาน
      </Typography>
      <Typography // TODO: Step Content
        component="p"
        sx={{
          fontSize: "1.125rem",
          textAlign: "start",
          marginTop: "1.125rem",
        }}
      >
        สำหรับ รับเขียนงาน3d perspective ออกแบบภายในและภายนอก
      </Typography>
      <Typography // TODO: Step 1
        component="p"
        sx={{
          fontSize: "1.125rem",
          textAlign: "start",
        }}
      >
        1. สอบถามความต้องการลูกค้า
      </Typography>
      <Typography // TODO: Step2
        component="p"
        sx={{
          fontSize: "1.125rem",
          textAlign: "start",
        }}
      >
        2. นำเสนอแนวคิดการออกแบบเบื้องต้น
      </Typography>
      <Button // TODO: button see more
        sx={{
          fontSize: "1.125rem",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "flex-start",
          padding: "0",
        }}
      >
        แสดงทั้งหมด
      </Button>
    </>
  );
}

export default PostBodyStepOfWork;
