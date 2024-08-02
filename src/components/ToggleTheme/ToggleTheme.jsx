import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { useEffect } from "react"


    const ToggleTheme = () => {

        const toggle = () => {
            document.documentElement.classList.toggle('dark')
    }

    return <div className="hidden sm:block">
    <MoonIcon className="h-8 text-gray-500 block dark:hidden cursor-pointer" onClick={toggle}/>
    <SunIcon className="h-8 text-gray-500 hidden dark:block cursor-pointer" onClick={toggle}/>
    </div>
    }


export default ToggleTheme;