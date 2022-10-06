import facebook from '../../images/facebook.svg';
import instagram from '../../images/insta.svg';
import linkedin from '../../images/linkedin.svg';
import twitter from '../../images/twitter.svg';
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Sociala Medier</h2>
      <section>
        <a href=""><img src={facebook} alt="" /></a>
        <a href=""><img src={twitter} alt="" /></a>
        <a href=""><img src={instagram} alt="" /></a>
        <a href=""><img src={linkedin} alt="" /></a>
      </section>
    </footer>
  )
}

export default Footer