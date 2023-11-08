
import './App.css';
import Client from './firstPageContent/Client';
import Content from './firstPageContent/Content';
import Footer from './Footer';
import Head from './Head';
import Layer from './Layer';
import Partners from './Partners';
import Video from './video/Video';

function App() {
  const colorize="blueviolet";  
  return (
    <div className="App">
          <Layer/>
          <Video/>
          <Head />
          
          <Content colorize={colorize}/>
          <Client colorize={colorize}/>
          <br />
          <br />
          <Partners/>
          <Footer/>
    </div>
  );
}

export default App;
