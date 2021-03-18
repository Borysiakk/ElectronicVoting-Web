import * as React from "react";
import "./Button.css"

export const Button = ({text}) =>
{
    const [click,setClick] = React.useState(false)
    const handleClickedButton = (e) =>
    {
        setClick(!click)
    }

    return <div className={"button"}>
        <a type={"button"} ><span>{text}</span></a>
    </div>
}