import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2024 NepalCodes. All rights reserved.</p>
      <ul>
        <li>
          <a href="https://facebook.com/NepalCodes" target="_blank">
            Facebook
          </a>
        </li>
        <li>
          <a href="https://twitter.com/NepalCodes" target="_blank">
            Twitter
          </a>
        </li>
        <li>
          <a href="privacy_policy.html">Privacy Policy</a>
        </li>
        <li>
          <a href="terms_of_service.html">Terms of Service</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
