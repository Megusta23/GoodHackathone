import React from "react";
import { Typography, Box } from "@mui/material";
import Link from "@mui/material/Link";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Kúbos Documents
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box
      sx={{
        height: "100px",
      }}
    >
      <Box
        sx={{
          marginTop: "2rem",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
          }}
        >
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
