import { useTranslation } from 'react-i18next';
import { IconWorld } from '@tabler/icons-react';
import { useState } from 'react';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || 'es');

  const handleChange = (e) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    i18n.changeLanguage(selectedLang);
  };

  return (
    <div className="relative inline-block group">
      <label htmlFor="lang-select" className="cursor-pointer">
        <IconWorld
          className="block h-6 w-6 text-gray-700 dark:text-white group-hover:text-blue-500 transition-colors"
          aria-hidden="true"
        />
      </label>

      <select
        id="lang-select"
        value={language}
        onChange={handleChange}
        className="absolute top-0 left-0 w-6 h-6 opacity-0 cursor-pointer rounded-md
                  bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600
                  shadow-sm text-sm text-gray-700 dark:text-white py-1 px-2
                  focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      >
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
