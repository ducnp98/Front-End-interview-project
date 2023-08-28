import { Button, Menu, MenuItem } from "@mui/material";
import React, { memo } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { StyledTitleMenuBar } from ".";

const catagories = ["Furniture", "Hand bag", "Book", "Tech", "Sneaker"];

export const CatagoriesDropDown = memo(() => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        id="catagories_drop_down__btn"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <StyledTitleMenuBar>Catagories</StyledTitleMenuBar>
        <ArrowDropDownIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {catagories.map((item, key) => (
          <MenuItem key={key} onClick={handleClose}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
});
