import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/wine_resize.png";
import projImg2 from "../assets/img/alcohol_resize.png";
import projImg3 from "../assets/img/credit_card.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import wine_quality_url from "../assets/videos/Wine quality prediction.mp4";
import credit_card_url from "../assets/videos/Credit card default fast pace.mp4";
import alcohol_url from "../assets/videos/alcohol_detection.mp4";

export const Projects = () => {
 
  const projects = [
    {
      title: "Red Wine Quality Prediction",
      description: "An interactive web app that predicts the quality of red wine based on its chemical properties.",
      imgUrl: projImg1,
      projectLink: "https://github.com/codedestructed007/Wine_Quality_prediction",
      featureSummary:"Wine Quality Prediction is an interactive web application that predicts the quality of red wine based on its chemical properties. Users can input data for wine features like fixed acidity, volatile acidity, citric acid, residual sugar, chlorides, free sulfur dioxide, total sulfur dioxide, density, pH, sulphates, and alcohol content. The application uses machine learning models to analyze this data and provide a prediction of the wine's quality.",
      Video_title : "Wine quality Prediction webapp",
      video_url : wine_quality_url
    },
    {
      title: "Alcohol Detection",
      description: "An AI-powered solution that detects signs of alcohol abuse in users by analyzing their medical history and behavior.",
      imgUrl: projImg2,
      projectLink: "https://github.com/codedestructed007/Drink_watch",
      featureSummary: "Alcohol Detection is an AI-powered solution that detects signs of alcohol abuse in users by analyzing their medical history and behavior. This project focuses on utilizing machine learning to assess users' data, including age, weight, medical history, and behavior patterns. The system provides valuable insights into the likelihood of alcohol abuse based on this analysis.",
      Video_title : "Alcohol detection webapp on Azure",
      video_url : alcohol_url

    },
    {
      title: "Credit Card default prediction",
      description: "A data-driven tool for predicting an individual's risk of credit card default based on their financial history and spending habits",
      imgUrl: projImg3,
      projectLink: "https://github.com/codedestructed007/CreditWatchdog",
      featureSummary:"Credit Card Default Prediction is an app that assesses the likelihood of credit card users defaulting on their payments. It uses machine learning models to analyze user data, including factors like credit history, payment behavior, and other financial indicators. The application provides valuable insights into the probability of credit card defaults.",
      Video_title : "Credit card default prediction Elastic Beanstalk",
      video_url : credit_card_url
    }
  ];


  const playVideo = (videoElement) => {
    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  };




  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>In these projects, I start with thorough planning and modular coding. I prioritize UI/UX to create user-friendly and visually appealing applications.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Overview</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Github links</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Video Dems</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {projects.map((project, index) => (
                          <Col key={index}>
                            <a href={project.projectLink} target="_blank" rel = "noopener noreferrer">
                              {project.title}<br></br>
                              {project.description}
                            </a>
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane> 
                    <Tab.Pane eventKey="third">
                      <Row>
                        {projects.map((project, index) => (
                          <Col key={index}>
                            <h4>{project.Video_title}</h4>
                      
                            <video width="210" height="280" controls>
                            <source src={project.video_url} type="video/mp4" />
                          </video> 
                              
                            
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt = "background"src={colorSharp2}></img>
    </section>
  )
}
