import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from '../components/Home/Home';
import Layout from './Page/Layout';
import Movies from './Movies/Movies';
import Shows from './Shows/Shows';
import Comedy from './Movies/Comedy';
import Drama from './Movies/Drama';
import Action from './Movies/Action';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shows" element={<Shows />} />
          <Route path="movies" element={<Movies />} >
            <Route path="comedy" element={<Comedy />} />
            <Route path="drama" element={<Drama />} />
            <Route path="action" element={<Action />} />
          </Route>  
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
