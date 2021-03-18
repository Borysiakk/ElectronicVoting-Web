import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckSquare, faSquare} from "@fortawesome/free-regular-svg-icons";
import "./CheckButton.css"


export const CheckButton = ({text}) =>
{
    const [check, setCheck] = React.useState(false)
    const handleClickedButton = (e) =>
    {
        setCheck(!check)
    }

    return <div className={"checkButton"}>
        <a type={"button"} onClick={handleClickedButton} >
            {
                check
                    ?<FontAwesomeIcon icon={faCheckSquare} size="2x"/>
                    :<FontAwesomeIcon icon={faSquare} size="2x"/>
            }
            <span>{text}</span>
        </a>
    </div>
}