import { Box, Typography } from "@mui/material";
import React, { memo } from "react";
import { Colors } from "../../utils/theme";
import Logo from "../../assets/images/lazada.jpg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const LogoHeader = memo(() => {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate('/')
  }
  return (
    <StyledLogoContainer display="flex" alignItems="center" gap={1.5} onClick={goToHome}>
      <StyledLogoImage src={Logo} alt="home-icon" />
      <Typography fontWeight={"bold"} fontSize={24} color={Colors.primary}>
        Lazada
      </Typography>
    </StyledLogoContainer>
  );
});

const StyledLogoContainer = styled(Box)`
  cursor: pointer
`
const StyledLogoImage = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  border-radius: 0.5rem;
`;
