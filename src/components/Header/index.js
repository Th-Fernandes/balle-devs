import React from "react";
import { Box, Image } from "@skynexui/components";
import facebookLogo from "../../img/facebook.svg";
import linkedinLogo from "../../img/linkedin.svg";
import discordLogo from "../../img/discord.svg";
import headerLogo from "../../img/Logo.svg"

export default class header extends React.Component {
  render() {
    return (
      <Box
        as="header"
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",  
          maxWidth: "68.5rem",
        }}
      >
        <Box as="ul" styleSheet={{

        }}>
          <Box as="li">
              <img src={facebookLogo.src} />
              <img style={{margin: "0 2rem"}} src={linkedinLogo.src} />
              <img src={discordLogo.src} />
          </Box>
        </Box>
        {/* logo */}
        <Image src={headerLogo.src} />
      </Box>
    );
  }
}
