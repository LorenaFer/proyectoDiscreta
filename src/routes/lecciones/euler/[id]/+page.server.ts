import { gifs } from "$lib/euler/imagenes"


export function load({ params }: { params: { id: number }}) {
    return {
        body: {
            imagen: gifs[params.id - 1],
            maxImage: gifs.length,
            id: params.id
        }
    }

}