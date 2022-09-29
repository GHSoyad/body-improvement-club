import './App.css';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Blogs></Blogs>
    </div>
  );
}

export default App;
