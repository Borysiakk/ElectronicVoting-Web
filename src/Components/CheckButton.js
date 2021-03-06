import React, {useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckSquare, faSquare} from "@fortawesome/free-regular-svg-icons";
import "./CheckButton.css"


export const CheckButton = ({id,state = false,text,handleClicked}) =>
{
    const [check, setCheck] = React.useState(state)
    const [idButton,setIdButton] = React.useState(id)

    useEffect(() =>
    {
        setCheck(state)
    },[state])

    const handleClickedButton = (e) =>
    {
        handleClicked(e)
        setCheck(!check)
    }

    return <div className={"checkButton"}>
        <a id={idButton} name={text} type={"button"} onClick={handleClickedButton} >
            {
            check
            ?<FontAwesomeIcon icon={faCheckSquare} size="2x"/>
            :<FontAwesomeIcon icon={faSquare} size="2x"/>
            }
            <span>{text}</span>
        </a>
    </div>
}