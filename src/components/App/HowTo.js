import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import styled from "@emotion/styled";

import data from "../../data.json";

const Responsive = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    marginX: "412rem",
    display: "block",
  },
}));

const HowTo = () => {
  return (
    <Box
      sx={{
        marginTop: "4rem",
      }}
    >
      <Responsive>
        <img src="././img/qr4.png" alt="qr code" className="qr" />
        <Box
          sx={{
            width: 1 / 2,
          }}
        >
          <Typography variant="h3" mb="1rem">
            Kúbos Documents
          </Typography>
          <Typography variant="h6" mb="0.5rem">
            Analiza, verifikacija i provjera dokumentacije uz pomoć QR koda.
          </Typography>
          <Typography variant="body1" mb="6rem">
            na ovom <span className="link">Linku</span> mozete preuzeti
            aplikaciju direktno preko play stora ili App stora
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
            }}
            mb="1rem"
          >
            Link za login na app system
          </Typography>
          <Typography variant="body1">
            Instalirajte našu aplikaciju u 4 jednostavna koraka, kako bi mogli
            koristiti naše usluge bilo gdje i tako uštedili maksimalno vaše
            vrijeme na boljim aktivnostima!
          </Typography>
        </Box>
      </Responsive>
      <Box
        sx={{
          flexGrow: 1,
          paddingX: "1.5rem",
          backgroundColor: grey[800],
          marginTop: "4rem",
          paddingY: "4rem",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data.map((podatci, index) => (
            <Grid item xs={4} sm={4} md={6} key={index}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src={podatci.image} alt="icons" className="icon" />
                <Box>
                  <Typography
                    mb="1rem"
                    variant="h6"
                    sx={{
                      marginLeft: "2.5rem",
                    }}
                  >
                    {podatci.naslov}
                  </Typography>
                  <Typography
                    sx={{
                      marginLeft: "2.5rem",
                    }}
                  >
                    {podatci.opis}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HowTo;
