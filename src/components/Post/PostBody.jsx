import { Box } from "@mui/material";
import PostBodyTopic from "../Post/PostBodyTopic";
import PostBodyContent from "./PostBodyContent";
import PostBodyFreelance from "./PostBodyFreelance";
import PostBodyPackage from "./PostBodyPackage";
import PostBodyReview from "./PostBodyReview";
import PostBodyStepOfWork from "./PostBodyStepOfWork";
import PostPackage from "./PostPackage";

function PostBody() {
  return (
    <>
      <Box
        sx={{
          margin: "22rem auto",
          width: "66.5rem",
          display: "flex",
          gap: "1.5rem",
        }}
      >
        <Box sx={{ width: "66%" }}>
          <PostBodyTopic />
          <PostBodyContent />
          <PostBodyStepOfWork />
          <PostBodyPackage />
          <PostBodyFreelance />
          <PostBodyReview />
        </Box>
        <Box
          sx={{
            width: "33%",
            border: "1px solid gray",
            height: "100%",
          }}
        >
          <PostPackage />
        </Box>
      </Box>
    </>
  );
}

export default PostBody;
