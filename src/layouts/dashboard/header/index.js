import { Box } from "@mui/material";
import Logo from "src/components/Logo";
const ResponsiveAppBar = () => {
  return (
    <Box
      position="absolute"
      sx={{
        left: "0",
        top: "0",
        padding: "36px",
        backgroundColor: "transparent",
      }}
    >
      <Logo type="full" />
      {/* <Stack direction="row" spacing={1}>
            <LanguagePopover />
          </Stack> */}
    </Box>
  );
};
export default ResponsiveAppBar;
