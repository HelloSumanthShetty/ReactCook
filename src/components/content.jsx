import { useState } from "react"
import {getRecipeFromHuggingChat} from '../api'

function content() {

  const [ingredient, setingredient] = useState(["chicken","flour","oil","beadcrumbs","water","buttermilk"])
  const [recipe, setrecipe] = useState('')
  function handle(e) {
    e.preventDefault()
    const formdate = new FormData(e.currentTarget)
    
    const newings = formdate.get("ingredients")

    setingredient(prev => [...prev, newings])
    console.log(newings)
    e.currentTarget.reset() 

  }
  async function change(e) {
    e.preventDefault()
    const genrecped = await getRecipeFromHuggingChat(ingredient)
    console.log(genrecped)
  setrecipe(genrecped)
    
  }
  
  const newing = ingredient.map(i => <li key={i} className=" font-next mx-10 py-2 list-disc">{i}</li>)
  return (
    <>
      <main>
             
        <form className='flex justify-center mt-10 mx-3 space-x-5' onSubmit={handle}>


          <input name='ingredients' className=' shadow-blue-700 focus:ring-2 focus:ring-blue-600 rounded-md px-4 py-2 w-full max-10/11 transition-all duration-200 text-zinc-800 font-semibold focus:outline-none md:max-w-3/6  shadow-lg md:shadow-sm hover:shadow-md ' type="text" placeholder='e.g. dal,rice,flour' />
          <button type="submit" className="bg-black shadow-lg md:shadow-sm shadow-blue-600 hover:shadow-md text-white px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-600  transition duration-200 shadow-md">
            + Add Ingredient
          </button>

        </form>

        {ingredient.length >0 &&<section className="my-5 mx-auto mt-25 w-9/10 md:max-w-2xl min-h-90  h-auto p-4 shadow-lg shadow-zinc-600 rounded-lg px-10">
          <h1 className="font-next text-3xl flex justify-center font-bold  mb-4 underline">List of Ingredients:</h1>
          <h1 className="flex justify-center text-gray-400 font-semibold">(minimum 6)</h1>
          <ul >{newing}</ul>

        </section>}
        {ingredient.length >5 && <div className="bg-[#ffffb0] my-20 px-5 mx-4    max-w-md font-next md:max-w-5xl md:w-4/5  py-5 w-9/10 mx-auto rounded-lg flex flex-col items-center shadow-[#f8b850] shadow-lg">
          <div className="mb-4  flex items-center  flex-col">
            <h3 className=" text-zinc-700 text-2xl font-semibold  ">ready for a recipe?</h3>
            <h4 className="text-lg text-gray-400" >Generate a AI made recipe from your list of ingredients 😋</h4>
          </div>
          <a    onClick={change} className="shadow-lg shadow-blue-700 hover:bg-green-500 py-2 rounded-lg w-5/8 flex justify-center md:w-2/6 md:max-w-3/6  max-w-md text-white font-semibold px-4 py-2 cursor-pointer bg-blue-700">Generate a recipe</a>
        
        </div>}
{
  <p className="font-next px-6">
   {recipe}
    
  </p>
}
      </main>
    </>

  )
}


export default content