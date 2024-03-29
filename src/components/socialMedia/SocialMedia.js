import React from "react";
import './SocialMedia.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import codechefImg from "../../assets/images/codechef.png";

const socialMedia =()=>{
    const socialMediaLinks = {

        github: "https://github.com/sonali-singh97",
        linkedin: "https://www.linkedin.com/in/sonali-singh20/",
        gmail: "sonali122000@gmail.com",
        twitter : "https://twitter.com/sonali12_singh",
        codechef: "https://www.codechef.com/users/sonali2000"
         
      };
return(
    <div className='social-media-div'>
     <a href={socialMediaLinks.github} className="icon-button github"rel="noopener noreferrer" target="_blank">
     <FontAwesomeIcon icon={["fab","github"]} className="icons" /> 
        
      </a>

      <a href={socialMediaLinks.linkedin} className="icon-button linkedin" rel="noopener noreferrer" target="_blank">
        <FontAwesomeIcon icon={["fab","linkedin-in"]}  className="icons" /> 
      
      </a>

      <a href={`mailto:${socialMediaLinks.gmail}`} className="icon-button google" rel="noopener noreferrer" target="_blank">
        <FontAwesomeIcon icon={["fab","google"]}  className="icons" />  
        
      </a>

      <a href={socialMediaLinks.twitter} className="icon-button twitter" rel="noopener noreferrer" target="_blank">
        <FontAwesomeIcon icon={["fab","twitter"]}  className="icons" />  
        
      </a>
      <a href={socialMediaLinks.codechef} className="icon-button codechef" rel="noopener noreferrer" target="_blank">
        {/* <FontAwesomeIcon icon={["fab","twitter"]}  className="icons" />   */}
        <div className="icons">
        <img src={codechefImg} alt="codechef"  />
        </div>
      </a>


    </div>
)
}

export default socialMedia;