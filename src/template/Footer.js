/* import getData from '../utils/getData'
import getHash from '../utils/getHash'

const Footer = async () => {
  const data = await getData()
  console.log(data)
  let ancles = []
  for (let i = 1; i <= data.info.pages; i++) {
    ancles.push(i)
  }

  let a = 0
  const view = `
    <div class="Footer-pages">
        <h3>Pages</h3>
        <div>
            ${ancles.map(() => `<a href="#/?page=${++a}/">${a}</a>`).join('')}
        </div>
    </div>
    `
  return view
}
export default Footer */
