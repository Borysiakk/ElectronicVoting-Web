
export const IdentityService =
{
    Login,
    Register,
};

function Login(login,password)
{
    return fetch('https://localhost:5001/api/VotingIdentity/Login"',
        {
            method: 'POST',
            headers:
            {
                'Accept': 'application/json; charset=utf-8',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({Email:login,Password:password})
        })
        .then(response => response.json())
        .then(data =>
        {
            return data;
        });
}

function Register()
{

}