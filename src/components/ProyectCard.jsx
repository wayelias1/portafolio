export function ProyectCard ({titulo, imagen, descripcion, children, link}){
    return (
        <article className='flex flex-col relative h-full rounded-lg shadow-lg px-4 py-3  border bg-slate-300 border-gray-300 dark:bg-slate-900 dark:border-gray-800 dark:shadow-gray-800 dark:text-white transition hover:scale-105'>
          <h4 className='text-xl dark:text-blue-300 text-blue-800'>{titulo}</h4>
          <div className='py-3 max-h-96'> 
            <img className='rounded-md h-56 w-full object-cover' src={imagen}/>
          </div>
          <div className="flex flex-col h-full justify-between">
            <p className='p-2'>{descripcion}</p>
            <div className='flex justify-around py-2 text-blue-300'>
              {children}
            </div>
            <a className='w-fit' href={link}>
              <button className='font-bold py-2 px-3 rounded-lg border border-indigo-400 bg-blue-300 hover:bg-blue-400 dark:border-indigo-700 dark:bg-blue-900 dark:text-gray-300 dark:hover:bg-blue-700 transition hover:scale-105 cursor-pointer'>
                Visitar
              </button>
            </a> 
          </div>
        </article>
    )
}