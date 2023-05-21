
import './App.css';
import Footer from './Componant/Footer/Footer';
import Get from './Componant/Get/Get ';
import Header from './Componant/Header/Header';
import Heromainpage from './Componant/Heropage/Heromainpage/Heromainpage';
import Contactpage from './Componant/Maincontact/Maincontactpage/Contactpage';
import Imgsection from './Componant/Mainimg/Imgsection';
// import Value from './Componant/Maininterfestpage/Accordion/Accordion'; 
import Maininterfest from './Componant/Maininterfestpage/Maininterfest/Maininterfest';
import Populartext from './Componant/Mainpopular/Populartext/Populartext';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">

      <Header />
      <Heromainpage />
      <Imgsection />
      <Populartext />
      <Maininterfest />
      {/* <Value/> */}
      <Contactpage />
      <Get/>
      <Footer/>
    </div>
  );
}

export default App;
