import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
import PageNotFound from './PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<PrivateRoute />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
