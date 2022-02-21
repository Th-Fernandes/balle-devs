import React from "react";
import mainBg from "../src/img/main-bg.svg";
import { Box, Text } from "@skynexui/components";
import Header from "../src/components/Header";
import pallet from "../src/colors/pallet.json";
import DefaultButton from "../src/components/DefaultButton";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter()

  const handleRouter = () => {
      router.push('./devs')
  }

  return (
    <Box
      as="section"
      styleSheet={{
        height: "100vh",
        backgroundImage: `url(${mainBg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        padding: "6.2rem  12rem 0 12rem",
      }}
    >
      <Header withSearch={false} />

      <Box
        as="main"
        styleSheet={{
          height: "53.6rem",
          paddingTop: "16.8rem",
        }}
      >
        <Box
          as="article"
          styleSheet={{
            maxWidth: "55.9rem",
          }}
        >
          <Text
            as="h1"
            styleSheet={{
              maxWidth: "50rem",
              fontFamily: "font-family: 'Overpass', sans-serif;",
              fontSize: "4.8rem",
            }}
          >
            O maior banco de devs do Brasil
          </Text>

          <Text
            as="p"
            styleSheet={{
              fontSize: "2.4rem",
              color: pallet.neutral["dark-gray"],
              marginTop: "1.6rem",
            }}
          >
            Nao importa se front ou back end, fazer networking é muito
            importante. Faça parte da maior comunidade de desenvolvedores
            brasileiros.
          </Text>
        </Box>

        <DefaultButton
          onClick={handleRouter}
          textContent="Entre Agora"
          width="24.1rem"
          height="5.8rem"
          marginTop="6.9rem"
          color={pallet.primary.green}
        />
      </Box>
    </Box>
  );
}
