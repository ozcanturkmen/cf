export const onRequestGet: PagesFunction = async () => {
    const data = {
        hello: 'world',
    }
    const json = JSON.stringify(data, null, 2)

    return new Response(json, {
        headers: {
            'content-type': 'application/json;charset=UTF-8',
        },
    })
}
