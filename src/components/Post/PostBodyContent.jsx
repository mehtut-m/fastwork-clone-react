import { Typography } from "@mui/material";

function PostBodyContent() {
  return (
    <Typography // TODO: Content
      component="p"
      sx={{
        fontSize: "1.125rem",
        textAlign: "start",
        marginTop: "1.125rem",
      }}
    >
      รับเขียนงาน3d perspective อาคารภายนอกและภายใน ออกแบบ3d perspective
      รายละเอียดการให้บริการ งานที่รับทำ งานอาคาร บ้านพักอาศัย ร้านค้า,
      โปรแกรมที่ใช้ Sketch up,Twinmotion, สไตล์ของงานที่ได้ออกมาจะได้ความสมจริง
      หรือ Mood & Tone ตามที่ลูกค้าต้องการ ขอบเขตงาน - ลูกค้าจะต้องมีไอเดีย
      ขนาดพื้นที่ - Style - มีแบบหรือข้อมูลที่จะให้ทำภาพสามมิติอยู่ก่อนแล้ว
      ถ้าไม่มีคิดค่าออกแบบเพิ่มเติม
    </Typography>
  );
}

export default PostBodyContent;
