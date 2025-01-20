import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { UserProvider } from './hooks/useContext'
import Form from './components/Login';
import Dashboard from './components/dashboard/dashboard';
import "./styles/App.css";

function App() {

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Form/>} />
          <Route path="/dashboard/*" element={ <Dashboard/> }/>
        </Routes>
      </Router>
    </UserProvider>
  )
}

export default App;
