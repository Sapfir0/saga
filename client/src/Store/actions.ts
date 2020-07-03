export const GET_COLORS = 'GET_COLORS'
export const GET_COLOR = 'GET_COLOR'
export const LOAD_COLORS = 'LOAD_COLORS'
export const LOAD_COLOR = 'LOAD_COLOR'

export const getColors = (dataFromServer: any) => {
    return {
        type: GET_COLORS,
        payload: dataFromServer
    }
}

export const getColor = (dataFromServer: any) => {
    return {
        type: GET_COLOR,
        payload: dataFromServer
    }
}

export const loadColors = () => {
    return {
        type: LOAD_COLORS,
    }
}

export const loadColor = (id: number) => {
    console.log(id)
    return {
        type: LOAD_COLOR,
        payload: {
            id
        }
    }
}
