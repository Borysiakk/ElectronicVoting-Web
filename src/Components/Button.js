import * as React from "react";
import "./Button.css"

export const Button = ({text,handleClicked}) =>
{
    const [click,setClick] = React.useState(false)
    const handleClickedButton = (e) =>
    {
        setClick(!click)
        handleClicked(e);
    }

    return <div className={"button"}>
        <a type={"button"} onClick={handleClickedButton} ><span>{text}</span></a>
    </div>
}