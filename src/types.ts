
export interface ChatMessage {
    id: number;
    from: "me" | "server" | "system";
    text: string;
}