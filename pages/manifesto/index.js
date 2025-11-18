import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "/examples/Navbars/DashboardNavbar";
import Footer from "/examples/Footer";
import Ticker from "/components/Ticker";

function Manifesto() {
  return (
    <>
      <Ticker />
      <DashboardLayout>
        <DashboardNavbar />
        <MDBox py={3} sx={{ mt: 5 }}>
          <Card sx={{ 
            mb: 4, 
            p: 6, 
            background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
            textAlign: "center"
          }}>
            <MDTypography 
              variant="h2" 
              color="white" 
              fontWeight="bold" 
              mb={4}
              sx={{ 
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "3px"
              }}
            >
              THE MANIFESTO
            </MDTypography>
            
            <MDTypography 
              variant="h3" 
              color="white" 
              mb={4}
              sx={{ 
                fontStyle: "italic",
                opacity: 0.9,
                fontSize: { xs: "1.5rem", md: "2.5rem" }
              }}
            >
              "We code like we don't give a f*ck. Because we do."
            </MDTypography>

            <MDBox maxWidth="800px" mx="auto">
              <MDTypography variant="h5" color="white" mb={3} opacity={0.8}>
                No corporate BS. No boring templates. No "let's circle back."
              </MDTypography>
              
              <MDTypography variant="h6" color="white" mb={3} opacity={0.7}>
                We build digital experiences that make people stop scrolling. That make competitors nervous. That actually convert.
              </MDTypography>
              
              <MDTypography 
                variant="h4" 
                color="white" 
                fontWeight="bold"
                sx={{ 
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: "2px"
                }}
              >
                WE TURN BRANDS INTO MOVEMENTS.
              </MDTypography>
            </MDBox>
          </Card>

          <Grid container spacing={3} mb={4}>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 4, textAlign: "center", background: "#0a0a0a" }}>
                <MDTypography 
                  variant="h1" 
                  color="white" 
                  fontWeight="bold"
                  sx={{ 
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "4rem"
                  }}
                >
                  150+
                </MDTypography>
                <MDTypography variant="h6" color="white" opacity={0.8}>
                  PROJECTS SHIPPED
                </MDTypography>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 4, textAlign: "center", background: "#0a0a0a" }}>
                <MDTypography 
                  variant="h1" 
                  color="white" 
                  fontWeight="bold"
                  sx={{ 
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "4rem"
                  }}
                >
                  0
                </MDTypography>
                <MDTypography variant="h6" color="white" opacity={0.8}>
                  BORING CLIENTS
                </MDTypography>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
        <Footer />
      </DashboardLayout>
    </>
  );
}

export default Manifesto;