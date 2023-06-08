import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import './App.css';
import {action,comedy,horror,originals} from './urls'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title='Netflix Originals'url={originals}   />
      <RowPost title='Action' url={action} isSmall />
      <RowPost title='Comedy' url={comedy} isSmall />
      <RowPost title='Horror' url={horror} isSmall />      
    </div>
  );
}

export default App;
 