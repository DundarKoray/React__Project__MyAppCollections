import React from 'react';
import SimpleHero from '../SimpleHero/SimpleHero';
import Banner from '../Banner/Banner';
import InnerNavBar from '../InnerNavBar/InnerNavBar';
import Koray from './Koray.jpeg';
import './style.css'

const About = () => {
    return (
        <SimpleHero>

        <section className="section about-me" id="about">
      <div className="container">
        <div className="about-me-wrapper">
          <div className="about-me-text">
            <h1>
              this is <br /> <span className="highlight">my </span>
              story
            </h1>
            <p>
              I am graduated with a BBA in Innovative Business Services from
              Satakunta University of Applied Sciences in 2015.
            </p>
            <p>
              Since my graduation I have been constantly learning frontend
              technologies. Last year, I've attended a full-time web development
              course from 9-17 every-week days for a year. I've been creating
              projects using JS, React, Gatsby, D3.js, Firebase, Contentful and
              GraphQL. Here is my GitHub account and project titles down below
              are also clickable.
            </p>
            <p>
              I am a self motivated person who is everyday eagerly coding and
              learning more. I am looking for an opportunity where I am able to
              apply my current skills and improve my coding skills to a further
              degree.
            </p>
            <div>
              <a
                href="https://drive.google.com/open?id=1jfZm8MY3wXE_BROqRth5TczLvdHN2vQZ"
                target="_blank"
                rel="noopener noreferrer"
                >
                <button className="btn-primary">My Resume</button>
              </a>
            </div>
          </div>
          <img className="about_me_image" src={Koray}/>
          {/* <Img
            className="about_me_image"
            fluid={image}
            imgStyle={{ objectPosition: "center top" }}
        /> */}
          {/* <div style={imgStyles} className="about_me_image"></div> */}
        </div>
      </div>
    </section>      
        </SimpleHero>
                   
    
    );
};

export default About;
  