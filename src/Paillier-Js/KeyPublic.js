import * as BigInteger from 'big-integer'

export default class KeyPublic
{

    constructor(g:BigInteger,n:BigInteger,r:BigInteger)
    {
        this.n = n;
        this.g = g;
        this.r = r;
    }

}