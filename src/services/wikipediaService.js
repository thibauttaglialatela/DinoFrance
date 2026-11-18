const BASE_URL = 'https://en.wikipedia.org/api/rest_v1'

export async function fetchOneDinosaurPicture(dinoName) {
    try {
        if (!dinoName) {
            throw new ReferenceError("Aucun dinosaure")
        }

        const formattedName = encodeURIComponent(dinoName.trim().replace(/\s+/g, '_'))
        const url = `${BASE_URL}/page/summary/${formattedName}`

        const response = await fetch(url, {
            method: "GET",
            headers: {
                'Api-User-Agent': 'DinoFrance/1.0 (contact@dinofrance.example)'
            }
        })

        if (!response.ok) {
            return { imageSrc: null }
        }

        const data = await response.json()

        const imageSrc = data.thumbnail?.source || null


        return { imageSrc }
    } catch (error) {
        console.error("Une erreur est survenue :", error.message)
        return { imageSrc: null }
    }
}