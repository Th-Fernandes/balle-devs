import React from "react";
import { Box, Image, TextField } from "@skynexui/components";
import facebookLogo from "../../img/facebook.svg";
import linkedinLogo from "../../img/linkedin.svg";
import discordLogo from "../../img/discord.svg";
import headerLogo from "../../img/Logo.svg";
import SearchContent from "./Search";

export default function header(props) {
  return (
    <Box
      as="header"
      styleSheet={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
      }}
    >
      <Box as="ul">
        <Box as="li">
          <img src={facebookLogo.src} />
          <img style={{ margin: "0 2rem" }} src={linkedinLogo.src} />
          <img src={discordLogo.src} />
        </Box>
      </Box>

      {/* logo */}
      <Image src={headerLogo.src} />
      {/* search content */}      
      {props.withSearch && <SearchContent addDev={props.addDev} buttonsType={props.buttonsType} />}
    </Box>
  );
}
