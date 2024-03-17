
import './App.css'
import Banner from './components/Banner/Banner'
import Navigation from './components/NavBar/Navigation'
import Recipes from './components/Recipes/Recipes'

function App() {


  return (
    <>
      <div className='max-w-4xl pt-3 mx-auto'>
     <Navigation></Navigation>
<Banner></Banner>
<Recipes></Recipes>

     </div>
      
    </>
  )
}

export default App
