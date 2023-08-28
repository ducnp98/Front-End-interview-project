import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./styles.css";
import { Box, Button, Typography, styled } from "@mui/material";
import { LogoHeader } from "./LogoHeader";

import { CatagoriesDropDown } from "./CatagoriesDropDown";
import { RightHeaderNavBar } from "./RightHeaderNavBar";
import { Colors } from "../../utils/theme";
import DrawerContent from "./DrawerContent";
const Header = () => {
  return (
    <>
      <Box className="nav">
        <input type="checkbox" className="nav__input" name="" id="nav__input" />
        <nav className="nav__pc" style={{ width: "100%" }}>
          <Box paddingY={2} paddingX={4}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <LogoHeader />
              <Box display="flex" alignItems="center" gap={1.6}>
                <CatagoriesDropDown />
                <Button id="deals_drop_down__btn">
                  <StyledTitleMenuBar>Deals</StyledTitleMenuBar>
                </Button>
                <Button id="whats_new_drop_down__btn">
                  <StyledTitleMenuBar>What's new</StyledTitleMenuBar>
                </Button>
                <Button id="delivery_drop_down__btn">
                  <StyledTitleMenuBar>Delivery</StyledTitleMenuBar>
                </Button>
              </Box>
              <RightHeaderNavBar />
            </Box>
          </Box>
        </nav>

        <label
          htmlFor="nav__input"
          className="nav__bar-btn"
          style={{ padding: 14 }}
        >
          <MenuIcon fontSize="large" />
        </label>

        <Box id="logo_mobile" className="nav__bar-btn">
          <StyledLogoMobile className="responsive">
            <LogoHeader />
          </StyledLogoMobile>
        </Box>

        <label htmlFor="nav__input" className="nav__overlay"></label>
        <nav className="nav__mobile">
          <DrawerContent />
          <label htmlFor="nav__input" className="nav__mobile-btn">
            <CloseIcon color="success" />
          </label>
        </nav>
      </Box>
    </>
  );
};

export const StyledLogoMobile = styled(Box)`
  position: absolute;
  display: flex;
  justify-content: center;
  z-index: -1;
  padding: 0.4rem;
  @media (max-width: 1023px) {
    .responsive {
      display: none;
    }
  }
`;

export const StyledTitleMenuBar = styled(Typography)`
  text-transform: none;
  color: ${Colors.gray3};
  font-weight: 600;
  font-size: 1.1rem;
`;

export default Header;
