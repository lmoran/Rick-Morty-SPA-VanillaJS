import getData from '../utils/getData'
import getHash from '../utils/getHash'
const Home = async () => {
  const page = getHash()
  const character = await getData(page)
  const view = `
    <div class = 'Characters'>
    ${character.results
      .map(
        character => `
    <article class = 'Character-item'>
      <a href = #/${character.id}/>
        <img src = ${character.image} alt = ${character.name}/>
        <h2 class = 'name'>${character.name}</h2>
      </a>
    </article>
    `
      )
      .join('')}
    </div>
  `
  return view
}
export default Home
