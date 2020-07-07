import ApiHelper from "./ApiHelper";
import InteractionService from "./InteractionService";


interface ITokenService {

}

class TokenService implements ITokenService {
    public jwt: JsonWebKey
    public rt: JsonWebKey

    private _server: InteractionService

    constructor(jwt: JsonWebKey, rt: JsonWebKey, server: InteractionService) {
        this.jwt = jwt
        this.rt = rt
        this._server = server
    }

    public longToken = () => {
        //this._server.post()
    }




}

export default TokenService