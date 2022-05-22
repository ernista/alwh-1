import { Slider } from "./slider"
import logo from '../../assets/images/logo.jpg'
import { useNavigate } from "react-router-dom"
import { MenuAlt2Icon, XIcon } from "@heroicons/react/solid"
import { useState } from "react"

export const Landing = () => {

    const router = useNavigate()
    const toRoute = route => router(route)
    const [active, setActive] = useState(false)

    return (
        <div className="relative">
            <Slider />
            <div className="absolute h-screen w-screen">
                <div className="flex py-6 px-6 lg:px-32 text-sm justify-between items-center">
                    <img src={logo} alt="logo" className="h-16 rounded-md" />
                    <div className="hidden lg:flex space-x-4">
                        <button className="btn-secondary">Protocol Login</button>
                        <button className="btn-secondary">About</button>
                        <button className="btn-primary">Verify</button>
                        <button className="btn-primary" onClick={() => toRoute('/register')}>Register for an edition</button>
                    </div>
                    { 
                        active === true  
                            ?  <XIcon className="h-8 text-white" onClick={() => setActive(false)} />
                            : <MenuAlt2Icon className="h-8 text-white" onClick={() => setActive(true)} />
                    }
                </div>

                <div className="absolute lg:hidden px-8 text-center w-full text-white text-lg bottom-5">
                    <p>Welcome to ALWH</p>
                    <p className="text-sm">Please tap the menu icon to continue</p>
                </div>

                {/* mobile nav */}
                <div className={`lg:hidden fixed bg-white ${active === true ? 'h-screen w-screen' : 'h-0 w-0'}`}>
                    <div className={`flex-col relative items-start space-y-5 pt-8 px-6 ${active === true ? 'flex':'hidden' }`}>
                        <button className="border px-4 py-2 rounded w-full">Protocol Login</button>
                        <button className="border px-4 py-2 rounded w-full">About</button>
                        <button className="border px-4 py-2 rounded w-full">Verify</button>
                        <button className="border px-4 py-2 rounded w-full" onClick={() => toRoute('/register')}>Register for an edition</button>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}