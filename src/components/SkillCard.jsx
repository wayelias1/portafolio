export function SkillCard ({titulo, descripcion, children}){
    return (
        <article className="flex flex-col items-center relative h-full w-full p-3 rounded-lg shadow-lg border bg-slate-100 border-gray-300 dark:bg-slate-900 dark:border-gray-800 dark:shadow-gray-800 dark:text-white transition hover:scale-105">
            <h4 className="dark:text-blue-300 text-blue-800">{titulo}</h4>
            <div className="h-28 w-28 flex justify-center items-center">
                {children}
            </div>
        </article>
    )
}