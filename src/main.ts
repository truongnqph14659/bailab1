
import Navigo from 'navigo'
import { Home } from './pages/home'
import  {DetailPage}  from './pages/DetailPage'
const router = new Navigo('/',{linksSelector:'a'})
document.addEventListener('DOMContentLoaded',()=>{
  async function print(Page:any,id?:any) {
    const app = document.querySelector('#root')
    if (app) {
      app.innerHTML = await Page.render(id)
    }
    if (Page.afterRender) Page.afterRender()
  }
  router.on({
    '/':()=>print(Home),
    '/detail/:id':(data:any)=>{
      print(DetailPage,data.data.id)
    }
  })
  router.resolve()

})

