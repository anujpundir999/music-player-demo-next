import { Clock, Home, TrendingUp } from 'lucide-react'
import React from 'react'

//just to show how loading works individually in parallel routes setTimeout is used ..

const Sidebar = async() => {
    await new Promise((resolve)=>(
        setTimeout(()=>{
            resolve("Content is currently Loading")}
            ,500
        )
    ));
  return (
    <aside className="w-64 p-4 flex flex-col justify-between bg-[#111111] text-white min-h-screen  ">
        <section className="text-xl font-bold">
            <h2 >MENU</h2>
            <nav className="mt-4">
                <ul>
                    <li className="flex item-center gap-2 hover:bg-[#171717] rounded-md cursor-pointer p-2">
                        <Home/>Discover       
                    </li>
                    <li className="flex item-center gap-2 hover:bg-[#171717] rounded-md cursor-pointer p-2">
                        <TrendingUp/>Trending       
                    </li>
                    <li className="flex item-center gap-2 hover:bg-[#171717] rounded-md cursor-pointer p-2">
                        <Clock/>Recent       
                    </li>
                </ul>
            </nav>
        </section>
        <section>
            <h2 className="mt-6 text-xl font-bold ">FAVORITE</h2>
            <ul className="mt-2 mb-[2rem]">
                {[1,2,3,4,5].map((i)=>(
                    <div key={i} className="flex mt-[2rem] gap-4 ">
                        <img
                         src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                         alt=""
                         className="h-15 w-15 bg-gray-700 rounded-md" />
                    <div>
                        <p className="text-white">Random</p>
                        <p className="text-gray-400 text-sm">Person</p>
                    </div>
                    </div>
                ))}
            </ul>
        </section>

    </aside>
  )
}

export default Sidebar