import React, {useEffect} from "react";
import Loader from "react-loader-spinner";
import {ElectionsService} from "../Services/ElectionsService";

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
                {
                    candidates.map((candidate) => <h2>{candidate.name}</h2>)
                }

                {
                    candidates.map((candidate) => <h2>{candidate.voice}</h2>)
                }

            </>
        }
    </>

}