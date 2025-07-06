import { Fragment, useEffect, useState, useMemo, useRef } from "react"
import {IconMenu2, IconSun, IconMoon, IconX, IconWorld, IconFileCv, IconBrandGithub} from "@tabler/icons-react"
import BrandIcon from "./library/BrandIcon"
import gsap from "gsap"
import "./App.css"
import { Navbar } from "./components/Navbar"
import { ButtonMy } from "./components/ButtonMy"
import { ProyectCard } from "./components/ProyectCard"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import { Opciones } from "./components/OptionsParticles"
import { SkillCard } from "./components/SkillCard"
import { projects } from "./library/projects"
import { Timeline } from "./components/Timeline"
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
          className="fixed h-full w-full transition-all duration-300 opacity-50"
          src="img/pxfuel.webp"
          alt="fondo cuadriculado"
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

      <section id='SobreMi' className='flex min-h-screen justify-center items-center px-4 bg-white dark:bg-black overflow-hidden transition-colors duration-300'>
        <div className='relative justify-center py-24 flex items-center flex-col lg:w-1/2 md:w-2/3 w-full'>
          <img className='w-28 h-28 aspect-square object-cover rounded-fullMax' src="img/Elias.webp" alt="persona" loading="lazy" decoding="async" />
          <h1 className='dark:text-gray-100 text-3xl transition-colors duration-300'>Elías Cordova</h1>
          <p className='dark:text-blue-300 text-blue-900 brillo text-xl transition-colors duration-300'>Front-end Developer</p>
          <div className='mt-5 rounded-lg shadow-lg dark:bg-gray-950 bg-gray-100 px-5 py-3 border border-gray-300 dark:border-gray-800 dark:shadow-gray-800 transition-colors duration-300'>
            <p className='p-3 dark:text-gray-100 transition-colors duration-300'>
            Ingeniero en Informática (UNEXCA) con experiencia en desarrollo web full-stack. Dominio de PHP, Laravel,
            JavaScript, CSS y bases de datos. Enfoque en la optimización del servidor, diseño de interfaces intuitivas
            y mejora de la experiencia de usuario. Proactivo, atento a los detalles y con capacidad de trabajo en equipo.
            </p>
            <div className='flex flex-col gap-4 sm:flex-row justify-around pt-5'>
              <ButtonMy link="https://github.com/wayelias1" descripcion="Ver Github"><IconBrandGithub /></ButtonMy>
              <ButtonMy link="docs/curriculum.pdf" descripcion="Descargar Curriculum"><IconFileCv /></ButtonMy>
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
          <div>
          <Timeline lugar="Movidagrafica" puesto="FullStack Developer" fecha="2023"/>
          <Timeline lugar="Lore Ipsum" puesto="FullStack Developer" fecha="2025"/>
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
