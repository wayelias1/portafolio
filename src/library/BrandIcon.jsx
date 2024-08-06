import React from "react";
import {
  IconBrandBulma,
  IconBrandGithub,
  IconBrandReact,
  IconBrandJavascript,
  IconBrandHtml5,
  IconBrandSass,
  IconBrandCss3,
  IconBrandWordpress,
  IconBrandLaravel,
  IconBrandTailwind,
  IconBrandMysql,
  IconBrandPhp,
} from "@tabler/icons-react";
import { Tooltip } from "react-tooltip";

const losIconos = {
  Wordpress: IconBrandWordpress,
  Bulma: IconBrandBulma,
  Github: IconBrandGithub,
  React: IconBrandReact,
  Html5: IconBrandHtml5,
  Sass: IconBrandSass,
  Laravel: IconBrandLaravel,
  Php: IconBrandPhp,
  Css3: IconBrandCss3,
  Javascript: IconBrandJavascript,
  Mysql: IconBrandMysql
}
const IconComponent = losIconos[icono]

const BrandIcon = ({icon, dataId, dataTop, ...props}) => {
  return (
    <div
      data-tooltip-id={dataId}
      data-tooltip-content={icon}
      data-tooltip-place={dataTop}
    >
      <Tooltip id={dataId} />

      {/* {losiconos.map((icon) => (
         {icon == icono && <IconComponent {...props} />}
       ))
      } */}
      {icon == 'Wordpress' && <IconBrandWordpress {...props} />}
      {icon == 'Bulma' && <IconBrandBulma {...props} />}
      {icon == 'Github' && <IconBrandGithub {...props} />}
      {icon == 'React' && <IconBrandReact {...props} />}
      {icon == 'Html5' && <IconBrandHtml5 {...props} />}
      {icon == 'Javascript' && <IconBrandJavascript {...props} />}
      {icon == 'Sass' && <IconBrandSass {...props} />}
      {icon == 'Laravel' && <IconBrandLaravel {...props} />}
    </div>
  );
};

export default BrandIcon;