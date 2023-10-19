import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import AddPatients from './components/AddPatients';
import AddClinicals from './components/AddClinicals';
import DisplayClinical from './components/DisplayClinical';

function App() {
  return (
    <Routes>
      <Route exact path='/' Component={Home}></Route>
      <Route exact path='/addPatient' Component={AddPatients}></Route>
      <Route exact path='/addClinicals/:id' Component={AddClinicals}></Route>
      <Route exact path='/clinicals/:id' Component={DisplayClinical}></Route>
    </Routes>
  );
}

export default App;
