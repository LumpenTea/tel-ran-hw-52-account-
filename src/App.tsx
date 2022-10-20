import './App.css';
import {Routes, Route} from 'react-router-dom'
import Guest from './components/Guest';
import Profile from './components/Profile';

function App() {
  return (
    <div className='App'>
      <Routes>
        {['*', 'login'].map((path: string) => <Route path={path} element={<Guest />} key={path} />)}
        <Route path='profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
