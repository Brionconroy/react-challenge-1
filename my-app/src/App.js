import css from './App.module.css';
// import NavBarSample from './components/NavBarSample';
import Sidebar from './components/Sidebar';
import NavBarForm from './components/NavBarForm';
import Content from './components/Content';


function App() {
  return (
    <div className={css.App}>
      {/* <NavBarSample/> */}
      <NavBarForm />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;