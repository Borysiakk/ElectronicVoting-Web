import React, {useEffect} from "react";
import Loader from "react-loader-spinner";
import {ElectionsService} from "../Services/ElectionsService";
import  "./Voting.css"
import {CheckButton} from "./CheckButton";
import {Button} from "./Button";
import Paillier from "../Paillier-Js/Paillier";

export const Voting = () =>
{
    const [voice,setVoice] = React.useState()
    const [candidates,setCandidates] = React.useState()
    const [loading, setLoading] = React.useState(true)
    const [candidatesCheck,setCandidatesCheck] = React.useState()


    useEffect(() =>
    {
        if(loading)
        ElectionsService.GetCandidates().then(data=>
        {
            setCandidates(data)
            setCandidatesCheck(data.map((candidate,index)=> (<CheckButton state={false} id={index} text={candidate.name} handleClicked={handleSelectCandidate} />)))
            setLoading(false)
        })
    },[candidates,candidatesCheck])


    const handleSelectCandidate = (e) =>
    {
        setCandidatesCheck(candidates.map((candidate,index)=>
        {
            if(index === Number(e.currentTarget.id))
            {
                setVoice(Number(candidate.voice))
                console.log(candidate.voice)
                return (<CheckButton state={true} id={index} text={candidate.name} handleClicked={handleSelectCandidate} />)
            }
            else
            {
                return (<CheckButton state={false} id={index} text={candidate.name} handleClicked={handleSelectCandidate} />)
            }
        }))
    }

    const handleSendingVoice = () =>
    {
        let keyPublic = JSON.parse(localStorage.getItem("KeyPublic"))
        let t = Paillier.Encryption(voice,keyPublic)
        console.log(t)
    }

    return <>
        {
            loading
            ? <Loader className="centered" type="Puff" color="#00BFFF" height={100} width={100}/>
            : <div className={"boxHome"}>
                <div className={"boxVoting"}>
                    {
                        candidatesCheck.map((candidate) => candidate)
                    }
                    <div className={"VotingButton"}>
                        <Button text={"Zagłosuj"} handleClicked={handleSendingVoice}/>
                    </div>
                </div>
              </div>
        }
    </>

}