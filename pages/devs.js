import { Box } from "@skynexui/components";
import React from "react";
import Header from "../src/components/Header";
import ListaDevs from "../src/components/ListaDevs";
import DefaultModal from "../src/components/DefaultModal";

export default function DevListPage(props) {
  const [newDev, setNewDev] = React.useState(false)
  const [changeModal, setChangeModal] = React.useState()
  const [modalChildren, setModalChildren] = React.useState()

  return (
    <>
      {newDev && <DefaultModal  cancelSubmit={setNewDev} buttonsType={{setChangeModal, changeModal}}/>}

      <Box
        as="section"
        styleSheet={{
          height: "100vh",
          padding: "6.2rem  12rem 0 12rem",
        }}
      >
        <Header withSearch={true} addDev={setNewDev} buttonsType={setChangeModal} />

        {/* main content */}
        <ListaDevs buttonsType={setChangeModal} openModal={setNewDev} />
      </Box>
    </>
  );
}
