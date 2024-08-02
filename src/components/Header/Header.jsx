import ToggleTheme from "../ToggleTheme/ToggleTheme";

const Header = ({ user }) => {
    return <div className="flex h-20 bg-red-200 justify-between items-center px-5 sm:rounded-xl sm:m-5">
        <span className="text-gray-600">Olá, {user?.name || "usuário"}</span>
        <h1 className="text-gray-600 sm:hover:text-2xl sm:cursor-pointer text-xl">Cachos Newsletter</h1>
        <ToggleTheme/>
    </div>
}

export default Header;