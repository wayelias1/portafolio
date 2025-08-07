export function Timeline({children, lugar, puesto, fecha}) {
    return (
        <div id='timeline' className='relative py-4 '>
            <article id='timeline-art' className='is-active group relative flex w-full items-center justify-between md:w-2/4 xl:w-full xl:justify-normal xl:even:flex-row-reverse xl:even:text-right'>
              <i id='timeline-art-icon' className='flex absolute h-5 w-5 items-center justify-center rounded-full bg-blue-500'></i>
              <div id='timeline-art-box' className='flex flex-col ml-8 relative w-full h-full p-4 py-4 shadow-lg border min-w-max bg-indigo-100 border-gray-300 dark:bg-slate-900 dark:border-gray-800 dark:shadow-gray-800 dark:text-white rounded-lg backdrop-blur-lg transition hover:scale-105'>
                <h5>{lugar}</h5>
                <p>{puesto}</p>
                <span>{fecha}</span>
              </div>
            </article>
          </div>
    )
}