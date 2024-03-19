import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact Me</h3>
          <p><a href='mailto:mailtomodupe@gmail.com'>Email: mailtomodupe@gmail.com</a></p>
          <p><a href='wa/me/+234-903-1703-106'>Phone: +234-903-1703-106</a></p>
        </div>
        <div className="footer-section">
          <h3>Follow Me</h3>
         <h3> <a href='https://www.linkedin.com/in/techietee/'>Linkedin</a></h3>
         <h3> <a href='https://github.com/techietee'>Github</a></h3>
         <h3> <a href='https://codesandbox.io/p/sandbox/keeper-app-part-1-starting-forked-stzrtl?file=%2Fsrc%2Findex.js'>CodeSandBox</a></h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
