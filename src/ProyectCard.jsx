export function ProyectCard ({titulo, imagen, descripcion, children, link}){
    return (
        <article className='rounded-lg shadow-lg px-4 py-3 dark:text-white border border-gray-300 dark:border-gray-800 dark:shadow-gray-800'>
          <h4 className='brillo dark:text-blue-300 text-blue-900'>{titulo}</h4>
          <div className='py-3'> 
            <img className='rounded-md' src={imagen}/>
          </div>
          <p className='p-2'>{descripcion}</p>
          <div className='flex justify-around py-2 text-blue-300'>
            {children}
          </div>
          <a className='' href={link}>
            <button className='font-bold py-2 px-3 rounded-lg border border-gray-300 bg-blue-200 hover:bg-blue-400 dark:border-gray-700 dark:bg-blue-900 dark:text-gray-300 dark:hover:bg-blue-700'>
              Visitar
            </button>
          </a> 
        </article>
    )
}