const Form = ({onSubmit})  => {
    const safeSubmit = event => {
        event.preventDefault()
        event.stopPropagation()
        const name = event.target[0].value
        const email = event.target[1].value
        onSubmit ({ name, email})
    }

    return <form onSubmit={safeSubmit} className="h-full flex flex-col items-center justify-center gap-10 -mt-20 mx-5">
        <input type="text" required className= "py-1 pl-5 w-full max-w-lg bg-red-200 dark:bg-gray-900 text-gray-900 dark:text-gray-400 rounded-full outline-none placeholder:text-gray-400 placeholder:text-xs placeholder:uppercase placeholder:font-bold focus:border-2 focus:border-red-400 focus:dark:border-red-300" placeholder="Digite seu nome..." />
        <input type="email" required className="py-1 pl-5 w-full max-w-lg bg-red-200 dark:bg-gray-900 text-gray-900 dark:text-gray-400 rounded-full outline-none placeholder:text-400 placeholder:text-xs placeholder:uppercase placeholder:font-bold focus:border-2 focus:border-red-400 focus:dark:border-red-300" placeholder="Digite seu email..." />
        <button type="submit" className= "py-1 px-5 w-full max-w-sm bg-red-300 dark:bg-red-400 rounded-full text-gray-900 uppercase outline-none hover:animate-pulse hover:shadow-md hover:shadow-red-500 dark:shadow-red-400">Entrar</button>

    </form>
}

export default Form;