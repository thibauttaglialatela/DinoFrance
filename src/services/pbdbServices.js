const BASE_URL = '/api-pbdb/data1.2/specs/list.json'

/**
 * fonction de conversion entre les ages en Ma et l'étage correspondant
 */
function formatGeologicalAge(minAge, maxAge) {
    if (maxAge === undefined || minAge === undefined) return 'Âge non renseigné'

    const max = parseFloat(maxAge)
    const min = parseFloat(minAge)

    let epochLabel = 'Mésozoïque'

    if (min <= 252 && max >= 201) {
        if (max >= 237) {
            epochLabel = 'Trias inférieur'
        } else if (max >= 227) {
            epochLabel = 'Trias moyen'
        } else {
            epochLabel = 'Trias supérieur'
        }
    } else if (min <= 201 && max >= 145) {
        if (max >= 174) {
            epochLabel = 'Lias (Jurassique inférieur)'
        } else if (max >= 163) {
            epochLabel = 'Dogger (Jurassique moyen)'
        } else {
            epochLabel = 'Malm (Jurassique supérieur)'
        }
    } else if (min <= 145 && max >= 66) {
        if (min >= 100) {
            epochLabel = 'Crétacé inférieur'
        } else {
            epochLabel = 'Crétacé supérieur'
        }
    }

    const roundedMin = Math.round(min)
    const roundedMax = Math.round(max)

    return `${epochLabel} (de ${roundedMax} à ${roundedMin} Ma)`
}

/**
 * Récupère les dinosaures de la PBDB pour la France et les formate pour les cartes.
 * @param {string} period - Optionnel : filtre par période (ex: 'Cretaceous', 'Jurassic')
 */
export async function fetchFrenchDinosaurs(period = 'Cretaceous') {
    let url = `${BASE_URL}?datainfo&rowcount&base_name=Dinosauria&cc=EUR&pgm=gplates&show=full,mslink,acconly`

    if (period) {
        url += `&interval=${encodeURIComponent(period)}`
    }

    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`)
        }

        const data = await response.json()
        const rawOccurences = data.records || []

        const uniqueDinosMap = new Map()

        for (const item of rawOccurences) {
            const dinoName = item.tna

            if (dinoName && !uniqueDinosMap.has(dinoName)) {
                uniqueDinosMap.set(dinoName, {
                    id: item.oid,
                    name: dinoName,
                    scientificName: `${item.idn || item.tna} (${item.aut || ''})`.trim(),
                    period: formatGeologicalAge(item.eag, item.lag),
                    habitat: item.env,
                    imageUrl: 'https://picsum.photos/id/296/400/300',
                    diet: item.jdt || item.jdtb || 'inconnu',
                })
            }
        }

        return Array.from(uniqueDinosMap.values())
    } catch (error) {
        console.error('Échec de la récupération des données PBDB :', error)
        throw error
    }
}
