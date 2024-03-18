
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Navbar from './Components/Navbar/Navbar'
import Recipes from './Components/Recipes/Recipes'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [cookItems,setCookItems] = useState([])
  const [currentCooks,setCurrentCook] = useState([])

  const handleCookItems = (cook) => {
    const newCooks = [...cookItems,cook]
    const isExist = cookItems.find(item=> item.recipe_id===cook.recipe_id)
    if (!isExist){
      setCookItems(newCooks)
      // toast.success("Recipe added");
    }
    else{
      toast.warn("Recipe already selected !");
      
    }
    console.log('connection it',cook)
    
  }

    const handleCurrentCook = (recipe_id,current)=> {
      const newCurrentCook = [...currentCooks,current]
      setCurrentCook(newCurrentCook)
      const remainingCook = cookItems.filter(item=>item.recipe_id!==recipe_id)
      setCookItems(remainingCook)
      console.log('connection correctly',current)
      
    }
    // const handleCurrentCook = (current)=> {
    //   const newCurrentCook = [...currentCook,current]
    //   // setCurrentCook(newCurrentCook)
    //   const remainingCook = cookItems.find(item=>item.recipe_id===current.recipe_id)
    //   if(!remainingCook){
    //     setCurrentCook(newCurrentCook)
    //   }
    //   // setCookItems(remainingCook)
      
    // }

  return (
    <>
      
      <Navbar></Navbar>
      <Banner></Banner>

      <div className='flex max-w-7xl mx-auto gap-8'>
          <Recipes handleCookItems={handleCookItems}   ></Recipes>
          <Bookmarks handleCurrentCook={handleCurrentCook} currentCook={currentCooks} cookItems={cookItems}></Bookmarks>
          
      </div>
      
      <ToastContainer/>
    </>
  )
}

export default App
