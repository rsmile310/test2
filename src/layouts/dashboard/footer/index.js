import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { IconButtonAnimate } from "../../../components/animate";
import Logo from "../../../components/Logo";
import Socials from "./Socials";
import useLocales from "../../../hooks/useLocales";
import Iconify from "../../../components/Iconify";

const FooterStyle = styled("footer")(() => ({
  background: "#000116",
  padding: "24px",
  color: "#838990",
  borderTop: "2px solid #53536D",
  "&>div": {
    maxWidth: "1440px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "0",
  },
}));

export default function Footer() {
  const { translate } = useLocales();

  return (
    <FooterStyle>
      <Stack
        direction={{ xs: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Logo type={"one"} />
        <Box textAlign="center" sx={{ order: { xs: "3", lg: "1" } }}>
          <Typography variant="body2">{translate("FOOTER_TEXT1")}</Typography>
        </Box>
        <Stack direction="row" sx={{ mb: { xs: "8px", lg: "0" }, order: 2 }}>
          {Socials.map((e, index) => (
            <IconButtonAnimate key={index} href={e.url} target="_blank">
              <Iconify
                icon={e.img}
                width={20}
                height={20}
                sx={{ color: "#00f6ff" }}
              />
            </IconButtonAnimate>
          ))}
        </Stack>
      </Stack>
      {/* <Stack
        mx={3}
        direction={{ xs: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        
        
      </Stack> */}
    </FooterStyle>
  );
}
