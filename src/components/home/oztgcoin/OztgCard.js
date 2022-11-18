import { useQuery, gql } from "@apollo/client";
import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const CURRENT_STATE = gql`
  query ($search: String) {
    markets(search: $search) {
      id
      ticker {
        last
        price_change_percent
      }
    }
  }
`;
const BoxStyle = styled(Box)({
  width: "calc(100vw - 48px)",
  maxWidth: "500px",
  padding: "48px 24px",
  borderRadius: "18px",
  backgroundColor: "#00009F",
  border: "2px solid #0000E6",
  boxShadow: "#0000E6 0px 0px 15px",
  "& .positive": {
    color: "#41e041",
  },
  "& .negative": {
    color: "#e20029",
  },
});

export default function OztgCard() {
  //eslint-disable-next-line no-unused-vars
  const { data, loading, error } = useQuery(CURRENT_STATE, {
    variables: {
      search: "oztgusd",
    },
    pollInterval: 500,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const curPrice = data.markets[0].ticker.last;
  const percentChange = data.markets[0].ticker.price_change_percent;

  return (
    <BoxStyle mx="auto">
      <Stack direction="row">
        <Box
          component="img"
          width="50px"
          src="/assets/images/OZTG_OLLO.svg"
          sx={{ mr: 2 }}
        />
        <Box>
          <Typography variant="h4" color="white">
            OZTG / USD
          </Typography>
          <Typography variant="h5" color="white">
            ${curPrice}
          </Typography>
        </Box>
        <Box
          ml="auto"
          my="auto"
          className={
            percentChange.indexOf("-") > -1
              ? "percent negative"
              : "percent positive"
          }
        >
          <Typography variant="h6">{percentChange}</Typography>
        </Box>
      </Stack>
    </BoxStyle>
  );
}
