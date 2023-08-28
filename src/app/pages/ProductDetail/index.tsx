import React, { useMemo, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { ProductList } from "../HomePage/data";
import StarIcon from "@mui/icons-material/Star";
import styled from "styled-components";
import { Colors } from "../../utils/theme";
import { useGlobalContext } from "../../../App";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedType, setSelectedType] = useState(0);
  const [price, setPrice] = useState(70);
  const { cart, setCart } = useGlobalContext();

  const productData = useMemo(() => {
    return ProductList.find((x) => x.id.toString() === id);
  }, [id]);

  if (!productData) return null;

  const selectType = (key: number) => {
    setSelectedType(key);
    setPrice(70 + key * 10);
  };

  const onAddToCart = () => {
    setCart(cart + 1);
    toast("Add product to cart successfully!", { autoClose: 2000 });
  };

  return (
    <Box padding={4}>
      <Grid container spacing={2}>
        <Grid
          item
          sm={12}
          lg={7}
          md={7}
          xs={12}
          display="flex"
          justifyContent="center"
        >
          <StyledCategoryImage src={productData.image} />
        </Grid>
        <Grid
          item
          sm={12}
          lg={5}
          md={5}
          xs={12}
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Typography fontSize={36} fontWeight="bold">
            {productData.title}
          </Typography>
          <Typography fontSize={12}>{productData.description}</Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            my={2}
          >
            {[...Array(4)].map((item, key) => (
              <StarIcon fontSize="small" sx={{ mt: 0.2, color: "orange" }} key={key} />
            ))}
            <Typography fontSize={12} color={Colors.gray3}>
              {productData.ratingStar} rating
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography fontSize={12} color={Colors.gray3}>
              Brand:
            </Typography>
            <Typography fontSize={14} color={Colors.primary}>
              OEM | More product from OEM
            </Typography>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            width="90%"
            alignItems="center"
            mt={2}
          >
            <Typography fontSize={14}>COLOR</Typography>
            <Box display="flex" gap={2}>
              {[Colors.bluePastel, Colors.pinkPastel, Colors.yellowPastel].map(
                (item) => (
                  <StyledColorPicker key={item} style={{ background: item }} />
                )
              )}
            </Box>
          </Box>
          <Box width="90%" mt={2}>
            <Typography fontSize={14}>TYPE</Typography>
            <Box display="flex" gap={2}>
              <Grid container spacing={2} mt={1}>
                {["Vol 1", "Vol 2", "Vol 3", "Vol 4"].map((item, key) => (
                  <Grid key={item} item sm={6} lg={6} md={6} xs={12}>
                    <StyledChooseTypeContainer
                      onClick={() => selectType(key)}
                      className={key === selectedType ? "active" : ""}
                    >
                      <Typography
                        fontSize={17}
                        fontWeight="bold"
                        color={Colors.primary}
                      >
                        {item}
                      </Typography>
                      <Typography fontSize={14} color={Colors.gray3}>
                        ${70 + key * 10}
                      </Typography>
                    </StyledChooseTypeContainer>
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Typography
              color={Colors.yellowPastel}
              fontWeight="bold"
              fontSize={37}
              textAlign="center"
              mt={2}
            >
              ${price}
            </Typography>
            <StyledAddToCartButton mt={3} onClick={onAddToCart}>
              <Typography color={Colors.white} fontWeight="bold">
                Add to cart
              </Typography>
            </StyledAddToCartButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const StyledAddToCartButton = styled(Box)`
  background-color: ${Colors.bluePastel};
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.3rem;
  cursor: pointer
`;

const StyledChooseTypeContainer = styled(Box)`
  background-color: ${Colors.gray8};
  padding: 0.5rem 1rem;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &.active {
    outline: 1px solid ${Colors.primary};
  }
`;

const StyledColorPicker = styled(Box)`
  width: 2rem;
  height: 2rem;
  border-radius: 5rem;
  border: 2px solid ${Colors.gray8};
`;

const StyledCategoryImage = styled.img`
  width: 60%;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export default ProductDetail;
