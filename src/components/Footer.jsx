import { IconBrandGithub, IconMail, IconBrandLinkedin } from "@tabler/icons-react"
import { t } from "i18next";

export function Footer(){
    return (
        <footer id='Footer' className='relative py-10 flex flex-col items-center bg-gradient-to-t dark:from-indigo-950 dark:to-black from-gray-200 to-stone-100 dark:text-gray-100 transition-colors duration-300'>
            <span className="font-black text-xl mb-4">{t('footer')}</span>
            <div className='flex gap-x-8 mb-4'>
                <a href="https://github.com/wayelias1" className="flex items-center gap-2 hover:text-indigo-500 transition-colors">
                    <IconBrandGithub /> Github
                </a>
                <a href="mailto:wayelias13@gmail.com" className="flex items-center gap-2 hover:text-indigo-500 transition-colors">
                    <IconMail /> Email
                </a>
                <a href="https://www.linkedin.com/in/elias-cordova/" className="flex items-center gap-2 hover:text-indigo-500 transition-colors">
                    <IconBrandLinkedin /> Linkedin
                </a>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 mt-6">Copyright &copy; Designed by: 2024 - Elias Cordova</span>
        </footer>
    )
}