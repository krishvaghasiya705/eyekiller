import { RouterProvider } from 'react-router-dom';
import './global.scss';
import router from './routes';

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;