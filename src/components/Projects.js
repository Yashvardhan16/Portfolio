import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects2 = [

    {
      title: "MultiThreaded Download Manager",
      description: "Multi Threading & OOPS",
      imgUrl: projImg4,
    },
    {
      title: "MultiThreaded Download Manager",
      description: "Multi Threading & OOPS",
      imgUrl: projImg5,
    },
    {
      title: "MultiThreaded Download Manager",
      description: "Multi Threading & OOPS",
      imgUrl: projImg6,
    },
   
  ];
  const projects1 = [
    {
      title: " Food Ordering Website",
      description: "Web Development",
      imgUrl: projImg1,
    },
    {
      title: " Food Ordering Website",
      description: "Web Development",
      imgUrl: projImg2,
    },
    {
      title: " Food Ordering Website",
      description: "Web Development",
      imgUrl: projImg3,
    },
  ];
  const projects3 = [
    {
      title: "Personal Healthcare Monitoring Website",
      description: "Web Development & Software Engineering Concepts.",
      imgUrl: projImg7,
    },
    {
      title: "Personal Healthcare Monitoring Websit",
      description: "Web Development & Software Engineering Concepts.",
      imgUrl: projImg8,
    },
    {
      title: "Personal Healthcare Monitoring Websit",
      description: "Web Development & Software Engineering Concepts.",
      imgUrl: projImg9,
    },
  ];

  
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Projects related to Web Development and Software Engineering</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project1, index) => {
                            return (
                              <ProjectCard
                              key={index}
                              {...project1}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">  
                      <Row>
                        {
                          projects2.map((project2, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project2}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects3.map((project3, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project3}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="first">
                      <p> Food Ordering Website Based on JavaScript,HTML5,CSS and PHP.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>MULTITHREADED DOWNLOAD MANAGER Based on Core Java Concepts Such as Multi-Theading and OOPS.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Personal Health Monitoring Website Based On JavaScript,HTML5,CSS,SQL and Software Engineering concepts </p>
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
