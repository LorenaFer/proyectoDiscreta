let gifs = [
    '/bernoulliImg/1b.png',
    '/bernoulliImg/2b.png',
    '/bernoulliImg/3b.png',
    '/bernoulliImg/4b.png',
    '/bernoulliImg/5b.png',
    '/bernoulliImg/6b.png',
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