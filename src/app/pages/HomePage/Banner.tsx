import React from "react";
import BannerWallpaper from "../../assets/images/bannerLazada.jpg";
import styled from "styled-components";
import { Box } from "@mui/material";
const Banner = () => {
  return (
    <Box>
      <StyledBannerImage src={BannerWallpaper} aria-label="lazada-banner" />
    </Box>
  );
};

const StyledBannerImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export default Banner;
