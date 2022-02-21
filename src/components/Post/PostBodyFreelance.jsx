import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { images } from "../ImagesList/Carousel";
import ChatIcon from "@mui/icons-material/Chat";
import BadgeIcon from "@mui/icons-material/Badge";
import DoneIcon from "@mui/icons-material/Done";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

function PostBodyFreelance() {
  return (
    <>
      <Typography // TODO: Package List
        component="h2"
        sx={{
          fontSize: "2rem",
          textAlign: "start",
          color: "#7900FF",
          marginTop: "1.125rem",
        }}
      >
        ฟรีแลนซ์
      </Typography>
      <Box
        component="div"
        sx={{
          border: "1px solid #000",
          borderRadius: "5px",
          marginTop: "1.125rem",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box
            component="img"
            sx={{
              display: "block",
              borderRadius: "50%",
              width: "6.5rem",
              height: "6.5rem",
              margin: "1.875rem",
            }}
            src={images[0].url} // ! Image Profile
            alt=""
          />
          <Box>
            <Typography // TODO: Freelance Name
              component="p"
              sx={{
                fontSize: "1.125rem",
                marginTop: "1.875rem",
                textAlign: "start",
              }}
            >
              John Doe
            </Typography>
            <Typography // TODO: Freelance Description
              component="p"
              sx={{
                fontSize: "1.125rem",
                textAlign: "start",
                marginTop: "0.8rem",
              }}
            >
              วิศวกรโยธา รับจ้างเขียนแบบ ประเมินราคา ตามหลักวิศวกรรม
            </Typography>
          </Box>
          <Button // TODO: Button click to chat
            sx={{
              marginTop: "1.875rem",
              display: "flex",
              gap: "0.3rem",
              height: "2.5rem",
              width: "10rem",
              marginRight: "1rem",
              marginLeft: "3rem",
              border: "1px solid gray",
              ":hover": { background: "#7900FF", color: "#fff" },
            }}
          >
            <ChatIcon />
            ติดต่อผู้ขาย
          </Button>
        </Box>
        <Typography component="hr" sx={{ margin: "1rem" }}></Typography>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Box>
            <BadgeIcon />
            <Typography
              component="p"
              sx={{ color: "#7900FF", fontWeight: "bold" }}
            >
              02/2020
            </Typography>
            <Typography component="p">เป็นสมาชิก</Typography>
          </Box>
          <Box sx={{ marginBottom: "1.125rem" }}>
            <DoneIcon />
            <Typography
              component="p"
              sx={{ color: "#7900FF", fontWeight: "bold" }}
            >
              100%
            </Typography>
            <Typography component="p">งานสำเร็จ</Typography>
          </Box>
          <Box>
            <LocalGroceryStoreIcon />
            <Typography
              component="p"
              sx={{ color: "#7900FF", fontWeight: "bold" }}
            >
              30 ครั้ง
            </Typography>
            <Typography component="p">ขายได้</Typography>
          </Box>
          <Box>
            <ChatIcon />
            <Typography
              component="p"
              sx={{ color: "#7900FF", fontWeight: "bold" }}
            >
              6 นาที
            </Typography>
            <Typography component="p">ตอบกลับ</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default PostBodyFreelance;
