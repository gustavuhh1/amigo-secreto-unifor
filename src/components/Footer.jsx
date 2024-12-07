import "./Footer.css";
import imgGithub from "../assets/imgGithub.svg";

export function Footer() {
  return (
    <>
      <div className="footer">
        <p>Created by</p>
        <a href="http://github.com/joaooliveiradev1" target="_blank">
          <img src={imgGithub} alt="icone github" />
        </a>
      </div>
    </>
  );
}
