let gifs = [
    '/fibonacci/lec1.png',
    '/fibonacci/lec2.png',
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