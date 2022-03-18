import React from "react";
import Logo from "./Logo";
import TelaCards from "./TelaCards";


function MenuInicio() {
    const [visible, setVisible] = React.useState(true);

    if (visible) {
        return (
            <div className="inicio">
                <Logo />
                <button onClick={()=> setVisible(false)}>Iniciar Recall!</button>
            </div>
        )
    }else{
        return(
            <>
                <TelaCards />
            </>
        )
    }
}

export default MenuInicio;