import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Form from './components/Login';
import Dashboard from './components/dashboard/dashboard';
import "./styles/App.css";

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Form/>} />
          <Route path="/dashboard" element={ <Dashboard/> }/>
        </Routes>
      </Router>
  )
}

export default App
