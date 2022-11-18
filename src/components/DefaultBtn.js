import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import useLocales from '../hooks/useLocales';
import Iconify from './Iconify';

const ButtonStyle = styled(Button)({
  background: "linear-gradient(90deg, #00FBCE 0%, #0066FF 100%)",
  borderRadius: "100px",
  color: "#fff",
  fontSize: "20px",
  padding: "8px 24px",
  transition: "all ease 400ms",
  "&:hover": {
    color: "#000",
    background: "linear-gradient(90deg, #fff 100%, #fff 0%)",
  },
});;

export default function DefautlBtn({text, icon, url}) {
  const { translate } = useLocales();
  return (
    <ButtonStyle
      href={url}
      variant="extended"
      target="_blank"
    >
      <Iconify icon={icon} width={26} height={26} mr={1} />
      {translate(text)}
    </ButtonStyle>
  );
}
