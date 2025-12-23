import type Message from "@/types/message";

const backend_url = import.meta.env.VITE_BACKEND_URL;

export function GetMessagesByTabId(tab_id: string): Promise<Message[]>{
	return fetch(`${backend_url}/message/tab/${tab_id}`)
		.then((res) => { return res.json(); });
}