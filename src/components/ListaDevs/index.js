import { Box, Button } from "@skynexui/components"
import CardDevs from "./CardDevs"
import returnIcon from "../../img/return-icon.svg"
import advanceIcon from "../../img/advance-icon.svg"

export default function CardList() {
    return(
        <Box 
            as="ul"
            styleSheet={{
                display: "flex",
                justifyContent: "space-between",
                maxWidth: '144rem',
                margin: "13.5rem auto 0"
            }}
        >

            <img src={returnIcon.src} />
            
            {
                Array.of(1,2,3).map(() => {
                    return <CardDevs />
                })
            }


            <img src={advanceIcon.src} />
            
        </Box>
    )
}