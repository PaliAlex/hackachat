import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import {Login} from "./pages/Login";
import {Chat} from "./pages/Chat";

export default function App() {
    const [userId, setUserId] = useState("");

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />

                <Route path="/login" element={<Login setUserId={setUserId} />} />
                <Route path="/chat" element={<Chat userId={userId} />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </BrowserRouter>
    );
}