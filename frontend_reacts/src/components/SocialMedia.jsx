import React from 'react';
import { BsTwitter, BsInstagram , BsGithub} from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://github.com/Mumo01">
    <div>
      <BsGithub/>
    </div>
    </a>
    <div>
      <BsTwitter/>
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;
