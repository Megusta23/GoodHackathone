import React from "react";
import { Box, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";
import { orange } from "@mui/material/colors";

const Responsive = styled("div")(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Home = () => {
  return (
    <Box
      sx={{
        marginTop: "4rem",
        marginX: "1.5rem",
      }}
    >
      <Responsive>
        <Box
          sx={{
            marginRight: "4rem",
          }}
        >
          <img src="././img/main.jpg" alt="main" className="image" />
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "24px", md: "42px", lg: "82px" },
              fontWeight: 800,
            }}
          >
            Rješenje dugogodišnjeg problema
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginTop: "2rem",
            }}
          >
            Naš projekat omogućava preuzimanje dokumenata u digitalnom obliku
            kako bi uštedili vrijeme.
          </Typography>
          <Button
            variant="outlined"
            href="/login"
            sx={{
              marginY: "1rem",
              marginBottom: "4rem",
              color: orange[800],
              outlineColor: orange[800],
            }}
          >
            Login za browser aplikaciju
          </Button>
        </Box>
      </Responsive>
    </Box>
  );
};

export default Home;
