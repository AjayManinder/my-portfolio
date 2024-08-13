import React from 'react';

const AcademicProjects = () => {
  return (
    <section className="academic-projects">
      <h2>Academic Projects</h2>
      <ul>
        <li>
          <h3>Movie Suggestion Application (Automatic Deployment using AWS Amplify)</h3>
          <p>Developed a single-page movie suggestion application using an open-source API with a collection of movies.</p>
          <ul>
            <li>Integrated the app with AWS Amplify and added the working repository to the AWS Amplify console for automatic deployment.</li>
            <li>Created an IAM role using CI/CD pipelines for automatic deployments upon code commits to GIT.</li>
            <li>Implemented a search bar for displaying and suggesting results based on keyword searches.</li>
            <li>Used the Axios library for making API calls.</li>
            <li>Developed a responsive page with a solid understanding of CSS and CSS grid layout for the front-end view.</li>
          </ul>
        </li>
        <li>
          <h3>Member Management System and Authentication using AWS Cognito</h3>
          <p>Developed a member management system application with user authentication using AWS Cognito.</p>
          <ul>
            <li>Integrated AWS Cognito and developed a login page for the admin based on the pool ID and client ID from AWS Cognito.</li>
            <li>Created a Footer and Header component with a Navbar, utilizing React Router for link navigation.</li>
            <li>Implemented a dropdown visible only to the admin upon successful authentication.</li>
            <li>Used protected routes for pages visible only to the admin.</li>
            <li>Developed a dropdown with a table displaying member data, performing CRUD operations, and implementing a master-detail view using the DevExtreme library.</li>
          </ul>
        </li>
        <li>
          <h3>Forest Fire Prediction using Support Vector Machines</h3>
          <p>Predicted forest fire occurrences using support vector machines and visualized data using R-programming.</p>
          <ul>
            <li>Utilized a dataset from the UCI repository, performed data pre-processing, and reduced data by selecting necessary attributes.</li>
            <li>Employed plotting methods like bar-chart, boxplot, and plot() for visualizing results.</li>
            <li>Used the support vector machine function to identify the number of support vectors.</li>
            <li>Applied predict() for data classification and created tables based on predicted values.</li>
            <li>Generated plots illustrating the area burnt in a month to predict the month of forest fire occurrences.</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default AcademicProjects;
