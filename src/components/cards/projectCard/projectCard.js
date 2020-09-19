import React from "react";
import "./projectCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function projectCard (props){

    function openUrlInNewTab(url) {
        var win = window.open(url, "_blank");
        win.focus();
      }
return (
<div className="project-card">
  <div className="project-image-div">
   <img src={props.image} alt="certificate" className="project-image" />
  </div>

  <div className="project-detail-div" >
  <h5 className="card-title">{props.title}</h5>
   <p className="card-subtitle">{props.description}</p>
  </div>

  <div className="project-card-footer" >
  <ul className="project-tag" >
    <li className="link-list">  <FontAwesomeIcon icon={["fab" , "github"]} className="icon-link" onClick={() => openUrlInNewTab(props.footer[0].url)}/> </li>
      <li className="link-list"> 
           <FontAwesomeIcon icon={["fas" , "external-link-alt"]} className="icon-link" onClick={() => openUrlInNewTab(props.footer[1].url)}/> </li>
            
     </ul>   
  </div>
    </div>
)

}

export default projectCard;