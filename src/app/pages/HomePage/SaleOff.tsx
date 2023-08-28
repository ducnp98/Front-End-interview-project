import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { SaleOffProductList } from "./data";
import styled from "styled-components";
import { Colors } from "../../utils/theme";

const SaleOff = () => {
  return (
    <Box>
      <Typography fontSize={20} fontWeight="bold" marginY={3}>
        Get up to 70% off
      </Typography>
      <Box>
        <Grid container spacing={2}>
          {SaleOffProductList.map((item) => (
            <Grid item sm={4} lg={3} md={3} xs={12} key={item.id}>
              <StyledSaleOffContainer style={{ backgroundColor: item.color }}>
                <Box padding={2}>
                  <Typography fontSize={20} color={Colors.gray1} fontWeight="bold">
                    Save
                  </Typography>
                  <Typography
                    fontSize={36}
                    color={Colors.gray1}
                    fontWeight="bold"
                    sx={{ opacity: 0.5 }}
                  >
                    ${item.save}
                  </Typography>
                  <Typography fontSize={14} fontWeight={600}>{item.title}</Typography>
                </Box>
                <StyledCategoryImage
                  src={item.image}
                  aria-label="category-alt"
                />
              </StyledSaleOffContainer>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

const StyledSaleOffContainer = styled(Box)`
  border-radius: 1rem;
  overflow: hidden;
`;

const StyledCategoryImage = styled.img`
  width: 100%;
  height: 13rem;
  object-fit: cover;
  margin-bottom: -0.5rem;s
`;

export default SaleOff;
