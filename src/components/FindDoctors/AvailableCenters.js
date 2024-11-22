import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import topDentistInfoImg from "../../Assets/sensodyne_dweb.png.png";
import verifiedImg from "../../Assets/verified.1f87346e730e 1.png";
import { FindCentersContext } from "./FindCentersContext";
import centerImg from "../../Assets/center.png";
import thumbIcon from "../../Assets/thumb.png";

const AvailableCenters = () => {
  const { doctorsData, selectedState } = useContext(FindCentersContext);
  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        padding: { xs: 2, sm: 4 },
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          textAlign: "left",
        }}
      >
        <Typography variant="h3" sx={{ fontSize: "24px" }}>
          {doctorsData?.length} medical centers available in {selectedState}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "7px" }}>
          <img src={verifiedImg} alt="verify" />
          <Typography variant="p" sx={{ color: "#787887" }}>
            Book appointments with minimum wait-time & verified doctor details
          </Typography>
        </Box>
        <Box>
        <Grid container spacing={2} sx={{display:"flex", flexDirection:"column"}}>
          {doctorsData.map((ele, index) => (
            <Grid item key={index} sx={{display:"flex"}}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: 2,
                  boxShadow: 2,
                  borderRadius: 2,
                  "&:hover": { boxShadow: 4 },
                }}
              >
                <CardMedia
                  component="img"
                  src={centerImg}
                  alt="center image"
                  sx={{ width: 120, height: 130 }}
                />
                <CardContent sx={{display:"flex",flexDirection:"column", textAlign: "Left", padding: "10px" }}>
                  <Typography variant="body1" sx={{ fontWeight: 600, color:"#14BEF0", marginBottom:"5px" }}>
                    {ele["Hospital Name"]}
                  </Typography>
                  <Typography variant="p" style={{fontWeight:"bold"}}>
                    {ele.Address}
                  </Typography>
                  <Typography variant="p">
                  Smilessence Center for Advanced Dentistry + 1
                  </Typography>
                  <Typography variant="p" sx={{marginBottom:"5px"}}>
                  more
                  </Typography>
                  <Typography variant="p" sx={{display:"flex", gap:"7px"}}>
                    <span style={{color:"#02A401"}}>FREE</span>
                    <span style={{color:"#787887"}}><del>₹500</del></span>
                    <span style={{color:"#414146"}}>Consultation fee at clinic</span>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        </Box>
      </Box>

      {/* static image section */}
      <Box>
        <img src={topDentistInfoImg} />
      </Box>
    </Box>
  );
};
export default AvailableCenters;
