export function ProyectCard ({titulo, imagen, descripcion, children, link, boton, tipo}){
    let claseProyecto = tipo + ' absolute p-2 rounded-3xl border-blue-200 dark:border-blue-700 bg-gradient-to-r from-gray-200 to-blue-200 dark:from-gray-700 dark:to-blue-700';
    return (
        <article className='flex flex-col relative h-full rounded-lg shadow-lg px-6 md:px-12 py-12 border bg-slate-100 border-gray-300 dark:bg-slate-900 dark:border-gray-800 dark:shadow-gray-800 dark:text-white transition hover:scale-105'>
          <div className={claseProyecto} ><p className="text-blue-700 dark:text-blue-200">Real Proyect</p></div>
          <h4 className='text-xl dark:text-blue-50 text-blue-800'>{titulo}</h4>
          <div className='py-3 max-h-96'> 
            <img className='w-full max-w-sm rounded-md h-56 object-cover' src={imagen} alt={'foto de ' + titulo} loading="lazy"decoding="async"/>
          </div>
          <div className="h-full">
            <p className='p-2 hyphens-manual'>{descripcion}</p>
          </div>
          <div className="flex flex-col">
            <div className='flex justify-between py-2 my-6 text-blue-300'>
              {children}
            </div>
            <a className='w-fit' href={link}>
              <button className='font-bold py-2 px-3 rounded-lg border border-indigo-400 bg-blue-300 hover:bg-blue-400 dark:border-indigo-700 dark:bg-blue-900 dark:text-gray-300 dark:hover:bg-blue-700 transition hover:scale-105 cursor-pointer'>
                {boton}
              </button>
            </a> 
          </div>
        </article>
    )
}