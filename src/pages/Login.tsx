import {Dispatch, SetStateAction, useState} from "react";
import { useNavigate } from "react-router-dom";
import {collection, getDocs} from "firebase/firestore";
import { db } from "../firebase";
import {Input} from "../shared/components/Input/Input";
import {Button} from "../shared/components/Button";

interface LoginProps {
    // eslint-disable-next-line no-unused-vars
    setUserId: Dispatch<SetStateAction<string>>;
}

export const Login = ({setUserId}: LoginProps) => {
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e: any) => {
        e.preventDefault();

        if (!username) {
            setError("Please enter username");
            return;
        }

        try {
            const usersRef = collection(db, "users");
            const snapshot = await getDocs(usersRef);

            const list = snapshot.docs.map(doc => doc.data());

            const isUserExisted = list.find((it) => (it.name === username))

            if (!snapshot.empty && isUserExisted) {
                isUserExisted.id && setUserId(isUserExisted.id);

                navigate("/chat");
            } else {
                setError("Wrong username or this user doesn't exist!");
            }
        } catch (error) {
            console.error("Error login:", error);
            alert("Something went wrong");
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", width: "300px" }}>
                <div className="font-sora-bold text-4xl mx-4 sm:mx-auto lg:mx-auto mb-6 max-w-lg text-center">
                    Login
                </div>
                <Input
                    type="text"
                    value={username}
                    onChange={(e: any) => setUsername(e.target.value)}
                    placeholder="Username"
                />

                <div className='font-sora text-[#ff0000] text-xs mt-1'>{error}</div>
                <Button type="submit" className='my-6 w-full'>Login</Button>
            </form>
        </div>
    );
}
