import React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import { LogoHeader } from "../Header/LogoHeader";
import FooterForMore from "./FooterForMore";

const DepartmentList = [
  "Fashion",
  "Education Product",
  "Frozen Food",
  "Beverages",
  "Organic Grocery",
  "Office Supplies",
  "Beauty Products",
  "Books",
  "Electronics & Gadget",
  "Travel Accesories",
  "Fitness",
  "Sneakers",
  "Toys",
  "Furniture",
];

const AboutUsList = [
  "About shopcart",
  "Careers",
  "News & Blog",
  "Help",
  "Press Center",
  "Shop by location",
  "Shopcart brands",
  "Affiliate & Partners",
  "Ideas & Guides",
];

const ServiceList = [
  "Gift Card",
  "Mobile App",
  "Shipping & Delivery",
  "Order Pickup",
  "Account Signup",
];

const HelpList = [
  "Shopcart Help",
  "Returns",
  "Track orders",
  "Contact us",
  "Feedback",
  "Security &Fraud",
];

const Footer = () => {
  return (
    <>
      <Grid container spacing={4} mt={4} px={4} pb={2}>
        <Divider sx={{ width: "100%", paddingRight: 4 }} />
        <Grid item sm={12} lg={4} md={12} xs={12}>
          <LogoHeader />
          <Typography fontSize={12} mt={3}>
            Losum 5mg Tablet belongs to a group of medicines called
            antihistamines. It is used to treat various allergic conditions such
            as hay fever, conjunctivitis, some skin reactions such as eczema,
            hives, and reactions to bites and stings. It also relieves watery
            eyes, runny nose, sneezing, and itching.
          </Typography>
          <Typography fontSize={12} mt={1}>
            Losum 5mg Tablet can be taken with or without food. The dose
            required by you may vary depending on what you are taking it for.
            This medicine is usually taken in the evening, but follow the advice
            of your doctor on how to take it. You may need this medicine only on
            days you have symptoms, but if you are taking it to prevent the
            symptoms then you should take it regularly. If you miss doses or
            stop taking it earlier than advised, your symptoms may come back.
          </Typography>
        </Grid>
        <Grid item sm={3} lg={2} md={3} xs={6} gap={1}>
          <Typography marginBottom={1} fontWeight="bold">
            Department
          </Typography>
          {DepartmentList.map((item) => (
            <Typography key={item} fontSize={13}>
              {item}
            </Typography>
          ))}
        </Grid>
        <Grid item sm={3} lg={2} md={3} xs={6} gap={1}>
          <Typography marginBottom={1} fontWeight="bold">
            About us
          </Typography>
          {AboutUsList.map((item) => (
            <Typography key={item} fontSize={13}>
              {item}
            </Typography>
          ))}
        </Grid>
        <Grid item sm={3} lg={2} md={3} xs={6} gap={1}>
          <Typography marginBottom={1} fontWeight="bold">
            Services
          </Typography>
          {ServiceList.map((item) => (
            <Typography key={item} fontSize={13}>
              {item}
            </Typography>
          ))}
        </Grid>
        <Grid item sm={3} lg={2} md={3} xs={6} gap={1}>
          <Typography marginBottom={1} fontWeight="bold">
            Help
          </Typography>
          {HelpList.map((item) => (
            <Typography key={item} fontSize={13}>
              {item}
            </Typography>
          ))}
        </Grid>
      </Grid>
      <Divider sx={{ width: "100%", paddingRight: 4 }} />

      <FooterForMore />
    </>
  );
};

export default Footer;
