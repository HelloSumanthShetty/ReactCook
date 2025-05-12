import React from 'react'


 function Header() {
  return (
  
<header className='w-full relative h-100 md:h-150 overflow-hidden'>
<img src="https://hslc.in/wp-content/uploads/2024/12/1708232269853.png" alt="img" className='object-cover  w-full h-full absolute inset-0 object-top opacity-90 ' />
  <nav className='sticky top-0  opacity-90 mx-auto bg-white justify-between flex mt-10 px-6 py-4 Z-50 shadow-xl shadow-zinc-900 mx-auto max-w-7xl rounded-lg '>

<div className="flex items-center  ">
<span className='flex justify-start font-bold '>//</span>
           <img
            src="https://t3.ftcdn.net/jpg/12/32/67/70/360_F_1232677096_1w21jqwQFBpM16zsNBMdAPnMmD8XpcKp.jpg"
            alt="AI Cook Logo"
            className="h-8 w-auto"
          />
          <h1 className="text-xl font-bold text-gray-800">AI COOK</h1>
        </div>
        <ul className="hidden md:flex space-x-8 text-gray-700">
           <li><a href="#pricing" className="hover:text-gray-900  cursor-pointer transition">Pricing</a></li>
           <li><a href="#models" className="hover:text-gray-900 cursor-pointer transition">Models</a></li>
           <li><a href="#company" className="hover:text-gray-900 cursor-pointer transition">Company</a></li>
           <li><a href="#signin" className="hover:text-gray-900 cursor-pointer transition p-1 bg-gray-300 font-semibold rounded border-1 border-zinc-400">Sign In</a></li>
      </ul>
      <button className="md:hidden text-gray-700 focus:outline-none">
   
    <img src="https://cdn-icons-png.flaticon.com/128/7710/7710488.png" alt="img"  className='h-4 w-5'/>
   
        </button>
</nav>
</header>
 

  );
}
export default Header