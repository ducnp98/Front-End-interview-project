import React, { memo } from "react";
import { Box, Button, InputAdornment, TextField, Typography, styled } from "@mui/material";
import { StyledTitleMenuBar } from ".";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { Colors } from "../../utils/theme";
import { useGlobalContext } from "../../../App";

export const RightHeaderNavBar = memo(() => {
  const { cart } = useGlobalContext();
  return (
    <Box display="flex" alignItems="center" gap={2.5}>
      <StyledSearchProduct
        id="search_product__input"
        placeholder="Search Product"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: Colors.gray5 }} />
            </InputAdornment>
          ),
        }}
      />
      <Button id="delivery_drop_down__btn" sx={{ gap: 1 }}>
        <PersonIcon sx={{ color: Colors.gray5 }} />
        <StyledTitleMenuBar>Account</StyledTitleMenuBar>
      </Button>
      <Button id="delivery_drop_down__btn" sx={{ gap: 1 }}>
        <ShoppingCartIcon sx={{ color: Colors.gray5 }} />
        <StyledTitleMenuBar>Cart</StyledTitleMenuBar>
        <StyledCartNumber><Typography color={Colors.white} fontSize={12} fontWeight='bold'>{cart}</Typography></StyledCartNumber>
      </Button>
    </Box>
  );
});

const StyledCartNumber = styled(Box)`
  width: 1.3rem;
  height: 1.3rem;
  background-color: red;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -0.1rem;
  left: 1.3rem;
`;

const StyledSearchProduct = styled(TextField)`
  input#search_product__input {
    padding: 7px 16px;
  }
  .MuiOutlinedInput-root {
    border-radius: 20px;
  }
`;
