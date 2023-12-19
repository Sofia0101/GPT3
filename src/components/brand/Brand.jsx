import React from 'react';
import "./brand.css";
import {google, slack, shopify, dropbox, atlassian} from "./imports.js";


const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img className='' src={google} alt="google" />
      </div>
      <div>
        <img className='' src={slack} alt="slack" />
      </div>
      <div>
        <img className='' src={shopify} alt="shopify" />
      </div>
      <div>
        <img className='' src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img className='' src={atlassian} alt="atlassian" />
      </div>
    </div>
  )
}

export default Brand 