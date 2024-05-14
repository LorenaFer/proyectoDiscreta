let gifs = [
    '/eulerapli/1.png',
    '/eulerapli/2.png',
    '/eulerapli/3.png',
];

export function load({ params }: { params: { id: number }}) {
    return {
        body: {
            imagen: gifs[params.id - 1],
            maxImage: gifs.length,
            id: params.id
        }
    }
}