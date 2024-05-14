let gifs = [       
    '/stirlingImg/6s.png',
    '/stirlingImg/7s.png',
    '/stirlingImg/8s.png',
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