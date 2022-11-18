import { m } from "framer-motion";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Typography, Stack, Grid } from "@mui/material";
// components
import { MotionViewport, varFade } from "../animate";
import useLocales from "../../hooks/useLocales";
import EcosystemConfig from "./HomeConfig";
import { useState } from "react";
import Iconify from "../Iconify";
import Flash from "./Flash";
import Tilt from "react-vanilla-tilt";

const BoxStyle = styled(Box)({
  background: "linear-gradient(180deg, #000116 0.5%, #12006f 130%)",
  padding: "100px 24px",
  "&>div": {
    width: "1280px",
    maxWidth: "100%",
    margin: "0 auto",
  },
  "& .grid-box>div>div": {
    width: "100% !important",
    padding: "0 !important",
    background: "transparent !important",
    height: "100% !important",
  },
});
const ButtonStyle = styled("button")({
  fontSize: "16px",
  color: "#fff",
  marginTop: "auto",
  transition: "color .3s",
  "&:hover": {
    color: "#B158E2",
  },
});
const Card = styled(Box)({
  position: "relative",
  textAlign: "center",
  minHeight: "300px",
  height: "100%",
  overflowY: "hidden",
  // borderRadius: "12px",
  // boxShadow: "#0000e6 0px 0px 10px",
  // boxShadow: "0 1px 2px 0 rgb(80 87 91 / 24%)",
  "& a": {
    color: "#838990",
    transition: "color .3s",
  },
  "& a:hover": {
    color: "#fff",
  },
  "&>div": {
    padding: "50px 16px",
    background: "linear-gradient(#161033 5%, #16163d 146.21%)",
    // background: rgba(255, 255, 255, .2),
    // borderRadius: "12px",
    backfaceVisibility: "hidden",
    transition: "all 1s ease",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  "& .back": {
    position: "absolute",
    left: "0",
    top: "0",
    right: "0",
    bottom: "0",
    padding: "20px 20px 40px",
    transform: "translateY(calc(100% - 4px))",
  },
  "& .back>div": {
    width: "100%",
    height: "100%",
    overflowY: "auto",
  },
  "& .front>div": {
    position: "relative",
    width: "80px",
    height: "80px",
    margin: "0 auto",
  },
  "& .front>div>div": {
    content: '""',
    position: "absolute",
    right: "0",
    top: "0",
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    opacity: "0.8",
    filter: "blur(6px)",
    animation: "animateBubble 3s linear infinite alternate",
  },
  ".back.active": {
    transform: "translateY(0)",
  },
  "& img": {
    margin: "0 auto",
  },
});

export default function Ecosystem() {
  const { translate } = useLocales();
  const defaultCardState = [...Array(9)];
  const [cardState, setCardState] = useState(defaultCardState);

  const showCardDetailHander = (e) => {
    let temp = [...defaultCardState];
    temp[e] = true;
    setCardState(temp);
  };
  const showCardDetailCloseHander = (e) => {
    let temp = [...defaultCardState];
    temp[e] = false;
    setCardState(temp);
  };
  return (
    <BoxStyle id="ecosystem">
      <Box>
        <MotionViewport>
          <m.div variants={varFade().inUp}>
            <Stack direction="row" justifyContent="center">
              <Typography variant="h2" textAlign="center" mb={4}>
                {translate("FLASH GROUP ECOSYSTEM")}
              </Typography>
            </Stack>
          </m.div>
          <m.div variants={varFade().inUp}>
            <Typography
              variant="body1"
              textAlign="center"
              sx={{ fontSize: "16px" }}
              dangerouslySetInnerHTML={{ __html: translate("ecosystem_text1") }}
            ></Typography>
          </m.div>
        </MotionViewport>
        <MotionViewport>
          <Grid container spacing={3} sx={{ mt: 5, width: "100%" }}>
            {EcosystemConfig.map((data, index) => (
              <Grid key={index} item xs={12} sm={6} md={4} className="grid-box">
                <m.div variants={varFade().inUp} style={{ height: "100%" }}>
                  <Tilt>
                    <Card>
                      <Box className="front" position="relative">
                        <Box>
                          <img src={data.logo} alt="logo" />
                          <Box sx={{ backgroundColor: `${data.color}` }} />
                        </Box>
                        <Typography variant="h4" mt={2} mb={1}>
                          {data.name}
                        </Typography>
                        {data.url && (
                          <Box
                            component="a"
                            color="white"
                            href={data.fullUrl}
                            target="_blank"
                            display="block"
                          >
                            {data.url}
                          </Box>
                        )}

                        <ButtonStyle
                          onClick={() => showCardDetailHander(index)}
                        >
                          Read more
                        </ButtonStyle>
                        <Iconify icon={"ep:arrow-up"} width={24} height={24} />
                      </Box>
                      <Box
                        className={cardState[index] ? "back active" : "back"}
                      >
                        <Box p={1}>
                          <Box textAlign="left">
                            <ButtonStyle
                              sx={{
                                position: "absolute",
                                bottom: "7px",
                                left: "50%",
                                transform: "translateX(-50%)",
                              }}
                              onClick={() => showCardDetailCloseHander(index)}
                            >
                              <Iconify
                                icon={"eva:arrowhead-down-fill"}
                                width={24}
                                height={24}
                              />
                            </ButtonStyle>
                            <Typography
                              variant="h4"
                              color="white"
                              textAlign="center"
                              mb={2}
                            >
                              {data.name}
                            </Typography>
                            <Typography
                              variant="body2"
                              fontSize="16px"
                              color="#AB98AE"
                              dangerouslySetInnerHTML={{
                                __html: translate(data.desc),
                              }}
                            />
                          </Box>
                        </Box>
                      </Box>
                    </Card>
                  </Tilt>
                </m.div>
              </Grid>
            ))}
          </Grid>
        </MotionViewport>
        <MotionViewport>
          <Flash />
        </MotionViewport>
      </Box>
    </BoxStyle>
  );
}
