import { Box, Typography } from "@mui/material";
import { ProductList } from "./data";
import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import { Colors } from "../../utils/theme";
import { useGlobalContext } from "../../../App";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const BestSale = () => {
  const navigate = useNavigate();
  const { cart, setCart } = useGlobalContext();

  const onAddToCart = () => {
    setCart(cart + 1);
    toast("Add product to cart successfully!", { autoClose: 2000 });
  };

  const goToDetail = (id: number) => {
    navigate(`/detail/${id}`);
  };

  return (
    <Box>
      <Typography fontSize={20} fontWeight="bold" marginY={3}>
        Today best deal for you
      </Typography>
      <StyledHorizontalContainer>
        <StyledScrollView>
          {ProductList.map((item) => (
            <StyledCategoryContainer key={item.id}>
              <StyledCategoryImageContainer onClick={() => goToDetail(item.id)}>
                <StyledCategoryImage
                  src={item.image}
                  className="img-hover-zoom"
                  aria-label="category-alt"
                />
              </StyledCategoryImageContainer>
              <Box
                display="flex"
                flexDirection="column"
                gap={0.1}
                marginTop={1}
                alignItems="flex-start"
              >
                <Box display="flex" justifyContent="space-between" width="100%">
                  <Typography fontWeight="bold">{item.title}</Typography>
                  <Typography fontSize={14}>59$</Typography>
                </Box>
                <Typography fontSize={12}>{item.description}</Typography>
                <Box display="flex" alignItems="center" gap={1}>
                  <Typography display="flex" fontWeight="bold">
                    {item.ratingStar}
                    <StarIcon
                      fontSize="small"
                      sx={{ mt: 0.2, color: "orange" }}
                    />
                  </Typography>
                  <Typography fontSize={12}>({item.comments})</Typography>
                </Box>

                <Box>
                  <StyledAddButton className="active" onClick={onAddToCart}>
                    <Typography>Add to Cart</Typography>
                  </StyledAddButton>
                </Box>
              </Box>
            </StyledCategoryContainer>
          ))}
        </StyledScrollView>
      </StyledHorizontalContainer>
    </Box>
  );
};

const StyledScrollView = styled(Box)`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  padding-bottom: 0.5rem;
`;

const StyledHorizontalContainer = styled(Box)`
  margin: auto;
  text-align: center;
  position: relative;
  width: 100%;
  padding-top: 0.5rem;
`;

const StyledAddButton = styled(Box)`
  border: 1px solid gray;
  border-radius: 1rem;
  display: inline-block;
  padding: 0 0.6rem;
  margin-top: 0.5rem;
  cursor: pointer;
  &.active:hover {
    background-color: ${Colors.gray8};
  }
`;

const StyledCategoryContainer = styled(Box)`
  width: 12rem;
  overflow: hidden;
  display: inline-block;
  padding: 0 1rem;
`;

const StyledCategoryImageContainer = styled(Box)`
  width: 100%;
  height: 10rem;
  overflow: hidden;
  display: inline-block;
`;

const StyledCategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
  overflow: hidden;
  &.img-hover-zoom {
    transition: transform 0.5s ease;
  }

  &.img-hover-zoom:hover {
    transform: scale(1.2);
  }
`;

export default BestSale;
