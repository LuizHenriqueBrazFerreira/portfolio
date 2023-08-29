import './style.css';

type HeaderProps = {
  children: React.ReactNode;
};

function Header({ children }: HeaderProps) {
  return (
    <header id="header-container">
      { children }
    </header>
  );
}

export default Header;
