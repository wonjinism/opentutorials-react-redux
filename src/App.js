import Header from './components/Header'
import NavContainer from './containers/NavContainer'
import ArticleContainer from './containers/ArticleContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header /> 
      <NavContainer />
      <ArticleContainer />
    </div>
  );
}

export default App;
