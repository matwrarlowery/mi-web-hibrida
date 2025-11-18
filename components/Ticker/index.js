import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

function Ticker() {
  const tickerItems = [
    "DIGITAL SOLUTIONS",
    "•",
    "E-COMMERCE PLATFORMS", 
    "•",
    "BRAND STRATEGY",
    "•",
    "MOBILE APPS",
    "•",
    "WEB DEVELOPMENT",
    "•"
  ];

  return (
    <MDBox
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "#0a0a0a",
        color: "white",
        py: 1,
        overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.1)"
      }}
    >
      <MDBox
        sx={{
          display: "flex",
          gap: "40px",
          animation: "scroll 20s linear infinite",
          "@keyframes scroll": {
            "0%": { transform: "translateX(100%)" },
            "100%": { transform: "translateX(-100%)" }
          }
        }}
      >
        {tickerItems.map((item, index) => (
          <MDTypography
            key={index}
            variant="caption"
            sx={{
              fontWeight: "bold",
              letterSpacing: "2px",
              fontSize: "0.75rem",
              opacity: item === "•" ? 0.5 : 1,
              whiteSpace: "nowrap"
            }}
          >
            {item}
          </MDTypography>
        ))}
      </MDBox>
    </MDBox>
  );
}

export default Ticker;