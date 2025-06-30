import { IconBrandGithub, IconMail, IconBrandLinkedin } from "@tabler/icons-react"
export function Footer(){
    return (
        <footer id='Footer' className='relative py-10 grid justify-center bg-gradient-to-t dark:from-indigo-950 dark:to-black from-indigo-200 to-blue-100 dark:text-gray-100 transition-colors duration-300'>
            <span className="font-black text-xl">Contactos:</span>
            <div className='flex w-full justify-evenly'>
                <a href="https://github.com/wayelias1"><IconBrandGithub></IconBrandGithub> Github</a>
                <a href="wayelias13@gmail.com"><IconMail></IconMail>Email</a>
                <a href="https://www.linkedin.com/in/elias-cordova/"><IconBrandLinkedin></IconBrandLinkedin> Linkedin</a>
            </div>
            <span>Copyright &copy; Designed by: 2024 - Elias Cordova</span>
        </footer>
    )
}