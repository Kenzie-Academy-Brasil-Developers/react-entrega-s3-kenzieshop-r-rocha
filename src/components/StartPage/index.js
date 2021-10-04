import { Button, Box } from "@material-ui/core";
import TakeAwayCoffee from "../../images/takeaway-coffee.png";
import { useHistory } from "react-router-dom";

const StartPage = () => {
  const history = useHistory();

  return (
    <>
      <Box component="div" sx={{ width: "auto" }} mt={7}>
        <img src={TakeAwayCoffee} alt="TakeAway Coffee" />
      </Box>
      <Box sx={{ width: "100%" }}>
        <Button variant="contained" onClick={() => history.push("/login")}>
          LOGIN
        </Button>
      </Box>
      <Box mt={3}>
        <Button variant="text" onClick={() => history.push("/register")}>
          CADASTRE-SE
        </Button>
      </Box>
    </>
  );
};

export default StartPage;
