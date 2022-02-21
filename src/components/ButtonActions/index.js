import { Box } from "@skynexui/components";
import DefaultButton from "../DefaultButton";
import pallet from "../../colors/pallet.json" 

export default function ButtonActions(props) {
  return (
    <>
        {props.type == "submit" && 
        <Box
            styleSheet={{
                maxWidth: "28.9rem",
                margin: "5.8rem auto 0",
                display: "flex",
                justifyContent: "space-between",
            }}
            >
            <DefaultButton
                width="12.5rem"
                height="4rem"
                color={pallet.neutral.white}
                textContent="cancelar"
                onClick={() => {
                props.cancelSubmit(false);
                }}
            />
            <DefaultButton
                width="12.5rem"
                height="4rem"
                color={pallet.primary.green}
                textContent="Adicionar"
            />
        </Box>}

        {props.type == "edit" && 
        <Box
            styleSheet={{
                maxWidth: "28.9rem",
                margin: "5.8rem auto 0",
                display: "flex",
                justifyContent: "space-between",
            }}
            >
            <DefaultButton
                width="12.5rem"
                height="4rem"
                color={pallet.neutral.white}
                textContent="cancelar"
                onClick={() => {
                props.cancelSubmit(false);
                }}
            />
            <DefaultButton
                width="12.5rem"
                height="4rem"
                color={pallet.primary.yellow}
                textContent="Adicionar"
            />
        </Box>}

    </>
  );
}
