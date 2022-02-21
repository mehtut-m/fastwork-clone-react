import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

function PostBodyPackageList() {
  return (
    <>
      <Box
        component="div"
        sx={{
          border: "1px solid #000",
          borderRadius: "5px",
          marginTop: "1.125rem",
        }}
      >
        <Typography // TODO: Name Package 1
          component="p"
          sx={{
            fontSize: "1.125rem",
            fontWeight: "bold",
            textAlign: "start",
            marginLeft: "1rem",
            marginTop: "1rem",
          }}
        >
          ภาพนิ่ง Interior/Exterior ห้องขนาดเล็ก
        </Typography>
        <Box component="div" sx={{ display: "flex", gap: "0.5rem" }}>
          <CalendarTodayIcon // TODO: Calender
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "1rem",
              color: "gray",
            }}
          />
          <Typography component="p" sx={{ color: "gray" }}>
            ระยะเวลาในการทำงาน 3 วัน
          </Typography>
        </Box>

        <Typography // TODO: Package content
          component="p"
          sx={{
            fontSize: "1.125rem",
            textAlign: "start",
            margin: "1rem",
          }}
        >
          ภาพนิ่งประมาณ 30 ภาพ หรือตามความเหมาะสม พร้อมปรับสีและแสงทุกภาพ
          ถ้าต้องการรีทัชรายละเอียดสูง (เช่น เปลี่ยนท้องฟ้า ลบสายไฟ เสาไฟ
          เพิ่มต้นไม้) คิดเพิ่ม เริ่มต้นภาพละ 2500 บาท
        </Typography>
        <Typography component="hr" sx={{ margin: "1rem" }}></Typography>

        <Box // TODO: Footer
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Typography
            component="p"
            sx={{
              fontSize: "1.125rem",
              textAlign: "start",
              marginLeft: "1rem",
            }}
          >
            ชำระเงิน
          </Typography>
          <Button // TODO: Button for click
            sx={{
              marginRight: "1rem",
              background: "#7900FF",
              color: "#fff",
              ":hover": { background: "#7900FF", color: "#fff" },
            }}
          >
            สนใจจ้าง
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default PostBodyPackageList;
