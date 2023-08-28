import React from "react";
import Banner from "./Banner";
import TopCatagories from "./TopCatagories";
import { Box } from "@mui/material";
import BestSale from "./BestSale";
import ChooseByBrand from "./Brand";
import SaleOff from "./SaleOff";

const HomePage = () => {
  return (
    <Box>
      <Banner />
      <Box paddingX={4} paddingY={2}>
        <TopCatagories />
        <BestSale />
        <ChooseByBrand />
        <SaleOff />
      </Box>
    </Box>
  );
};

export default HomePage;
