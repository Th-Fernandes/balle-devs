import { Box } from '@skynexui/components';
import React from 'react';
import Header from "../src/components/Header"

export default function DevListPage(props) {
    return(
        <Box
            as="section"
            styleSheet={{
                height: "100vh",
                padding: "6.2rem  12rem 0 12rem",
            }}
        >
            <Header withSearch={true}/>
            {props.withSearch && <SearchContent />}
        </Box>
    )
}