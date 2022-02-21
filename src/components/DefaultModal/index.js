import { Box } from "@skynexui/components";
import pallet from "../../colors/pallet.json";
import DefaultDelete from "./DefaultDelete";
import DefaultDevForm from "./DefaultDevForm"

export default function DefaultModal(props) {
    return(
        <Box
            as="section"
            styleSheet={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'fixed',
                inset: 0,
                backgroundColor: pallet.neutral["pseudo-dark-gray"],
                zIndex: 999
            }}
        >
            {props.type == "form" && 
            <DefaultDevForm  title="Adicionar desenvolvedor" cancelSubmit={props.cancelSubmit} type={props.buttonsType.changeModal}/>
            }

            {props.type == "cancel" && <DefaultDelete  />}
            

        </Box>
    )
}