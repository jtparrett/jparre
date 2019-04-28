import React from "react";
import { Link } from "react-router-dom";

import Meta from "../../atoms/Meta";
import Button from "../../atoms/Button";
import Container from "../../atoms/Container";
import Video from "../../atoms/Video";
import Spacer from "../../atoms/Spacer";

export default () => (
  <>
    <Meta>
      <title>Home</title>
    </Meta>
    <Container slim>
      <Video src="https://www.youtube.com/embed/SzJTzt2Hy74" />
    </Container>
    <Spacer>
      <Button Component={Link} to="/products">
        Shop the collection &rarr;
      </Button>
    </Spacer>
  </>
);
