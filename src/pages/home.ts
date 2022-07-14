import Pokemon from "../model/pokemon"
import { getAll } from "../component/api"
export const Home = {
    async render(){
        const {data} = await getAll()
        const pokemon:Pokemon[] = data 
        return/*html*/`<div class="grid justify-items-center grid-cols-5 gap-3">
        ${pokemon.map((poke) => /*html*/`
          <div>
            <a href="/detail/${poke.id}">
             <img src="${poke.image}"/>
            </a>
            <a href="/detail/${poke.id}">
            <h3>${poke.name}</h3>
            </a>
            <div class="flex">
              ${poke.type.map(t => /*html*/`
                <div class="${t.type.name}">
                  ${t.type.name}
                </div>`).join('|')}
            </div>
          </div>
        `).join('')}
      </div>
      `
    }
}

