import './App.css'
import Signup from './components/Signup'
import SignIn from './components/SignIn'
import Appbar from './components/Appbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddCourse from './components/AddCourse'
import Courses from './components/Courses';
import Course from './components/Course';
import { RecoilRoot } from 'recoil';

function App() {
  
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      margin: '0',
      backgroundColor: '#eeeeee',
      
    }}>
      <RecoilRoot>
        <Router>
          <Appbar/>
          <Routes>
            <Route path="/addcourse" element={<AddCourse />} />
            <Route path="/courses/:courseId" element={<Course />} />
            <Route path ="/courses" element = {<Courses />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </div>

      
    
  )
}

export default App
