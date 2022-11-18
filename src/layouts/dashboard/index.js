import { Outlet } from "react-router-dom";
// @mui
import { Box } from "@mui/material";
// config
import Header from "./header";
import Footer from "./footer";
// ----------------------------------------------------------------------


export default function DashboardLayout() {
  return (
    <Box>
      <Header />
      <Box component="main" width="100%">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
