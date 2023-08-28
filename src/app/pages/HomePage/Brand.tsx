import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Colors } from "../../utils/theme";
import { BrandList } from "./data";
import styled from "styled-components";

const ChooseByBrand = () => {
  return (
    <Box>
      <Typography fontSize={20} fontWeight="bold" marginY={3}>
        Choose By Brand
      </Typography>
      <Box>
        <Grid container spacing={2}>
          {BrandList.map((item) => (
            <Grid key={item.id} item sm={6} lg={3} md={4} xs={12}>
              <StyledBrandContainer display='flex' alignItems={'center'} gap={2}>
                <StyledCategoryImage
                  src={item.image}
                  aria-label="category-alt"
                />
                <Typography fontSize={17} fontWeight="bold">
                  {item.title}
                </Typography>
              </StyledBrandContainer>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

const StyledCategoryImage = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;
    object-fit: cover
`

const StyledBrandContainer = styled(Box)`
  background-color: ${Colors.gray8};
  border-radius: 0.4rem;
  padding: 1rem 1.5rem;
`;

export default ChooseByBrand;
