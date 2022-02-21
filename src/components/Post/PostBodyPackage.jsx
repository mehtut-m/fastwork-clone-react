import { Typography } from "@mui/material";
import PostBodyPackageList from "./PostBodyPackageList";

function PostBodyPackage() {
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
        แพ็กเกจ
      </Typography>
      <PostBodyPackageList />
      <PostBodyPackageList />
    </>
  );
}

export default PostBodyPackage;
