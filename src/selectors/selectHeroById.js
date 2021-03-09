import { heroes } from "../data/heroes";

export const selectHeroById = (id) => {
    return heroes.find(heroe => heroe.id === id)
}