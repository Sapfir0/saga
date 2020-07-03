


export function* query(promise: Promise<any>) {
    const data = yield promise
    console.log(data)
    const message = parseCode(data.status) // я бы сделал енум, но нет
    console.log(message)
    return yield data
}

export function parseCode(code: number) {
    switch (code) {
        case 200:
            return "All is ok"
        case 304:
            return "Cached"
        case 404:
            return "Request fell"
        case 500:
            return "Server fell"
    }
}