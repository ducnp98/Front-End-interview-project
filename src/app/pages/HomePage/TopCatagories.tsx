import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { TopCatagoriesData } from "./data";
import styled from "styled-components";
import { Colors } from "../../utils/theme";

const TopCatagories = () => {
  return (
    <Box>
      <Typography fontSize={20} fontWeight="bold" marginBottom={3}>
        Shop our top Catagories
      </Typography>

      <Box>
        <Grid container spacing={2}>
          {TopCatagoriesData.map((item) => (
            <Grid item sm={4} lg={2} md={3} xs={6} key={item.id}>
              <StyledCategoryContainer position="relative">
                <StyledCategoryImage
                  src={item.image}
                  aria-label="category-alt"
                />
                <StyledCategoryText fontSize={17} fontWeight="bold">
                  {item.title}
                </StyledCategoryText>
              </StyledCategoryContainer>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

const StyledCategoryText = styled(Typography)`
  text-align: center;
  position: absolute;
  top: 1rem;
  width: 100%;
  color: ${Colors.white};
`;

const StyledCategoryContainer = styled(Box)`
  width: 100%;
  height: 10rem;
`;

const StyledCategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export default TopCatagories;
