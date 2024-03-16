
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Navbar from './Components/Navbar/Navbar'
import Recipes from './Components/Recipes/Recipes'

function App() {
  const [cookItems,setCookItems] = useState([])

  const handleCookItems = cook => {
    const newCooks = [...cookItems,cook]
    setCookItems(newCooks)
  }
  

  return (
    <>
      
      <Navbar></Navbar>
      <Banner></Banner>

      <div className='flex max-w-7xl mx-auto'>
          <Recipes handleCookItems={handleCookItems}></Recipes>
          <Bookmarks cookItems={cookItems}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
