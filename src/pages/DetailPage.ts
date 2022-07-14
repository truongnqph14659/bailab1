import { getAllId } from './../component/api';
import Pokemon from '../model/pokemon';
export const DetailPage = {
    async render(id:number){
        const {data} = await getAllId(id)
        const poke:Pokemon = data
        return /*html*/`
        <div>
            <img src="${poke.image}"/>
            <h3>${poke.name}</h3>
            <div class="flex">
              ${poke.type.map(t => /*html*/`
                <div class="${t.type.name}">
                  ${t.type.name}
                </div>`).join('|')}
            </div>
          </div>
        `
    }
}