import { Box } from "@skynexui/components";
import pallet from "../../colors/pallet.json";
import DefaultDelete from "./DefaultDelete";
import DefaultDevForm from "./DefaultDevForm";

export default function DefaultModal(props) {
console.log(props.clickEvent)

  return (
    <>
      {props.type == "form" && (
        <Box
          as="section"
          styleSheet={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            inset: 0,
            backgroundColor: pallet.neutral["pseudo-dark-gray"],
            zIndex: 999,
          }}
        >
          {props.type == "form" && (
            <DefaultDevForm
              title="Adicionar desenvolvedor"
              cancelSubmit={props.cancelSubmit}
              type={props.buttonsType.changeModal}
              selectedCard={props.selectedCard}
            />
          )}

          {props.type == "cancel" && <DefaultDelete />}
        </Box>
      )}

      {props.type == "delete" && (
        <Box
          as="section"
          styleSheet={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            inset: 0,
            backgroundColor: pallet.neutral["pseudo-dark-gray"],
            zIndex: 999,
          }}
        >
            <DefaultDelete cancelDelete={props.cancelSubmit} clickEvent={props.clickEvent} />
        </Box>
      )}
    </>
  );
}
