import { Box, Typography } from "@mui/material";
import { images } from "../ImagesList/Carousel";
import StarIcon from "@mui/icons-material/Star";

function PostBodyReviewComment() {
  return (
    <Box
      sx={{
        marginTop: "1.5rem",
        background: "#E2E2E2",
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
          <Typography // TODO: Reviewer Name
            component="p"
            sx={{
              fontSize: "1.125rem",
              marginTop: "1.875rem",
              textAlign: "start",
              color: "#7900FF",
            }}
          >
            John Doe
          </Typography>
          <Typography
            component="p"
            sx={{
              textAlign: "start",
              color: "gray",
            }}
          >
            25/11/21
          </Typography>
          <Typography // TODO: Reviewer Description
            component="p"
            sx={{
              fontSize: "1.125rem",
              textAlign: "start",
              marginTop: "0.5rem",
            }}
          >
            Professional มากเลยค่ะ ประทับใจกับผลงานมากค่ะ highly recommend
          </Typography>
        </Box>
        <Box // TODO: Button click to chat
          sx={{
            marginTop: "1.875rem",
            display: "flex",
            gap: "0.3rem",
            marginRight: "2rem",
            marginLeft: "3rem",
          }}
        >
          <StarIcon sx={{ color: "#F2A218" }} />
          <Typography component="p">5.0</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default PostBodyReviewComment;
