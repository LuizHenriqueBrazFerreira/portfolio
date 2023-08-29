import Header from './components/header';
import Nav from './components/nav';
import { SectionInitial } from './components/sections';
import './index.css';

function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <SectionInitial />
    </>
  );
}

export default App;
