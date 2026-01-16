import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import { Welcome } from './pages/Welcome'
import { LogIn } from './pages/LogIn'
import { SignUp } from './pages/SignUp'
import { Profile } from './pages/Profile'

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-93.75 min-h-166.75 bg-white shadow-lg overflow-hidden">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<LogIn setEmail={setEmail} />} />
            <Route path="/signup" element={<SignUp setName={setName} setEmail={setEmail}/>} />
            <Route path="/profile" element={<Profile name={name} email={email}/>} />
          </Routes>
      </div>
    </div>
  );

}

export default App
