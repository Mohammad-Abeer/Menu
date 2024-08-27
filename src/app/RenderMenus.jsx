"use client";
import React from "react";
import Landing from "@/pages/Landing";
import Menu from "@/pages/Menu";
import Menu2 from "@/pages/Menu2";
import { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import customStyle from "./customStyles.module.scss";

const RenderMenus = () => {
  const [menuStyle, setMenuStyle] = useState(false); // false = first, i.e. 0 and true = second, i.e. 1
  return (
    <Box width={["90%"]} margin={"auto"}>
      <div className={customStyle.landing}>
        <Landing />
      </div>

      {/* 4th button */}
      <section className={customStyle.buttons}>
        <Button
          id={customStyle.buttonsId}
          className={customStyle.center}
          onClick={() => setMenuStyle(!menuStyle)}
        >
          Switch Menu Style
        </Button>
      </section>

      {/* ------------------------------- */}
      {!menuStyle ? <Menu /> : <Menu2 />}
    </Box>
  );
};

export default RenderMenus;
