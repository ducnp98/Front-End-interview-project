import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Colors } from "../../utils/theme";
import AccountImage from "../../assets/images/account.jpg";
import styled from "styled-components";

const DrawerContent = () => {
  return (
    <>
      <StyledHeaderDrawerContainer>
        <StyleAccountImage src={AccountImage} aria-label="account_image" />
        <StyledInfoContainer>
          <Typography fontSize={20} fontWeight="bold">
            Nguyen Phuoc Duc
          </Typography>
          <Typography fontSize={12}>Customer of the year</Typography>
        </StyledInfoContainer>
      </StyledHeaderDrawerContainer>
      <Box paddingX={2} paddingY={1}>
        <StyledButtonMenu id="delivery_drop_down__btn">
          <StyledTitleMenu>Catagories</StyledTitleMenu>
        </StyledButtonMenu>
        <StyledButtonMenu id="delivery_drop_down__btn">
          <StyledTitleMenu>Deals</StyledTitleMenu>
        </StyledButtonMenu>
        <StyledButtonMenu id="delivery_drop_down__btn">
          <StyledTitleMenu>What's new</StyledTitleMenu>
        </StyledButtonMenu>
        <StyledButtonMenu id="delivery_drop_down__btn">
          <StyledTitleMenu>Delivery</StyledTitleMenu>
        </StyledButtonMenu>
      </Box>
    </>
  );
};

const StyledTitleMenu = styled(Typography)`
  text-align: start;
  text-transform: none;
  color: ${Colors.gray4};
  width: 100%;
  padding: 0.2rem 0;
  font-weight: bold !important;
`;

const StyledButtonMenu = styled(Button)`
  width: 100%;
`;

const StyledHeaderDrawerContainer = styled(Box)`
  background: linear-gradient(
    to bottom,
    ${Colors.primary} 0%,
    ${Colors.primary} 50%,
    white 50%,
    white 100%
  );
  padding: 1.5rem;
  height: 10rem;
  position: relative;
  justify-content: center;
  display: flex;
`;

const StyledInfoContainer = styled(Box)`
  position: absolute;
  bottom: 0rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyleAccountImage = styled.img`
  width: 6rem;
  height: 6rem;
  object-fit: cover;
  border-radius: 5rem;
  position: absolute;
  top: 3rem;
`;

export default DrawerContent;
