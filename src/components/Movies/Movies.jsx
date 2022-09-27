import { Outlet, Link } from 'react-router-dom';

export default function Movies() {
  return (
    <div>
      <h1>Movies by Genre</h1>
      <nav>
        <Link to="comedy">Comedy</Link>
        <Link to="drama">Drama</Link>
        <Link to="action">Action</Link>
      </nav>
      <Outlet />
    </div>
  );
}
