import React from 'react';
import { Card, Navbar, Nav } from 'react-bootstrap';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './AboutMe.css'; // Ensure this path is correct
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';


import profileImage from '../../assets/profile.png'; // Ensure this path is correct
import tables4u from '../../assets/tables4u.png';
import mhaccImage from '../../assets/MHACC.png';
import mmumage from '../../assets/mmu.png';
import flightPath from '../../assets/delta.png';
import songProject from '../../assets/songProject.png';
import wpi from '../../assets/wpilogo.png';
import radicalAI from '../../assets/radicalAI.png';

// import catPlaceholder from '../../assets/funny-dancing-cats-fb3-png__700.jpg';

const AboutMe = () => {
  return (
    <div style={{ display: 'flex' }} >
      <div className="navbar" style={{ display: 'flex' }}>
        <div className="resume-container" style={{ padding: '40px', width: '100%' }}>

          <div className="aboutMe">
            <section id="about">
              <br />
              <h1>About Me</h1>

              <div className="about-me-image">
                <img
                  src={profileImage}
                  alt="profile"
                  className="profile-picture"
                />
              </div>

              <p>
                I am actively looking for Summer 2025 internships in <b>software engineering, DevOps, and data science, </b> so please feel free to reach out to me via email at ekli@wpi.edu if you are actively recruiting!
              </p>
              <p>
                I am a <b><span style={{ color: 'crimson' }}>Junior</span> pursuing a <span style={{ color: 'crimson' }}>Bachelor of Science</span> degree in <span style={{ color: 'crimson' }}>Computer Science</span> at <span style={{ color: 'crimson' }}>Worcester Polytechnic Institute</span></b> along with a <b>minor in <span style={{ color: 'crimson' }}>Data Science</span>.</b> Throughout my academic and professional journey, I have gained experience in various programming languages including <b>Java, C, C++, JS, and Python </b>. In addition, I have a strong background in <b>problem-solving and DSA.</b>
              </p>
              <p>
                You can click to see my
                <a
                  href="https://drive.google.com/file/d/1JFIr94rAh55e3Ejy0-m2L6_DnPeRewej/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong style={{ color: 'white' }}> resume </strong>
                </a>
                or check out ways to contact me below.
              </p>
            </section>
          </div>

          <div style={{ height: '80px' }} id="skills"></div>

          <div className="skills">
            <section className="skills">
              <h1>Skills</h1>
              <p><b>Languages: </b>Java; C/C++; Python; JavaScript; x86 assembly; SQL; HTML/CSS; Racket</p>
              <p><b>Technologies: </b>Data Structures and Algorithms, Machine Learning, Spring Boot; Node.js; Flask; JUnit; Bootstrap; React.js</p>
              <p><b>Developer Tools: </b>Linux; MongoDB; Postman; Git; Github Actions; Docker; Firebase; AWS EC2; S3; Agile</p>
            </section>
          </div>
          <div className="experience">
            <section id="experience" style={{ padding: '20px 0' }}>
              <h1 style={{ color: 'crimson', textAlign: 'center', marginBottom: '30px' }}>Experience</h1>

              <div className="experienceContainer" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>

                <Card className="card-hover" style={{ width: '20rem', height: '23rem', margin: '5px', backgroundColor: 'black', border: '1px solid white' }}>
                  <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Fidelity_Investments_logo_white_on_green.svg" style={{ height: '100px', objectFit: 'contain', background: '#007142' }} />
                  <br />
                  <Card.Body>
                    <Card.Title style={{ color: '#D1D5DB' }}><b> Software Engineer Intern @ Fidelity Investments </b> <span style={{ color: '#9CA3AF', fontSize: '0.9em' }}></span></Card.Title>
                    <Card.Text style={{ color: '#9CS3AF', textAlign: 'left' }}>
                      - Streamlined app creation-to-deployment with custom NX generators and Nunjucks templates, reducing a 2-day manual process to 5 minutes; led cross-team evaluations of multiple approaches and secured stakeholder buy-in.
                      <br /><br />
                      - Led an effort to automate migrating end-to-end tests from Cypress to Playwright for internal applications, improving testing efficiency and reducing flakiness.
                      <br /><br />
                      - Initiated research and developed Proofs of Concept for integrating Model Context Protocol into the internal portfolio management tool, delivering key technical documentation and analysis to inform strategic decisions.
                    </Card.Text>
                    <br />
                  </Card.Body>
                </Card>

                <Card className="card-hover" style={{ width: '20rem', height: '23rem', margin: '5px', backgroundColor: 'black', border: '1px solid white' }}>
                  <Card.Img variant="top" src={wpi} style={{ height: '100px', objectFit: 'cover' }} />
                  <br />
                  <Card.Body>
                    <Card.Title style={{ color: '#D1D5DB' }}><b> Undergraduate Teaching Assistant @ Worcester Polytechnic Institute </b></Card.Title>
                    <Card.Text style={{ color: '#9CS3AF', textAlign: 'left' }}>
                      - Provided support for undergraduate courses by holding weekly 3-hour office hours, assisting in lab sections, and grading
                      approximately 90 homework submissions bi-weekly.
                      <br /><br />
                      - Ensured fair and consistent evaluation of student performance.
                      <br /><br />
                      - Developed supplementary materials and tutorials to enhance student understanding of course concepts.
                    </Card.Text>
                    <br />
                  </Card.Body>
                </Card>

                <Card className="card-hover" style={{ width: '20rem', height: '23rem', margin: '5px', backgroundColor: 'black', border: '1px solid white' }}>
                  <Card.Img variant="top" src={radicalAI} style={{ height: '80px', objectFit: 'cover' }} />

                  <Card.Body>
                    <Card.Title style={{ color: '#D1D5DB' }}><b> Software Engineer @ Radical AI </b></Card.Title>
                    <Card.Text style={{ color: '#9CS3AF', textAlign: 'left' }}>
                      - Increased user engagement by 70% by leveraging React (JavaScript) and Redux to overhaul the chat discussion feature, implementing a more intuitive and responsive user interface.
                      <br /><br />
                      - Collaborated closely with AI and Product teams, leveraging Agile Scrum methodologies (including daily stand-ups and sprint planning) to ensure seamless integration and timely deployment of new features.
                      <br /><br />
                      - Demonstrated proficiency in Firebase, Vercel, React.js, Node.js, Express.js, Python, and Git for version control.
                    </Card.Text>
                    <br />
                  </Card.Body>
                </Card>
              </div>
            </section>
          </div>

          <div className="projects">
            <section id="projects">
              <h1>Projects</h1>
              <div className="projects-container" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Card className="card-hover" style={{ width: '20rem', height: '35rem', margin: '5px', backgroundColor: 'black', border: '1px solid white' }}>
                  <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png" style={{ height: '150px', objectFit: 'cover', background: '#fff' }} />
                  <br />
                  <Card.Body>
                    <Card.Title style={{ color: '#D1D5DB' }}><b> EMERGENCY DATA DASHBOARD </b> <span style={{ color: '#9CA3AF', fontSize: '0.9em' }}></span></Card.Title>
                    <Card.Text style={{ color: '#9CS3AF', textAlign: 'left' }}>
                      - Led a 4-person team to build a Flask–React dashboard with real-time resident data and alert capabilities, enabling Puerto Rican communities to customize, centralize, and share emergency preparedness guides and resources.
                      <br /><br />
                      - Built a WhatsApp broadcast system reaching 1,000+ residents to automate emergency communications and reduce coordination time, improving overall response efficiency before and after disasters.
                      <br /><br />
                      - Delivered the platform to community leaders, along with training and bilingual documentation, ensuring a smooth handoff and paving the way for future AI-driven enhancements.
                    </Card.Text>
                    <br />
                    <Stack spacing={2} direction="row" justifyContent="center">
                      <Button variant="contained" href="https://github.com/EricLi3/EmergencyDataDashboard">GitHub</Button>
                      <Button variant="contained" href="https://github.com/EricLi3/automatingBroadcasts">GitHub</Button>
                    </Stack>
                  </Card.Body>
                </Card>

                <Card className="card-hover" style={{ width: '20rem', height: '35rem', margin: '5px', backgroundColor: 'black', border: '1px solid white' }}>
                  <Card.Img variant="top" src={tables4u} style={{ height: '150px', objectFit: 'cover' }} />
                  <br />
                  <Card.Body>
                    <Card.Title style={{ color: '#D1D5DB' }}><b> TABLES4U </b></Card.Title>
                    <Card.Text style={{ color: '#9CS3AF', textAlign: 'left' }}>
                      - Collaborated in a team of 4 to create a full-stack restaurant management system, including use case definitions, UML diagrams, and a MySQL database through database mapping, ensuring data integrity and efficient queries.
                      <br /><br />
                      - Modeled API architecture with YAML, developed and tested a RESTful API using AWS Lambda and API
                      Gateway, validated JSON responses with Postman, and applied best practices for error handling and validation.
                      <br /><br />
                      - Built a scalable Next.js frontend using Typescript with JWT-based authentication, page-based routing, and
                      deployed the application via AWS S3, collaborating on UI design using Figma.
                    </Card.Text>
                    <br />
                    <Stack spacing={2} direction="row" justifyContent="center">
                      <Button variant="contained" href="https://github.com/EricLi3/tables4u">GitHub</Button>
                      <Button variant="contained" href="https://tables4u.vercel.app/">Website</Button>
                    </Stack>
                  </Card.Body>
                </Card>

                <Card className="card-hover" style={{ width: '20rem', height: '35rem', margin: '5px', backgroundColor: 'black', border: '1px solid white' }}>
                  <Card.Img variant="top" src={songProject} style={{ height: '150px', objectFit: 'cover' }} />
                  <br />
                  <Card.Body>
                    <Card.Title style={{ color: '#D1D5DB' }}><b> MUSIC DISCOVERY APP </b></Card.Title>
                    <Card.Text style={{ color: '#9CS3AF', textAlign: 'left' }}>
                      - Developed a <b>REST API</b> using Spring Boot and MongoDB, including 20+ endpoints, and tested it with Postman.
                      <br /><br />
                      - Built a responsive user interface using <b>React/MUI, Bootstrap, and CSS </b>for exploring, rating, and commenting on 200+ songs. Integrating the <b>Last.FM API</b> to fetch song information
                      <br /><br />
                      - Utilized Docker for containerization of the backend and an <b>AWS EC2</b> instance for deployment. Implemented CI/CD pipelines with <b>GitHub Actions</b> to automate deployment to <b>AWS S3</b>, achieving a <b>40% reduction</b> in deployment times.
                    </Card.Text>
                    <br />
                    <Stack spacing={2} direction="row" justifyContent="center">
                      <Button variant="contained" href="https://github.com/EricLi3/Music-Discovery-API">GitHub</Button>
                      <Button variant="contained" href="http://songchatroom-react-app.s3-website.us-east-2.amazonaws.com/">Website</Button>
                    </Stack>
                  </Card.Body>
                </Card>

                <Card className="card-hover" style={{ width: '20rem', height: '35rem', margin: '5px', backgroundColor: 'black', border: '1px solid white' }}>
                  <Card.Img variant="top" src={mhaccImage} style={{ height: '150px', objectFit: 'cover' }} />
                  <br />
                  <Card.Body>
                    <Card.Title style={{ color: '#D1D5DB' }}><b> ASIAN MENTAL HEALTH PLATFORM </b> <br /><i>In association with the Mental Health Association for Chinese Communities</i></Card.Title>
                    <Card.Text style={{ color: '#9CS3AF', textAlign: 'left' }}>
                      - Led a <b>3-person team</b> to design and implement a platform in <b>7 weeks</b>. Implemented a user-friendly experience using <b>HTML, CSS, and JS.</b> Deployed the site on <b>Firebase</b> and implemented <b>CI/CD using GitHub Actions.</b>
                      <br /><br />
                      - Developed a chatbot with <b>IBM WatsonX</b> incorporating <b>10 intents and 5 entities</b> to connect users to mental health professionals and resources. Also provided <b>multilingual guides</b> on mental health stigma using the <b>Google Translate API.</b>
                      <br /><br />
                      - Presented to <b>30 stakeholders</b>, fielding <b>15 questions</b> and receiving <b>positive feedback</b> on the project's potential.

                    </Card.Text>
                    <br />

                    <Stack spacing={2} direction="row" justifyContent="center">
                      <Button variant="contained" href="https://github.com/EricLi3/Contemporary-Chinese-Final-Project">GitHub</Button>
                      <Button variant="contained" href="https://contemporary-chinese-final-project.vercel.app/">Website</Button>
                    </Stack>
                  </Card.Body>
                </Card>

                <Card className="card-hover" style={{ width: '20rem', height: '30rem', margin: '5px', backgroundColor: 'black', border: '1px solid white' }}>
                  <Card.Img variant="top" src={flightPath} style={{ height: '150px', objectFit: 'cover' }} />
                  <br />
                  <Card.Body>
                    <Card.Title style={{ color: '#D1D5DB' }}><b> TRANSPORTATION NETWORK ANALYSIS </b></Card.Title>
                    <Card.Text style={{ color: '#9CS3AF', textAlign: 'left' }}>
                      - Analyzed Delta and Southwest flight networks, processing <b>10,000+ routes</b> with <b>BFS</b> and <b>Floyd-Warshall</b>. Created a tool
                      for <b>shortest, longest, and average flight distances</b>, and determined the <b>longest and shortest path</b> between airports.
                      <br /><br />

                      - Developed a <b>pathfinding system</b> on a <b>10,796-vertex, 12,986-edge U.S. highway network</b>, comparing the <b>effectiveness</b> of <b>BFS, DFS, and Dijkstra’s</b> algorithms for pathfinding
                    </Card.Text>
                    <br />

                    <Stack spacing={2} direction="row" justifyContent="center">
                      <Button variant="contained" href="https://github.com/EricLi3/CS2223-HW-assignments/blob/main/ekli-HW4.zip">GitHub</Button>
                    </Stack>
                  </Card.Body>
                </Card>

                <Card className="card-hover" style={{ width: '20rem', height: '30rem', margin: '5px', backgroundColor: 'black', border: '1px solid white' }}>
                  <Card.Img variant="top" src={mmumage} style={{ height: '150px', objectFit: 'cover' }} />
                  <br />
                  <Card.Body>
                    <Card.Title style={{ color: '#D1D5DB' }}><b> VIRTUAL MEMORY MANAGER SIMULATION </b></Card.Title>
                    <Card.Text style={{ color: '#9CS3AF', textAlign: 'left' }}>
                      - Implemented a <b>memory manager in C</b>, simulating virtual memory with <b>paging and swapping</b>, including <b>address translation</b>, per-process <b>page tables</b>, and efficient memory operations within a <b>64-byte simulated</b> physical memory
                      <br /><br />
                      - Enhanced system capabilities by supporting <b>disk swapping</b> with a robust <b>round-robin eviction</b> strategy, ensuring process isolation and resource efficiency

                    </Card.Text>
                    <Stack spacing={2} direction="row" justifyContent="center">
                      <Button variant="contained" href="https://github.com/EricLi3/Operating-Systems/tree/main/Projects/Project%203">GitHub</Button>
                      {/* <Button variant="contained" href="https://contemporary-chinese-final-project.vercel.app/">Website</Button> */}
                    </Stack>
                  </Card.Body>
                </Card>

                {/* </div> */}

              </div>
            </section>
          </div>

          <div className="footer">
            <section id="contact">
              <h2 class="title"> Contact Me </h2>

              <div className="contacts">
                <a href="mailto:ekli@wpi.edu" target="_blank" rel="noopener noreferrer" className="icon-container email">
                  <FaEnvelope size={40} />
                </a>
                <a href="https://www.linkedin.com/in/eric-k-li" target="_blank" rel="noopener noreferrer" className="icon-container linkedin">
                  <FaLinkedin size={40} />
                </a>
                <a href="https://github.com/EricLi3" target="_blank" rel="noopener noreferrer" className="icon-container github">
                  <FaGithub size={40} />
                </a>
                <a href="https://drive.google.com/file/d/1JFIr94rAh55e3Ejy0-m2L6_DnPeRewej/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="icon-container resume">
                  <FaFileAlt size={40} />
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;