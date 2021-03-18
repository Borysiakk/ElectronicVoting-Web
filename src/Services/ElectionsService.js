

export const ElectionsService =
{
    GetCandidates,
};

async function GetCandidates()
{
    return await fetch('https://localhost:5001/api/Elections/Candidates',
        {
            method: 'GET',
        }).then(res => res.json()).then(data => {
        return data;
    }).catch((error) => {
        alert("Nie można nawiązać połączenia z serverem")
        return error;
    });
}