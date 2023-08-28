import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
const FooterForMore = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      paddingX={4}
      paddingY={1}
    >
      <Grid container>
        <Grid item sm={12} lg={6} md={6} xs={12}>
          <Box display="flex" alignItems="center" gap={2.5}>
            <Box display="flex" alignItems="center" gap={1}>
              <StorefrontIcon fontSize="small" />
              <Typography fontSize={14}>Become Seller</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <CardGiftcardIcon fontSize="small" />
              <Typography fontSize={14}>Gift Cards</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <SupportAgentIcon fontSize="small" />
              <Typography fontSize={14}>Help Center</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item sm={6} lg={3} md={3} xs={6}>
          <Box display="flex" alignItems="center" gap={2}>
            <Typography fontSize={14}>Terms of Use</Typography>
            <Typography fontSize={14}>Privacy Policy</Typography>
          </Box>
        </Grid>
        <Grid item sm={6} lg={3} md={3} xs={6}>
          <Typography fontSize={14} textAlign="end">
            All Right reserved by Musemind | 2022
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export default FooterForMore;
