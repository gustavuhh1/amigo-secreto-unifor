import './Footer.css'
import imgGithub from '../assets/imgGithub.svg'

export function Footer(){
    return (
      <>
        <div className='footer'>
          <p>Created by</p>
          <img src={imgGithub} alt="icone github" />
        </div>
      </>
    );
}