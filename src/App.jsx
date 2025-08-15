
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componets/Header'
import Homepage from './pages/Homepage'
import Footer from './componets/Footer'
import ChatInterface from './pages/ChatInterface'
import HomeMainbar from './pages/Community/HomeMainbar/HomeMainbar'
import CommunityASk from './pages/Community/CommunityASk'
import QuestionsDetails from './pages/Community/QuestionsDetails'
import Loginsighup from './pages/Login/Loginsighup';
import About from './pages/About';
import ComplaintRegister from './pages/ComplaintRegister';
function App() {
  

  return (
    <>
    <Router>
            
            <Routes>

              <Route path={"/"} element={<Homepage />} />
              <Route path={"/community"} element={<HomeMainbar />} />
              <Route path={"/askQuestion"} element={<CommunityASk />} />
              <Route path={"/chat"} element={<ChatInterface />} />
              <Route path={"/login"} element={<Loginsighup />} />
              <Route path={"/about"} element={<About />} />
              <Route path={"/complaint"} element={<ComplaintRegister />} />
              <Route path={"/questionDetails/:qid"} element={<QuestionsDetails />} />
              
            </Routes>
          </Router>
 

 
    </>
  )
}

export default App
