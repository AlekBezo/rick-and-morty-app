import "./Footer.scss";

const Footer = ({ count, pages }) => {
  return (
    <footer className="footer">
      <h2>Characters: {count}</h2>
      <h2>Pages: {pages}</h2>
      <div className="status">
        <h2>Server status</h2> <div className="dot"></div>
      </div>
    </footer>
  )
};

export default Footer;
