
import BigInteger from 'big-integer'
import KeyPublic from "./KeyPublic";


export default class Paillier
{
    static Encryption(msg :BigInteger,keyPublic:KeyPublic) :BigInteger
    {
        let r:BigInteger = 0;
        do
        {
            r = BigInteger.randBetween(1,keyPublic.n)
        }while (BigInteger.gcd(r,keyPublic.n) != 1)

        let C = BigInteger(keyPublic.n).pow(2)
        return BigInteger(BigInteger(keyPublic.g).modPow(msg,C) * BigInteger(r).modPow(keyPublic.n,C))
    }
}