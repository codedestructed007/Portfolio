import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/wine_resize.png";
import projImg2 from "../assets/img/alcohol_resize.png";
import projImg3 from "../assets/img/heart_resize.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
 
  const projects = [
    {
      title: "Red Wine",
      description: "An interactive web app that predicts the quality of red wine based on its chemical properties.",
      imgUrl: projImg1,
      projectLink: "https://github.com/codedestructed007/Wine_Quality_prediction",
      featureSummary:"Wine Quality Prediction is an interactive web application that predicts the quality of red wine based on its chemical properties. Users can input data for wine features like fixed acidity, volatile acidity, citric acid, residual sugar, chlorides, free sulfur dioxide, total sulfur dioxide, density, pH, sulphates, and alcohol content. The application uses machine learning models to analyze this data and provide a prediction of the wine's quality."
    },
    {
      title: "Alcohol Detection",
      description: "An AI-powered solution that detects signs of alcohol abuse in users by analyzing their medical history and behavior.",
      imgUrl: projImg2,
      projectLink: "https://github.com/codedestructed007/Drink_watch",
      featureSummary: "Alcohol Detection is an AI-powered solution that detects signs of alcohol abuse in users by analyzing their medical history and behavior. This project focuses on utilizing machine learning to assess users' data, including age, weight, medical history, and behavior patterns. The system provides valuable insights into the likelihood of alcohol abuse based on this analysis."
    },
    {
      title: "Heart Health",
      description: "A data-driven tool for predicting an individual's risk of heart attack based on their medical history and lifestyle factors.",
      imgUrl: projImg3,
      projectLink: "https://github.com/codedestructed007/Streamlit-heart_health",
      featureSummary:"Heart Health is a data-driven tool developed to predict an individual's risk of a heart attack based on their medical history and lifestyle factors. This project focuses on leveraging machine learning to assess various parameters such as cholesterol levels, blood pressure, lifestyle choices, and family medical history. By analyzing this data, the system can provide an estimate of a person's heart attack risk."
    }
  ];
  

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
                      <Nav.Link eventKey="third">Summary</Nav.Link>
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
                            <a href={project.projectLink} target="_blank">
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
                            <h4>{project.title}</h4>
                            <p> {project.featureSummary}</p>
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
