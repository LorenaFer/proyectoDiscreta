let gifs = [       
    '/stirlingImg/1s.png',
    '/stirlingImg/2s.png',
    '/stirlingImg/3s.png',
    '/stirlingImg/4s.png',
    '/stirlingImg/5s.png',

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