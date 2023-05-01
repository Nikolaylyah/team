import React from "react";
import "../Team/team.module.scss";
import { name, imgSrc, status, sociallinkedin, socialfacebook, socialgithub } from "../teams.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGitHub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

// компонент для отображения одного члена команды
const TeamMember = ({ imgSrc, name, status, sociallinkedin, socialfacebook,socialgithub }) => {
  return (
    <div
      className="col-md-3 col-sm-6 col-xs-12 wow fadeInUp"
      data-wow-duration="1s"
      data-wow-delay="0.1s"
      data-wow-offset="0"
    >
      <div className="our-team">
        <div className="team_img">
          <img src={imgSrc} alt="team-image" />
          <ul className="social">
            <li>
              <a href={socialfacebook}>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href={sociallinkedin}>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href={socialgithub}>
                <FontAwesomeIcon icon={faGitHub} />
              </a>
            </li>
          </ul>
        </div>
        <div className="team-content">
          <h3 className="title">{name}</h3>
          <span className="post">{status}</span>
        </div>
      </div>
    </div>
  );
};

// компонент для отображения всех членов команды
const Team = () => {
  return (
    <section id="team" className="team_member section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h1>Meet our experts</h1>
          <p>
            If you give a person a program, you will keep him busy for one day.
            If you teach a person to program, you will keep him busy for life.
          </p>
        </div>
        <div className="row text-center">
          <TeamMember
            imgSrc="https://bootdey.com/img/Content/avatar/avatar7.png"
            name="Alieksieiev Vladyslav"
            status="Team-Lead"
          />
          <TeamMember
            imgSrc="https://bootdey.com/img/Content/avatar/avatar6.png"
            name="Averkin Maksym"
            status="Scrum master"
          />
          <TeamMember
            imgSrc="https://bootdey.com/img/Content/avatar/avatar2.png"
            name="Podolianko Aleksandr"
            status="Developer"
          />
          <TeamMember
            imgSrc="https://bootdey.com/img/Content/avatar/avatar3.png"
            name="Yurov Igor"
            status="Developer"
          />
          <TeamMember
            imgSrc="https://bootdey.com/img/Content/avatar/avatar7.png"
            name="Ivan"
            status="Developer"
          />
          <TeamMember
            imgSrc="https://bootdey.com/img/Content/avatar/avatar7.png"
            name="Pysarenko Tetiana"
            status="Developer"
          />
          <TeamMember
            imgSrc="https://bootdey.com/img/Content/avatar/avatar7.png"
            name="Vyshnevska Maryna"
            status="Developer"
          />
          <TeamMember
            imgSrc="https://bootdey.com/img/Content/avatar/avatar7.png"
            name="Lyakh Nikolay"
            status="Developer"
          />
          <TeamMember
            imgSrc="https://bootdey.com/img/Content/avatar/avatar7.png"
            name="Lipchanskyi Pavlo"
            status="Developer"
          />
          <TeamMember
            imgSrc="https://bootdey.com/img/Content/avatar/avatar7.png"
            name="Litvin Serhii"
            status="Developer"
          />
          <TeamMember
            imgSrc="https://bootdey.com/img/Content/avatar/avatar7.png"
            name="Nikolin Dmytro"
            status="Developer"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;


