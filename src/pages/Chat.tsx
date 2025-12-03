import React, { useEffect, useRef, useState } from "react";
import {Button} from "../shared/components/Button";
import {Header} from "../components/Header/Header";

import { db } from "../firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import {formatDate} from "../shared/helpers/formatDate";


interface ChatProps {
    userId: string;
}

export const Chat = ({ userId }: ChatProps) => {
    const [messages, setMessages] = useState<any>([]);
    const [input, setInput] = useState<string>("");
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const [connected, setConnected] = useState<boolean>(false);

    useEffect(() => {
        onSnapshot(collection(db, "conversations", `advisor-${userId}`, 'messages'), snapshot => {
            const msgs = snapshot.docs.map(doc => doc.data());
            setConnected(true);

            setMessages(msgs.sort((a, b) => a.createdAt - b.createdAt))
        }, () => {
            setConnected(false);
        });
    }, [])

    console.log(messages, 'messages')
    const sendMessage = async () => {
        if (!input) return;

        await addDoc(collection(db, "conversations", `advisor-${userId}`, 'messages'), {
            text: input,
            userId,
            createdAt: Math.floor(Date.now() / 1000)
        });
        console.log(input, 'input')
        setInput(input);
    };

    const scrollToBottom = () => {
        try {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        } catch {}
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };


    const getMessageClass = (id: string) => {
        if(id === '_system') {
            return 'bg-gray-200 text-gray-800 self-center'
        }

        if(id === userId) {
            return 'bg-[#98E9AC] text-black self-end ml-auto'
        }

        return 'bg-[#B9B1F0] text-gray-800 self-start'
    }

    return (
        <>

            <div className="h-screen flex flex-col bg-[#FCFAF9]">
                <Header/>
                <div
                    className="mx-auto w-full max-w-[742px] bg-[#F5F1EC] border border-[#E5E7EB] relative overflow-hidden flex flex-col
             h-[1000px] sm:h-[700px] md:h-[700px]
             md:flex-none sm:flex-1
             sm:max-h-screen mt-0 md:mt-12 rounded-none md:rounded-[20px] shadow-2xl">

                    {/* status */}
                    <div className="flex justify-center p-2">
                        <div className="text-md text-gray-500">
                            {connected ? "Connected" : "Disconnected"}
                        </div>
                    </div>

                    {/* messages */}
                    <div className="flex-1 overflow-auto p-4 space-y-2 font-sora">
                        {messages.map((msg: any) => {

                            if (msg.userId === '_system') {
                                return (
                                    <div key={msg.createdAt.seconds} className="flex justify-center">
                                        <div className="bg-[#D3D6E0] text-gray-800 rounded-2xl max-w-xs text-center px-2.5 text-[13px]">
                                            {msg.text}
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <div
                                    key={msg.userId}
                                    className={`p-3 rounded-2xl max-w-xs break-words flex flex-col gap-1 ${getMessageClass(msg.userId)}`}>
                                    <span>{msg.text}</span>
                                    <span className="text-[10px] opacity-70 text-right">
                                        {formatDate(msg.createdAt)}
                                    </span>
                                </div>
                            );
                        })}
                        <div ref={messagesEndRef}/>
                    </div>

                    {/* input */}
                    <div className="p-4 bg-white border-t flex gap-2">
                        <textarea
                            className="flex-1 p-2 border rounded resize-none h-12"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Type message..."
                        />
                        <Button onClick={sendMessage} type="button" color="primary">
                            Send
                        </Button>
                    </div>
                </div>
            </div>
        </>

    );
}
