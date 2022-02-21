import { Box, TextField } from "@skynexui/components";
import DefaultButton from "../../DefaultButton"
import pallet from "../../../colors/pallet.json"

export default function SearchContent(props) {
    return (
        <Box
          styleSheet={{
            display: "flex",
            flexWrap: "wrap",
            alignItens: "center",
            justifyContent: "flex-end",
            width: "28.4rem",
            alignContent: "flex-start"
          }}
        >
          <TextField
            placeholder="Buscar"
            rounded="sm"
            styleSheet={{
              width: "28.4rem",
            }}
          />

          <DefaultButton
            onClick={() => {
              props.addDev(true)
            }}
            width="20rem"
            height= "4rem"
            marginTop = "2rem" 
            color={pallet.primary.green}
            textContent="Adicionar Desenvolvedor"
          />
        </Box>
    )
}