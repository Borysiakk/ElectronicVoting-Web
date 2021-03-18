import React, {useEffect} from "react";
import Loader from "react-loader-spinner";
import {ElectionsService} from "../Services/ElectionsService";
import  "./Voting.css"
import {CheckButton} from "./CheckButton";
import {Button} from "./Button";
export const Voting = () =>
{
    const [candidates,setCandidates] = React.useState();
    const [loading, setLoading] = React.useState(true)

    useEffect(() =>
    {
        ElectionsService.GetCandidates().then(candidates=>
        {
            setCandidates(candidates)
            setLoading(false)
        });
    },[])

    return <>
        {
            loading
            ? <Loader className="centered" type="Puff" color="#00BFFF" height={100} width={100}/>
            :
            <>
                <div className={"BoxVoting"}>
                    {
                        candidates.map((candidate) => <CheckButton text={candidate.name}/>)
                    }
                    <div className={"VotingButton"}>
                        <Button text={"Zagłosuj"}/>
                    </div>
                </div>

            </>
        }
    </>

}