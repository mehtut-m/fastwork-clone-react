import { Box, Button, Typography } from "@mui/material";

function PostPackage() {
  return (
    <>
      <Box
        component="div"
        sx={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <Button
          variant="contained" // ! change when click other button
          sx={{ width: "6.625rem", height: "4.8rem" }}
        >
          ฿1,800
        </Button>
        <Button sx={{ width: "6.625rem", height: "4.8rem" }}>฿3,000</Button>
        <Button sx={{ width: "6.625rem", height: "4.8rem" }}>฿6,500</Button>
      </Box>
      <Typography // TODO: Topic name package
        component="p"
        sx={{
          fontSize: "1rem",
          textAlign: "start",
          marginLeft: "1.375rem",
          marginTop: "1.125rem",
          color: "#7900FF",
        }}
      >
        แพ็กเกจ : Silver package
      </Typography>
      <Typography // TODO: Content
        sx={{
          fontSize: "1rem",
          textAlign: "start",
          marginLeft: "1.375rem",
          marginRight: "1.375rem",
        }}
      >
        -I will design 2 logos and then you choose 1 logo that you like for
        develop to edit for 3 times. After design finish I will send the file to
        you. (jpg,png,eps(vector file)) -free rubber stamp file. -ออกแบบโลโก้ 2
        แบบ (ใช้เวลา 3-5 วัน) (ต้องการงานด่วนใน 1 วัน + 2,000 บาท ) -พัฒนาต่อ 1
        แบบ -สามารถแก้ไขได้ 3 ครั้ง (เกินสามครั้งคิดเพิ่มครั้งละ 200 บาท)
        ลูกค้าจะได้รับ ความละเอียดสูง 300 DPI 1.ไฟล์vector file พร้อมส่งโรงพิมพ์
        2.ไฟล์ png ความละเอียดสูง 3.ไฟล์ jpg ความละเอียดสูง
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "0.8rem",
          marginBottom: "1.375rem",
        }}
      >
        <Typography sx={{ marginLeft: "1.375rem", fontWeight: "bold" }}>
          ระยะเวลาในการทำงาน
        </Typography>
        <Typography
          sx={{ marginRight: "1.375rem", fontWeight: "bold", color: "#7900FF" }}
        >
          3 วัน
        </Typography>
      </Box>
      <Typography component="hr" sx={{ margin: "1rem" }}></Typography>
      <Button // TODO: button
        sx={{
          background: "#7900FF",
          color: "#fff",
          width: "13.125rem",
          height: "2.75rem",
          marginBottom: "1.375rem",
          ":hover": { background: "#7900FF", color: "#fff" },
        }}
      >
        สนใจจ้าง
      </Button>
    </>
  );
}

export default PostPackage;
