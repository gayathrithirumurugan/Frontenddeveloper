import {Error,Homepage,Capsules,Capsulepopup, Capsulesearch} from "./Pages";
import {Header} from "./components";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
     <Route path="/" element={<Homepage />} /> 
     <Route path="/capsules" element={<Capsules />} />
     <Route path="/capsules/:id" element={<Capsulepopup />} />
     <Route path="/capsulessearch" element={<Capsulesearch />} />
     <Route path="*" element={<Error />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
