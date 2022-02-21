import { Box } from "@skynexui/components";
import ButtonActions from "../../ButtonActions";
import pallet  from "../../../colors/pallet.json"

export default function defaultDelete() {
    return (
        <Box
            styleSheet={{
                textAlign: 'center',
                backgroundColor: pallet.neutral.black,
                width: 'min(90%, 46.3rem)',
                padding: '3.4rem 4.5rem 1.6rem'
            }}    
        >
            <article>
                <h2 style={{font: "3.5rem 'Maven Pro', sans-serif", fontWeight: 500}}>Deletar desenvolvedor</h2>

                <p style={{font: "2.5rem 'Maven Pro', sans-serif", fontWeight: 400, marginTop: '2rem'}}>
                Tem certeza que deseja deletar este desenvolvedor?
                </p>
            </article>

            <ButtonActions type="submit" />
        </Box>
    )
}