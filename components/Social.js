import React from 'react'
import {socialLinks} from './Details/__socialDetails'
const Social = () => {
  return (
    <div>
      <div className="flex flex-row space-x-2 mb-1">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} rel="noreferrer" target="_blank">
            {React.createElement(link.icon, {
              className: link.colorClass,
              size: link.size,
            })}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Social;