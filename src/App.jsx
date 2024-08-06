import { Fragment, useEffect, useState, useMemo, useRef } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {IconMenu2,IconSun,IconMoon,IconX,IconWorld,IconFileCv,

} from "@tabler/icons-react";
import BrandIcon from "./library/BrandIcon";
import gsap from "gsap";
import "./App.css";
import { ProyectCard } from "./components/ProyectCard";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Opciones } from "./components/OptionsParticles";
import { SkillCard } from "./components/SkillCard";

import { Tooltip } from "react-tooltip";
import { projects } from "./library/projects";

const navigation = [
  { name: "Sobre mi", href: "#SobreMi", current: true },
  { name: "Proyectos", href: "#Proyectos", current: false },
  { name: "Mi experiencia", href: "#Miexperiencia", current: false },
  { name: "Footer", href: "#Footer", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function App() {
  const [init, setInit] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    if (theme == "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const cambiaTheme = () => {
    setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"));
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

var tl = gsap.timeline();
tl.to("#timeline-art-icon", {opacity: 1, duration: 0.5});
tl.to("#timeline-art-box", {opacity: 1, x:30, duration: 0.5});

  return (
    <>
      <div className="fixed h-full w-full object-cover">
        <img
          className="fixed h-full w-full transition-all duration-500 opacity-50"
          src="img/pxfuel.jpg"
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

      <Disclosure
        as="nav"
        className="sticky z-10 top-0 bg-gradient-to-b dark:from-indigo-950 dark:to-black from-indigo-300 to-blue-200 backdrop-blur-2xl transition-colors"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <IconX className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <IconMenu2 className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center right-7 ">
                    <img
                      className="h-10 w-auto shadow-2xl dark:bg-slate-900 bg-slate-100 rounded-full"
                      src="img/E.png"
                      alt="Logo"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-blue-400 text-black dark:bg-blue-900 dark:text-white"
                              : "text-gray-950 hover:bg-blue-200 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",
                            "rounded-md px-3 py-2 text-sm font-medium transition-colors bg-opacity-80 dark:bg-opacity-50"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      onClick={cambiaTheme}
                    />
                    <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-900 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500">
                      <div className="flex w-full h-7 justify-center items-center">
                        <IconSun
                          className="h-7 w-6 text-white"
                          aria-hidden="true"
                        />
                        <IconMoon
                          className="h-7 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </label>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3 transition-colors">
                    <div>
                      <Menu.Button className="relative flex rounded-full p-1 text-sm text-blue-600 hover:text-blue-900 bg-gray-300 border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-500 dark:text-blue-400 dark:bg-black dark:border-gray-600 dark:focus:ring-blue-700 dark:hover:text-white">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Idioma</span>
                        <IconWorld className="h-6 w-6 rounded-full" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-colors">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              <i className="font-bold font-2xl p-2">EN</i>{" "}
                              English
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              <i className="font-bold font-2xl p-2">ES</i>{" "}
                              Español
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 w-full fixed bg-gradient-to-t">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-blue-300 text-black dark:bg-blue-900 dark:text-white' : 'text-gray-950 hover:bg-gray-300 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    <section className='flex justify-center py-6 my-4' id='SobreMi'>
      <div className='relative justify-center flex items-center flex-col h-1/2 lg:w-1/2 w-2/3'>
        <img className='w-20 content-center rounded-full ' src="img/Elias.jpg" alt="persona" />
        <h1 className='dark:text-gray-100 text-black text-3xl'>Elías Cordova</h1>
        <p className='dark:text-blue-300 text-blue-900 brillo'>Front-end Developer</p>
          <div className='mt-5 rounded-lg shadow-lg dark:bg-gray-950 bg-gray-100 px-5 py-3 border border-gray-300 dark:border-gray-800 dark:shadow-gray-800'>
            <p className='p-3 text-black dark:text-gray-100'>Soy un ingeniero en informática apasionado por la programación y la tecnología. 
            Con 24 años de edad, mi trayectoria académica me llevó a graduarme en la Universidad UNEXCA. 
            Durante mi tiempo en la universidad, descubrí mi amor por los videojuegos de estrategia y el anime, lo que me inspiró a explorar el mundo de la programación.</p>
            <div className='pt-5'>
            <a href="/docs/curriculum.pdf">
              <button className='flex justify-center items-center border rounded-lg p-2 border-indigo-300 bg-blue-200 hover:bg-blue-400 dark:border-indigo-700 dark:bg-blue-900 dark:text-gray-300 dark:hover:bg-blue-700 transition hover:scale-105'>
                <IconFileCv /> Descargar Curriculum
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className='flex justify-center py-6 my-4 flex-col items-center' id='Proyectos'>
      <h3 className='text-blue-700 text-3xl dark:text-blue-200 brillo hover:'>Proyectos</h3>
      <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 max-w-screen-2xl jusitify-around mx-auto px-7' >
      {projects.map((project, index) => (
            <ProyectCard
              titulo={project.titulo}
              imagen={project.imagen}
              link={project.link}
              descripcion={project.descripcion}
              boton={project.boton}
            >
              {project?.skills?.map((skill, skillIndex) => (
                  <BrandIcon 
                    key={index + "_" + skillIndex} 
                    icon={skill.icon} 
                    dataId={skillIndex + 1 + ''} 
                    dataTop="top" 
                    className="text-blue-800 dark:text-current"/>
              ))}
            </ProyectCard>
          ))}
      </div>
    </section>
    <section id='Miexperiencia' className='flex justify-center py-6 my-4 flex-col items-center'>
      <h4 className='text-blue-700 text-3xl dark:text-blue-200 brillo'>Mi experiencia</h4>
      <div className='w-full flex flex-col justify-evenly items-center relative md:flex-row'>
        <div className='relative w-1/2'>
          <p className='text-black dark:text-white'>Mi primera experiencia trabajando como desarrollador web fue en la empresa
            Movidagrafica, donde aprendi a usar wordpress y mejorar mis habilidades como programador como FullStack junior.
          </p>
        </div>
        <div id='timeline' className='relative py-4 before:absolute before:inset-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent dark:before:via-slate-300 before:via-black before:to-transparent before:mx-3'>
          <article id='timeline-art' className='is-active group relative flex w-full items-center justify-between md:w-2/4 xl:w-full xl:justify-normal xl:even:flex-row-reverse xl:even:text-right'>
            <i id='timeline-art-icon' className='flex absolute h-5 w-5 opacity-0 items-center justify-center rounded-full bg-blue-500 mx-1'></i>
            <div id='timeline-art-box' className='flex flex-col opacity-0 relative w-full h-full p-4 py-4 shadow-lg border min-w-max bg-indigo-100 border-gray-300 dark:bg-slate-900 dark:border-gray-800 dark:shadow-gray-800 dark:text-white rounded-lg backdrop-blur-lg transition hover:scale-105'>
              <h5>Movidagrafica</h5>
              <p>FullStack Developer</p>
              <span>2023</span>
            </div>
          </article>
        </div>
      </div>
    </section>
    <section id='Habilidades' className='flex justify-center py-6 my-4 flex-col items-center'>
    <h4 className='text-blue-700 text-3xl dark:text-blue-200 brillo'>Mis Habilidades</h4>
      <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-6 xl:gap-10 max-w-screen-2xl jusitify-around mx-auto px-5'>
      
      {BrandIcon.skills?.map((skill, skillIndex) => (
        <SkillCard titulo={skill.icon}>
                  <BrandIcon 
                    key={index + "_" + skillIndex} 
                    icon={skill.icon} 
                    dataId={skillIndex + 1 + ''} 
                    dataTop="top" 
                    className="text-blue-800 dark:text-current"
                    size="70"
                    />
        </SkillCard>
              ))}
      
        {/* <SkillCard titulo='HTML5'>
          <IconBrandHtml5 className='text-blue-800 dark:text-current' size={70}/>
        </SkillCard>
        <SkillCard titulo='CSS3'>
          <IconBrandCss3 className='text-blue-800 dark:text-current' size={70}/>
        </SkillCard>
        <SkillCard titulo='Javascript'>
          <IconBrandJavascript className='text-blue-800 dark:text-current' size={70}/>
        </SkillCard>
        <SkillCard titulo='SASS'>
          <IconBrandSass className='text-blue-800 dark:text-current' size={70}/>
        </SkillCard>
        <SkillCard titulo='Laravel'>
          <IconBrandLaravel className='text-blue-800 dark:text-current' size={70}/>
        </SkillCard>
        <SkillCard titulo='PHP'>
          <IconBrandPhp className='text-blue-800 dark:text-current' size={70}/>
        </SkillCard> */}
      </div>
    </section>
    <footer id='Footer' className='relative flex justify-center bg-gradient-to-t py-3 dark:from-indigo-950 dark:to-black from-indigo-300 to-blue-200 dark:text-gray-100'>
      <span>Copyright &copy; Designed by: 2024 - Elias Cordova</span>
    </footer>
    </>
  );
}

export default App;
