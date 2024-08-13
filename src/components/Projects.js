import React from 'react';
import AcademicProjects from './AcademicProjects';
import PersonalProjects from './PersonalProjects';

const Projects = () => {
  return (
    <section className="projects">
      <h2>Professional Projects</h2>
      <ul>
        <li>
          <h3>Full-Stack React Developer | Lincoln Financial Group, NC</h3>
          <p><strong>Sept 2022 – Present</strong></p>
          <ul>
            <li>Developed responsive web pages using HTML5, CSS3, JavaScript, React.js, and Redux, ensuring optimal user experiences.</li>
            <li>Implemented Single Page Applications (SPAs) with React-Router, improving client navigation and application task performance.</li>
            <li>Utilized Redux for efficient state management, ensuring seamless data flow and enhancing application stability.</li>
            <li>Crafted visually appealing web pages using SASS, incorporating dynamic styles with variables, mixing, operations, and functions.</li>
            <li>Implemented and managed state using React Hooks, enhancing code readability and facilitating component reusability.</li>
            <li>Integrated third-party UI libraries like Material-UI, streamlining development and maintaining a consistent design language.</li>
            <li>Created reusable React components, employing both class-based and functional-based approaches for versatility.</li>
            <li>Developed a robust backend with Node.js, serving as a RESTful API for the React-based frontend.</li>
            <li>Applied TypeScript for better code quality and maintainability.</li>
            <li>Used Jest for unit testing and Postman for API testing to ensure high code quality.</li>
            <li>Utilized Express.js for a lightweight and efficient server, managing HTTP requests and routing.</li>
            <li>Managed MongoDB/NoSQL collections, ensuring efficient data storage, and executed CRUD operations using Node APIs.</li>
            <li>Proficiently integrated AWS S3-hosted assets into React components, optimizing content delivery.</li>
            <li>Utilized Axios to fetch and retrieve JSON data from an AWS S3 bucket within React components.</li>
            <li>Implemented High-Order Components to enhance component reusability and maintainability.</li>
            <li>Employed Axios/Fetch libraries for asynchronous data fetching from the server, ensuring efficient application performance.</li>
            <li>Leveraged debugging tools like Chrome Developer Tools to investigate and resolve issues promptly.</li>
            <li>Used Git for version control and JIRA for effective project management and collaboration.</li>
          </ul>
        </li>
        <li>
          <h3>React Developer | Vedas Labs, India</h3>
          <p><strong>Mar 2020 – July 2021</strong></p>
          <ul>
            <li>Developed web pages using HTML5, CSS3, JavaScript, and React, ensuring a seamless user experience.</li>
            <li>Created responsive designs for both mobile and desktop platforms using HTML and CSS.</li>
            <li>Implemented React-Router to transform the application into a single-page application, enhancing user navigation.</li>
            <li>Utilized React.js features such as props, states, and keys to build UI components for optimal interactivity.</li>
            <li>Worked with HTML, CSS, JavaScript, and JSON to create a cohesive and visually appealing web application.</li>
            <li>Played a key role in developing React Native view components and their seamless integration.</li>
            <li>Implemented React state hooks, including `useState`, for effective component-level state management, enhancing UI reactivity.</li>
            <li>Integrated Redux for centralized state management, ensuring a predictable and controlled data flow.</li>
            <li>Developed both class-based and functional-based components, emphasizing reusability across the web application.</li>
            <li>Utilized React Hooks to develop UI components, promoting modular and reusable code.</li>
            <li>Created a responsive webpage using React JS, ensuring compatibility across various browsers and devices.</li>
            <li>Integrated REST APIs and performed CRUD operations using Node.js and MongoDB.</li>
            <li>Maintained the codebase with frequent updates and revisions using GIT version control.</li>
          </ul>
        </li>
      </ul>

      <AcademicProjects />
      <PersonalProjects />
    </section>
  );
};

export default Projects;
