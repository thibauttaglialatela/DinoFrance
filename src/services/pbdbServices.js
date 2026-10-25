const BASE_URL = '/api-pbdb/data1.2/occs/list.json';

/**
 * Récupère les dinosaures de la PBDB pour la France et les formate pour les cartes.
 * @param {string} period - Optionnel : filtre par période (ex: 'Cretaceous', 'Jurassic')
 */
export async function fetchFrenchDinosaurs(period = 'Cretaceous') {

    let url = `${BASE_URL}?base_name=Dinosauria&cc=FR&show=full`;

    if (period) {
        url += `&interval=${encodeURIComponent(period)}`;
    }

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }

        const data = await response.json();
        const records = data.records || [];

        return records.map(record => ({
            id: record.oid,
            name: record.gnl || record.tna || "Spécimen non identifié",
            scientificName: `${record.tna || ''} ${record.att || ''}`.trim(),
            period: record.oei || "Âge indéterminé",
            state: [record.stp, record.cny].filter(Boolean).join(' - ') || 'France',
            imageUrl: 'https://picsum.photos/id/296/400/300'
        }));

    } catch (error) {
        console.error("Échec de la récupération des données PBDB :", error);
        throw error;
    }
}