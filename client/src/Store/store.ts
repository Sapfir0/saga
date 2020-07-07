import {IStore} from "./typings";

const initialState : IStore = {
    colors: [],
    color: "",
    auth: {accessToken: "", role: "", expiresIn: 0, refreshToken: ""}
}

export default initialState