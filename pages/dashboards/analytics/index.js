import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 PRO React components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDButton from "/components/MDButton";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "/examples/Navbars/DashboardNavbar";
import Footer from "/examples/Footer";
import ComplexStatisticsCard from "/examples/Cards/StatisticsCards/ComplexStatisticsCard";
import BookingCard from "/examples/Cards/BookingCard";
import Ticker from "/components/Ticker";

// Images
import product1 from "/assets/images/products/product-1-min.jpg";
import product2 from "/assets/images/products/product-2-min.jpg";
import product3 from "/assets/images/products/product-3-min.jpg";

function Analytics() {
  const productActions = (
    <MDButton 
      variant="contained" 
      color="dark" 
      size="small"
      sx={{ 
        fontWeight: "bold",
        letterSpacing: "1px",
        px: 3
      }}
    >
      GET THIS DROP
    </MDButton>
  );

  return (
    <>
      <Ticker />
      <DashboardLayout>
        <DashboardNavbar />
        <MDBox py={3} sx={{ mt: 5 }}>
          <Card sx={{ 
            mb: 4, 
            p: 4, 
            background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
            position: "relative",
            overflow: "hidden"
          }}>
            <MDBox textAlign="center" py={6}>
              <MDTypography 
                variant="h1" 
                color="white" 
                fontWeight="bold" 
                mb={2}
                sx={{ 
                  fontSize: { xs: "2.5rem", md: "4rem" },
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: "2px"
                }}
              >
                WE DON'T SELL PRODUCTS
              </MDTypography>
              <MDTypography 
                variant="h1" 
                color="white" 
                fontWeight="bold" 
                mb={3}
                sx={{ 
                  fontSize: { xs: "2.5rem", md: "4rem" },
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: "2px"
                }}
              >
                WE BUILD EMPIRES
              </MDTypography>
              <MDTypography variant="h6" color="white" opacity={0.8} mb={4}>
                Premium digital products for brands that refuse to be boring
              </MDTypography>
              <MDBox display="flex" gap={2} justifyContent="center" flexWrap="wrap">
                <MDButton 
                  variant="contained" 
                  color="white" 
                  size="large"
                  sx={{ 
                    px: 4, 
                    py: 1.5,
                    fontWeight: "bold",
                    letterSpacing: "1px"
                  }}
                >
                  SHOP NOW
                </MDButton>
                <MDButton 
                  variant="outlined" 
                  color="white" 
                  size="large"
                  sx={{ 
                    px: 4, 
                    py: 1.5,
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    borderColor: "white",
                    color: "white"
                  }}
                >
                  VIEW DROPS
                </MDButton>
              </MDBox>
            </MDBox>
          </Card>

          <MDBox mb={4}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={3}>
                <ComplexStatisticsCard
                  color="dark"
                  icon="trending_up"
                  title="EMPIRE REVENUE"
                  count="€150K+"
                  percentage={{
                    color: "success",
                    amount: "+150%",
                    label: "projects shipped",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <ComplexStatisticsCard
                  color="info"
                  icon="rocket_launch"
                  title="ACTIVE DROPS"
                  count="4"
                  percentage={{
                    color: "warning",
                    amount: "LIMITED",
                    label: "slots available",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <ComplexStatisticsCard
                  color="success"
                  icon="groups"
                  title="EMPIRE BUILDERS"
                  count="50+"
                  percentage={{
                    color: "info",
                    amount: "GROWING",
                    label: "community strong",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <ComplexStatisticsCard
                  color="primary"
                  icon="military_tech"
                  title="ELITE STATUS"
                  count="PREMIUM"
                  percentage={{
                    color: "success",
                    amount: "100%",
                    label: "quality guaranteed",
                  }}
                />
              </Grid>
            </Grid>
          </MDBox>

          <MDBox mt={4}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={4}>
                <BookingCard
                  image={product1}
                  title="EMPIRE BUILDER PRO"
                  description="Complete digital empire toolkit with premium templates, automation scripts, and exclusive community access."
                  price="€2,999"
                  location="Digital Product"
                  action={productActions}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <BookingCard
                  image={product2}
                  title="BRAND DOMINATION KIT"
                  description="Everything you need to build a commanding brand presence that converts visitors into loyal customers."
                  price="€1,499"
                  location="Brand Package"
                  action={productActions}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <BookingCard
                  image={product3}
                  title="ELITE MENTORSHIP"
                  description="1-on-1 guidance from industry leaders who've built million-dollar digital empires from scratch."
                  price="€4,999"
                  location="Exclusive Access"
                  action={productActions}
                />
              </Grid>
            </Grid>
          </MDBox>
        </MDBox>
        <Footer />
      </DashboardLayout>
    </>
  );
}

export default Analytics;