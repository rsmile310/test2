import { m } from "framer-motion";
import OztgCard from "./oztgcoin/OztgCard";
import { MotionViewport, varFlip } from "../animate";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Tilt from "react-vanilla-tilt";

const BoxStyle = styled(Box)({
  backgroundColor: "#000116",
  height: "360px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  borderBottom: "1px solid #0F0064",
  overflow: "hidden",
  "& .price-box": {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  "& .img-box": {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
  },
  "& .left-img-box": {
    backgroundImage: "url(/assets/images/rock.svg)",
    backgroundPosition: "left",
    transform: "rotateY(180deg)",
  },
  "& .right-img-box": {
    backgroundImage: "url(/assets/images/rock.svg)",
    backgroundPosition: "left",
  },
  "& .price-box>div>div": {
    width: "fit-content !important",
    background: "none !important",
    boxShadow: "none !important",
  },
});

const Price = () => (
  <MotionViewport>
    <BoxStyle id="price">
      <Box className="left-img-box img-box" sx={{ width: "30%" }}></Box>
      <Box className="price-box">
        <m.div variants={varFlip().inY}>
          <Tilt>
            <OztgCard />
          </Tilt>
        </m.div>
      </Box>
      <Box className="right-img-box img-box" sx={{ width: "30%" }}></Box>
    </BoxStyle>
  </MotionViewport>
);

export default Price;
