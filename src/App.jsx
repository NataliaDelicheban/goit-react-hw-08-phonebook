import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import UserRoutes from "./UserRoutes";

import { current } from 'redux/auth/auth-operations';

import 'bootstrap/dist/css/bootstrap.min.css';

import "./shared/styles/style.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  
  return (
    <div 
      style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: '25px',
            textAlign: 'center',
      }}
    >
      <Navbar />
      <UserRoutes />
    </div>
  );
};

export default App;


