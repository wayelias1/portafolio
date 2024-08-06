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
  IconBrandWordpress,
  IconBrandBulma,
  IconBrandGithub,
  IconBrandReact,
  IconBrandHtml5,
  IconBrandSass,
  IconBrandLaravel,
  IconBrandPhp,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandMysql
}

const BrandIcon = ({icon, dataId, dataTop, ...props}) => {
  const IconComponent = losIconos[`IconBrand${icon}`]
  return (
    <div
      data-tooltip-id={dataId}
      data-tooltip-content={icon}
      data-tooltip-place={dataTop}
    >
      <Tooltip id={dataId} />

      <IconComponent {...props}/>

    </div>
  );
};

export default BrandIcon;