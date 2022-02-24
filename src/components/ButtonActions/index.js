import { Box, Button } from "@skynexui/components";
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
            <Button
                colorVariant='light'
                rounded="full"
                label="Cancelar"
                styleSheet = {{
                    width: "12.5rem",
                    height: "4rem",
                }}
                onClick={() => {
                props.cancelSubmit(false);
                }}
            />
            <Button            
                label='Adicionar'
                rounded="full"
                styleSheet = {{
                    width: "12.5rem",
                    height: "4rem",
                    backgroundColor: pallet.primary.green,
                }}
                type="submit"
                onClick={() => {
                    props.supabaseAction('inserta')
                }}
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
            <Button
                colorVariant='light'
                rounded="full"
                label="Cancelar"
                styleSheet = {{
                    width: "12.5rem",
                    height: "4rem",
                }}
                onClick={() => {
                props.cancelSubmit(false);
                }}
            />

            <Button            
                label='Adicionar'
                rounded="full"
                styleSheet = {{
                    width: "12.5rem",
                    height: "4rem",
                    backgroundColor: pallet.primary.yellow,
                }}
                type="submit"
                onClick={() => {
                    props.supabaseAction('update')
                }}
            />
        </Box>}

    </>
  );
}
