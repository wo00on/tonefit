// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./componants/HomePage.tsx";
import LoginForm from "./componants/LoginForm.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/auth/login" element={<LoginForm />} />
                {/* 다른 라우트들도 추가 */}
            </Routes>
        </Router>
    );
}

export default App;