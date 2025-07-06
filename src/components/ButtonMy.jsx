export function ButtonMy({children, link, descripcion}) {
    return (
        <a className="w-full flex justify-center items-center border rounded-lg p-2 border-indigo-300 bg-blue-200 hover:bg-blue-400 dark:border-indigo-700 dark:bg-blue-900 dark:text-gray-300 dark:hover:bg-blue-700 transition hover:scale-105"
            href={link}>
            {children}
            {descripcion}
        </a>
    )
}