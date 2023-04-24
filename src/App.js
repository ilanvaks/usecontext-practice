// 1) import createContext
import { useState, createContext } from 'react';
import Page from './components/Page.jsx';
import './App.css';

// 2) create and export 
export const UserStatus = createContext(null);


function App() {
  const[signedIn, setSignedIn] = useState(false)

  return (
    <>
      {/* Establish a provide  */}
    <UserStatus.Provider value={[signedIn, setSignedIn]}>
      <h1>{signedIn ? "Click below to Sign out" : "Click below to Sign in"}</h1>
      <Page/>
    </UserStatus.Provider>
    </>
  );
}

export default App;
