import { Box } from "@mui/system";

function PostHerder() {
  return (
    <>
      <Box
        sx={{
          margin: "0 auto",
          height: "9rem",
          width: "66.5rem",
          background: "red",
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            background: "green",
            width: "70%",
            height: "26.5rem",
            marginTop: "2rem",
          }}
        >
          Image Left
        </Box>
        <Box
          sx={{
            background: "blue",
            width: "30%",
            height: "26.5rem",
            marginTop: "2rem",
          }}
        >
          <Box sx={{ background: "pink", height: "12.5rem" }}>big</Box>
          <Box>small</Box>
        </Box>
      </Box>
    </>
  );
}

export default PostHerder;
