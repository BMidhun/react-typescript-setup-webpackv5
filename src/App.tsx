import SpiderImage from './spider.png' // Typescript doesn't understand this module. So we have to declare the module under .d.ts file
import KiwiSvg from './kiwi.svg'

console.log(process.env)

const App = () => (
  <div>
    <h1>I&apos;m on {process.env.name}</h1>
    <img src={SpiderImage} alt="Spider Img" />
    <img src={KiwiSvg} alt="Kiwi.svg" />
  </div>
)

export default App
