let gifs = [
    '/leccionese2/1e2.png',
    '/leccionese2/2e2.png',
    '/leccionese2/3e2.png',
];

export function load({ params }: { params: { imagenID: number }}) {
    return {
        body: {
            imagen: gifs[params.imagenID - 1],
            maxImage: gifs.length,
            imagenID: params.imagenID
        }
    }
}