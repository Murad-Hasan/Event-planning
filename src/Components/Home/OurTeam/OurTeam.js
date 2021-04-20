import React from "react";
import "./OurTeam.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const teamMember = [
    {
        name: 'Michel Watson',
        image: 'https://i.ibb.co/r5GH4fY/team-member-Img5.png'
    },
    {
        name: 'KL Rahul',
        image: 'https://i.ibb.co/XxxSGdj/team-member-Img4.png'
    },
    {
        name: 'Laila Nayem',
        image: 'https://i.ibb.co/X7Bcb4R/team-member-Img6.png'
    },
    {
        name: 'Sanju Samson',
        image: 'https://i.ibb.co/hRxWsCR/team-member-Img7.png'
    }
]

const OurTeam = () => {
  return (
    <div className="container py-5">
        <div>
            <h2 className='text-center'>
                Meet Our Team
            </h2>
            <hr className='line'/>
        </div>
      <div className="container row ">
          {
            teamMember.map(member => (
                <div className="col-lg-3 col-md-6 col-sm-12 mt-1">
                    <div className="profile-card">
          <img
            src={member.image}
            alt="Person"
            className="card__image"
          />
          <p className="card__name">{member.name}</p>
          <ul className="social-icons">
            <li>
              <a href="#">
                <i>
                  <FontAwesomeIcon icon={faInstagram} />
                </i>
              </a>
            </li>
            <li>
              <a href="#">
                <i>
                  <FontAwesomeIcon icon={faFacebook} />
                </i>
              </a>
            </li>
            <li>
              <a href="#">
                <i>
                  <FontAwesomeIcon icon={faTwitter} />
                </i>
              </a>
            </li>
            <li>
              <a href="#">
                <i>
                  <FontAwesomeIcon icon={faLinkedin} />
                </i>
              </a>
            </li>
          </ul>
          <button className="button draw-border">Follow</button>
          <button className="button draw-border">Message</button>
        </div>
                </div>
            ))
          }
      </div>
      </div>
  );
};

export default OurTeam;
