import React from 'react';


const Projects = () => {
  return (
    <section className="projects">
      <h2>Professional Projects</h2>
      <ul>
        <li>
          <h3>Full-Stack React Developer | Lincoln Financial Group, NC</h3>
          <p><strong>Sept 2022 – Present</strong></p>
          <ul>
            <li>At Lincoln Financial Group, I worked as a Full-Stack React Developer on a claims processing application, utilizing technologies like HTML5, CSS3, JavaScript, React.js, and Redux to develop highly responsive web pages. I implemented Single Page Applications (SPAs) using React-Router to enhance client navigation and improve task performance. </li>
            <li>In this role, I leveraged Redux for efficient state management, ensuring seamless data flow, and employed React Hooks to improve code readability and component reusability. I integrated third-party libraries like Material-UI to maintain a consistent design language and created reusable React components using both class-based and functional-based approaches.</li>
            <li>The backend development involved Node.js and Express.js, where I built a robust RESTful API, and I managed MongoDB/NoSQL databases to store and execute CRUD operations on claims data. I also utilized AWS S3 to integrate assets into React components and used Axios for efficient data fetching from the server. To ensure high code quality, I applied TypeScript, performed unit testing with Jest, and validated APIs with Postman. I utilized debugging tools like Chrome Developer Tools to resolve issues promptly and employed Git for version control and JIRA for effective project management and collaboration.</li>
            <li>The backend development involved Node.js and Express.js, where I built a robust RESTful API, and I managed MongoDB/NoSQL databases to store and execute CRUD operations on claims data. I also utilized AWS S3 to integrate assets into React components and used Axios for efficient data fetching from the server. To ensure high code quality, I applied TypeScript, performed unit testing with Jest, and validated APIs with Postman. I utilized debugging tools like Chrome Developer Tools to resolve issues promptly and employed Git for version control and JIRA for effective project management and collaboration.</li>
          </ul>
        </li>
        <li>
          <h3>React Developer | Vedas Labs, India</h3>
          <p><strong>Mar 2020 – July 2021</strong></p>
          <ul>
            <li>Developed and optimized web and mobile applications using HTML5, CSS3, JavaScript, and React, ensuring a seamless and responsive user experience across various platforms. Designed and implemented responsive layouts for both mobile and desktop interfaces, utilizing React-Router to create single-page applications with enhanced navigation. Leveraged React’s features, including props, states, and hooks like useState, to build dynamic and interactive UI components. </li>
            <li>Played a key role in developing and integrating React Native view components for mobile applications. Employed Redux for centralized state management and utilized REST APIs with Node.js and MongoDB for backend operations, including CRUD functionality. Maintained a clean and updated codebase with Git version control, emphasizing cross-browser compatibility and code reusability.</li>
          </ul>
        </li>
      </ul>

    </section>
  );
};

export default Projects;
