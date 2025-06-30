import { Fragment, useEffect, useState, useMemo, useRef } from "react"
import {IconMenu2, IconSun, IconMoon, IconX, IconWorld, IconFileCv} from "@tabler/icons-react"
import BrandIcon from "./library/BrandIcon"
import gsap from "gsap"

import "./App.css"
import { ProyectCard } from "./components/ProyectCard"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import { Opciones } from "./components/OptionsParticles"
import { SkillCard } from "./components/SkillCard"
import { projects } from "./library/projects"
import { Navbar } from "./components/Navbar"
import { Navbar2 } from "./components/Navbar2"
import { Footer } from "./components/Footer"

const skills = ["Wordpress", "Bulma", "Github", "React", "Html5", "Sass", "Laravel", "Php", "Css3", "Javascript", "Mysql"]

function App() {
  const [init, setInit] = useState(false)
  const [theme, setTheme] = useState(("dark"))

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [theme])

  const particlesLoaded = (container) => {
    // console.log(container)
  }

  // const container = useRef();
  // useGSAP(
  //   ()=>{
  //     let tl = gsap.timeline()
  //     tl.to("#timeline-art-icon", { opacity: 1, duration: 0.5 })
  //     tl.to("#timeline-art-box", { opacity: 1, x: 30, duration: 0.5 })
  //   },
  //   {scope: container}
  // );

  // let tl = gsap.timeline()
  //      tl.to("#timeline-art-icon", { opacity: 1, duration: 0.5 })
  //      tl.to("#timeline-art-box", { opacity: 1, x: 30, duration: 0.5 })

  const projectList = projects.map(({ titulo, imagen, link, descripcion, boton, skills, tipo = [] }) => {

    const iconsList = skills.map(({ icon }) => (
      <BrandIcon
        key={icon}
        icon={icon}
        dataId={icon}
        dataTop="top"
        className="text-blue-800 dark:text-current"
      />
    ))
    return (<ProyectCard
      key={titulo}
      titulo={titulo}
      imagen={imagen}
      link={link}
      descripcion={descripcion}
      boton={boton}
      tipo={tipo}
    >
      {iconsList}
    </ProyectCard>
    )

  }
  )
  const mySkills = skills?.map((skill) => (
    <SkillCard titulo={skill} key={skill}>
      <BrandIcon

        icon={skill}
        dataId={''}
        dataTop=""
        className="text-blue-800 dark:text-current"
        size="70"
      />
    </SkillCard>
  ))


  return (
    <>
      <div className="fixed h-full w-full object-cover">
        <img
          className="fixed h-full w-full transition-all duration-500 opacity-50"
          src="img/pxfuel.webp"
          alt=""
        />
        <div className="absolute z-10 h-full w-full bg-slate-50 dark:bg-black opacity-80"></div>
      </div>

      <div>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={Opciones}
        />
      </div>

      <Navbar></Navbar>

      <section id='SobreMi' className='flex h-full justify-center'>
        <div className='relative justify-center py-24 flex items-center flex-col h-1/2 lg:w-1/2 md:w-2/3 w-full'>
          <img className='w-28 content-center radiusRounded' src="img/Elias.webp" alt="persona" />
          <h1 className='dark:text-gray-100 text-black text-3xl'>Elías Cordova</h1>
          <p className='dark:text-blue-300 text-blue-900 brillo'>Front-end Developer</p>
          <div className='mt-5 rounded-lg shadow-lg dark:bg-gray-950 bg-gray-100 px-5 py-3 border border-gray-300 dark:border-gray-800 dark:shadow-gray-800'>
            <p className='p-3 text-black dark:text-gray-100'>
            Ingeniero en informática egresado en la universidad UNEXCA, activo, capacitado para el trabajo como programador, 
            diseño y mantenimiento de aplicaciones y todo lo relativo a entornos ofimáticos online. He trabajado en el front-end, 
            enfocado en el diseño y funcionalidades, adicionalmente con conocimientos básicos del back-end.
            </p>
            <div className='pt-5'>
              <a className="flex justify-center items-center border rounded-lg p-2 border-indigo-300 bg-blue-200 hover:bg-blue-400 dark:border-indigo-700 dark:bg-blue-900 dark:text-gray-300 dark:hover:bg-blue-700 transition hover:scale-105" href="docs/curriculum.pdf">
                <IconFileCv /> Descargar Curriculum
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id='Proyectos' className='flex h-full justify-center flex-col items-center md:w-full'>
        <h3 className='text-blue-900 text-3xl dark:text-blue-200 brillo hover:'>Proyectos</h3>
        <div className='py-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 max-w-screen-2xl jusitify-around mx-auto px-4' >
          {projectList}
        </div>
      </section>
      <section id='Miexperiencia' className='flex h-screen justify-center py-6 my-4 flex-col items-center'>
        <h4 className='text-blue-900 text-3xl dark:text-blue-200 brillo'>Mi experiencia</h4>
        <div className='w-full flex flex-col justify-evenly items-center relative md:flex-row'>
          <div className='relative w-1/2'>
            <p className='text-black dark:text-white'>Mi primera experiencia trabajando como desarrollador web fue en la empresa
              Movidagrafica, donde aprendi a usar wordpress y mejorar mis habilidades como programador como FullStack junior.
            </p>
          </div>
          <div id='timeline' className='relative py-4 before:absolute before:inset-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent dark:before:via-slate-300 before:via-black before:to-transparent before:mx-3'>
            <article id='timeline-art' className='is-active group relative flex w-full items-center justify-between md:w-2/4 xl:w-full xl:justify-normal xl:even:flex-row-reverse xl:even:text-right'>
              <i id='timeline-art-icon' className='flex absolute h-5 w-5 items-center justify-center rounded-full bg-blue-500 mx-1'></i>
              <div id='timeline-art-box' className='flex flex-col ml-8 relative w-full h-full p-4 py-4 shadow-lg border min-w-max bg-indigo-100 border-gray-300 dark:bg-slate-900 dark:border-gray-800 dark:shadow-gray-800 dark:text-white rounded-lg backdrop-blur-lg transition hover:scale-105'>
                <h5>Movidagrafica</h5>
                <p>FullStack Developer</p>
                <span>2023</span>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section id='Habilidades' className='flex justify-evenly py-6 my-4 flex-col items-center'>
        <h4 className='text-blue-900 text-3xl dark:text-blue-200 brillo'>Mis Habilidades</h4>
        <div className='grid w-full gridskills mt-5 gap-2 md:gap-4 lg:gap-6 xl:gap-10 max-w-screen-2xl jusitify-around mx-auto px-5'>

          {mySkills}

        </div>
      </section>
      <Footer></Footer>
    </>
  )
}

export default App
