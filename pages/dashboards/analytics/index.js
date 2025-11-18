/**
=========================================================
* NextJS Material Dashboard 2 PRO - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard-pro
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDButton from "/components/MDButton";

// NextJS Material Dashboard 2 PRO examples
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
  // Action buttons for products - MATWRAR Style
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
        {/* Hero Section - MATWRAR Style */}
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

        {/* Statistics */}
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
                  color: "success",
                  amount: "0",
                  label: "boring clients",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <ComplexStatisticsCard
                color="warning"
                icon="flash_on"
                title="CONVERSIONS"
                count="2M+"
                percentage={{
                  color: "success",
                  amount: "INSANE",
                  label: "performance",
                }}
              />
            </Grid>
          </Grid>
        </MDBox>

        {/* Featured Products - DROPS Style */}
        <MDBox mb={3}>
          <MDTypography 
            variant="h3" 
            fontWeight="bold" 
            mb={3}
            sx={{ 
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "2px",
              color: "#0a0a0a"
            }}
          >
            LATEST DROPS
          </MDTypography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <BookingCard
                image={product1}
                title="E-COMMERCE REVOLUTION"
                description="Transform your retail business into a digital powerhouse. Full-stack e-commerce solution with custom design, payment processing, and analytics."
                price="€5,999"
                location="3 SLOTS LEFT"
                action={productActions}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <BookingCard
                image={product2}
                title="BRAND IDENTITY KIT"
                description="Build a memorable brand from scratch. Complete visual identity system including logo, guidelines, and marketing materials ready to launch."
                price="€2,499"
                location="ACTIVE"
                action={productActions}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <BookingCard
                image={product3}
                title="MOBILE APP STARTER"
                description="Launch your mobile presence fast. Cross-platform app with native performance, ready for iOS and Android app stores."
                price="€7,999"
                location="ACTIVE"
                action={productActions}
              />
            </Grid>
          </Grid>
        </MDBox>

        {/* Categories - Arsenal Style */}
        <Card sx={{ p: 4, background: "#0a0a0a", color: "white" }}>
          <MDTypography 
            variant="h3" 
            fontWeight="bold" 
            mb={2}
            sx={{ 
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "2px",
              color: "white",
              textAlign: "center"
            }}
          >
            OUR ARSENAL
          </MDTypography>
          <MDTypography 
            variant="body1" 
            mb={4} 
            sx={{ textAlign: "center", opacity: 0.8 }}
          >
            Products we craft to perfection
          </MDTypography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <MDBox textAlign="center" p={3} sx={{ 
                cursor: "pointer", 
                "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                transition: "all 0.3s ease"
              }}>
                <Icon fontSize="large" sx={{ color: "#667eea", mb: 1 }}>web</Icon>
                <MDTypography variant="h6" color="white" fontWeight="bold">FRONTEND</MDTypography>
                <MDTypography variant="caption" color="white" opacity={0.7}>React • Next.js • Vue</MDTypography>
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <MDBox textAlign="center" p={3} sx={{ 
                cursor: "pointer", 
                "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                transition: "all 0.3s ease"
              }}>
                <Icon fontSize="large" sx={{ color: "#764ba2", mb: 1 }}>dns</Icon>
                <MDTypography variant="h6" color="white" fontWeight="bold">BACKEND</MDTypography>
                <MDTypography variant="caption" color="white" opacity={0.7}>Node.js • Python • GraphQL</MDTypography>
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <MDBox textAlign="center" p={3} sx={{ 
                cursor: "pointer", 
                "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                transition: "all 0.3s ease"
              }}>
                <Icon fontSize="large" sx={{ color: "#f093fb", mb: 1 }}>cloud</Icon>
                <MDTypography variant="h6" color="white" fontWeight="bold">CLOUD</MDTypography>
                <MDTypography variant="caption" color="white" opacity={0.7}>AWS • Docker • Kubernetes</MDTypography>
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <MDBox textAlign="center" p={3} sx={{ 
                cursor: "pointer", 
                "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                transition: "all 0.3s ease"
              }}>
                <Icon fontSize="large" sx={{ color: "#f093fb", mb: 1 }}>phone_android</Icon>
                <MDTypography variant="h6" color="white" fontWeight="bold">MOBILE</MDTypography>
                <MDTypography variant="caption" color="white" opacity={0.7}>React Native • Flutter</MDTypography>
              </MDBox>
            </Grid>
          </Grid>
        </Card>
      </MDBox>
      <Footer />
    </DashboardLayout>
    </>
  );
}

export default Analytics;
