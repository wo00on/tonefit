// import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from "./components/LoginForm";
import LandingPage from "./components/LandingPage";
import DashBoard from "./components/DashBoard.tsx";
import {useState} from "react";

interface User {
    name: string;
    personalColor?: string;
}

function App() {
    const [user, setUser] = useState<User | null>(null);

    const handleLogin = async () => {
        const exampleUser: User = {
            name: "홍길동",
            personalColor: "봄 웜톤"
        };
        setUser(exampleUser);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/auth/login" element={<LoginForm onLogin={handleLogin} />} />
                <Route path="/dashboard" element={user ? <DashBoard user={user} /> : <div>Loading...</div>} />
            </Routes>
        </Router>
    );
}

export default App;