import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
        
      <a href="mailto:your-email@example.com" style={styles.link}>Email</a>
      <a href="https://www.linkedin.com/in/your-profile" style={styles.link}>LinkedIn</a>
      <a href="https://github.com/your-username" style={styles.link}>GitHub</a>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#C6BBB2',
    padding: '4rem 0',
    textAlign: 'center',
  },
  link: {
    color: 'white',
    margin: '0 15px',
    textDecoration: 'none',
  },
};

export default Footer;