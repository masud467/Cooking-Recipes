
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Navbar from './Components/Navbar/Navbar'
import Recipes from './Components/Recipes/Recipes'

function App() {
  const [cookItems,setCookItems] = useState([])
  const [currentCook,setCurrentCook] = useState([])

  const handleCookItems = (cook) => {
    const newCooks = [...cookItems,cook]
    const isExist = cookItems.find(item=> item.recipe_id===cook.recipe_id)
    if (!isExist){
      setCookItems(newCooks)
    }
    else{
      alert('Already exist!!')
      
    }
    
  }

   
    const handleCurrentCook = (current,recipe_id)=> {
      const newCurrentCook = [...currentCook,current]
      setCurrentCook(newCurrentCook)
      const remainingCook = cookItems.filter(item=>item.recipe_id!==recipe_id)
      setCookItems(remainingCook)
    }

  return (
    <>
      
      <Navbar></Navbar>
      <Banner></Banner>

      <div className='flex max-w-7xl mx-auto'>
          <Recipes handleCookItems={handleCookItems} ></Recipes>
          <Bookmarks handleCurrentCook={handleCurrentCook} currentCook={currentCook} cookItems={cookItems}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
