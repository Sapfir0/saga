export const GET_COLORS = 'GET_COLORS'
export const GET_COLOR = 'GET_COLOR'
export const LOAD_COLORS = 'LOAD_COLORS'
export const LOAD_COLOR = 'LOAD_COLOR'

export const getColors = (dataFromServer: any) => ({
    type: GET_COLORS,
    payload: dataFromServer
})

export const getColor = (dataFromServer: any) => ({
    type: GET_COLOR,
    payload: dataFromServer
})

export const loadColors = () => ({
    type: LOAD_COLORS
})

export const loadColor = (id: number) => ({
    type: LOAD_COLOR,
    payload: {
        id
    }
})
