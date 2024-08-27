import Image from "next/image";
import React from "react";
import LogoMain from "@/images/LogoMain.png";
import { Flex } from "@chakra-ui/react";

const Landing = () => {
  return (
    <Flex alignItems={"center"} height={"100vh"}>
      <Image
        alt="logo"
        src={LogoMain}
        style={{ width: "15rem", height: "auto" }}
      />
    </Flex>
  );
};

export default Landing;
