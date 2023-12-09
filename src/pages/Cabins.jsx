import getCabins from "../services/apiCabins";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { useEffect } from "react";
function Cabins() {
  useEffect(function () {
    const cabinsData = getCabins().then((data) => console.log(data));
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>

      <p>TEST</p>
      {/* <img src= alt="" /> */}
    </Row>
  );
}

export default Cabins;
