import React from "react";
import { Box, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";

const Featured = () => {
  return (
    <Box
      sx={{
        backgroundColor: orange[800],
        height: "235px",
      }}
    >
      <Box
        sx={{
          marginX: "1.5rem",
        }}
      >
        <Box
          sx={{
            paddingY: "2rem",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", lg: 1 / 2 },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "24px", md: "42px", lg: "60px" },
              }}
            >
              Problem koji predugo traje
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginTop: "0.5rem",
              }}
            >
              Ovaj sistem omogućava znatno veliku uštedu vremena, novca, te
              pruža usluge koje su izvrsne.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Featured;
