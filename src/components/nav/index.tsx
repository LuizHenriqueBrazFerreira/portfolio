import './style.css';

function Nav() {
  return (
    <nav>
      <a href=".about-me" className="links">About me</a>
      <a href=".projects" className="links">Projetos</a>
      <a className="links" target="blank" href="https://github.com/LuizHenriqueBrazFerreira">GitHub</a>
      {' '}
      <a className="links" target="blank" href="https://www.linkedin.com/in/luiz-henrique-29a152280/">LinkeDin</a>
    </nav>
  );
}

export default Nav;
