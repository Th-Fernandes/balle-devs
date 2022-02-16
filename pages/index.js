import React from 'react';
import mainBg from "../src/img/main-bg.svg";

export default class HomePage extends React.Component{
    render(){
        console.log(mainBg)
        return(
            <section style={{height: "100vh", backgroundImage: `url(${mainBg.src})`, backgroundRepeat: 'no-repeat' }}>
                hello world
            </section>
        )
    }
}