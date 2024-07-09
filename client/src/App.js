import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Projects from './Components/Projects/Projects';
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Contact from './Components/Contact/Contact';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import NotesPage from './Components/Notes/NotesPage';
import Services from './Components/Service/Service';
import NotFound from './PageNotFound';
import ProjectDetailsPage from './Components/Projects/ProjectDetailsPage';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projectdetails/:project_id" element={<ProjectDetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
