import { m } from "framer-motion";
import useLocales from "../../hooks/useLocales";
// @mui
import { styled } from "@mui/material/styles";
// components
import { MotionViewport, varFade, varZoom } from "../animate";
import { Box, Grid, Typography } from "@mui/material";
import Iconify from "../Iconify";
// ----------------------------------------------------------------------

const BoxStyle = styled(Box)({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  background: "linear-gradient(180deg, #000116 0.5%, #12006f 130%)",
  "&>div": {
    maxWidth: "1288px",
    margin: "auto",
  },
  "& a": {
    display: "flex",
    alignItems: "center",
  },
});

// ----------------------------------------------------------------------

export default function HomeHero() {
  const { translate } = useLocales();
  return (
    <MotionViewport>
      <BoxStyle id="hero" sx={{ p: { xs: "110px 24px 48px", md: "0 24px" } }}>
        <Box>
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              alignItems="center"
              sx={{ mb: { xs: 4, md: 0 } }}
            >
              <Box>
                <m.div variants={varFade().inRight}>
                  <Typography variant="h1" mb={4}>
                    {translate("hero_title")}
                  </Typography>
                </m.div>
                <m.div variants={varFade().inRight}>
                  <Typography variant="body2" mb={4}>
                    {translate("hero_desc")}
                  </Typography>
                </m.div>
                <m.div variants={varFade().inRight}>
                  <Typography
                    component="a"
                    variant="a"
                    href="#ecosystem"
                    sx={{ color: "#00f6ff" }}
                  >
                    LEARN MORE
                    <Iconify
                      ml={1}
                      icon="bi:arrow-right"
                      width={20}
                      height={20}
                    />
                  </Typography>
                </m.div>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <m.div variants={varZoom().in}>
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      ml: { xs: "auto", md: "auto" },
                      mr: { xs: "auto", md: "0" },
                    }}
                    component="img"
                    width="430px"
                    src="/assets/images/hero_img.svg"
                  />
                </Box>
              </m.div>
            </Grid>
          </Grid>
        </Box>
      </BoxStyle>
    </MotionViewport>
  );
}
