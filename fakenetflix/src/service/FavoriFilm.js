export const getFavoris = () => {
    let Favoris = []
    const favString = localStorage.getItem("Favoris")
    if (favString != undefined) {
        Favoris = JSON.parse(favString)
    }
    return Favoris
}

export const addToFavoris = (film) => {
    const favoris = getFavoris()
    let FavoriFilm = favoris.find(f => f.film.id == film.id)

    favoris.push({ film: film })

    saveFavoris(Favoris)
}

export const removeFromFavoris = (film) => {
    let favoris = getFavoris()
    let FavoriFilm = favoris.find(f => f.film.id == film.id)
    if (FavoriFilm != undefined) {
        favoris = favoris.filter(f => f.film.id != FavoriFilm.film.id)
    }
    saveFavoris(Favoris)
}









