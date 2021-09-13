import './App.scss';
import Body from './Body';

import Particles from 'react-particles-js';
import particlesConfig from './config/particlesConfig';


function App() {
  return (
    <div className="App">
      <div className="sections">
        <div style={{ position: 'fixed'}}>
          <Particles height="100vh" width="100vw" params={particlesConfig} />
        </div>
        <Body />
      </div>
    </div> 
  );
}

export default App;
