import './App.css'
import Signup from './Signup'
import SignIn from './SignIn'
import Appbar from './Appbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddCourse from './AddCourse'
import Courses from './Courses';
import Course from './Course';
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
