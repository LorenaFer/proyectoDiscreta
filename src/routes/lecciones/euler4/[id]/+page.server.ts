let gifs = [
    '/historiae/1.png',
    '/historiae/2.png',
    '/historiae/3.png',
    '/historiae/4.png',
    '/historiae/5.png',
    '/historiae/6.png',
    '/historiae/7.png',
    '/historiae/8.png',
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