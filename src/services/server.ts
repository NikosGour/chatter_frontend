import type Server from "@/types/server";
import type Tab from "@/types/tab";
import type User from "@/types/user";

const backend_url = import.meta.env.VITE_BACKEND_URL;
export function GetAllServers(): Promise<Server[]>{
	return fetch(`${backend_url}/server`)
		.then((res) => { return res.json(); });
}

export function GetServerById(server_id: string): Promise<Server>{
	return fetch(`${backend_url}/server/${server_id}`)
		.then((res) => { return res.json(); });
}

export function GetUsersByServerId(server_id: string): Promise<User[]>{
	return fetch(`${backend_url}/server/${server_id}/users`)
		.then((res) => { return res.json(); });
}

export function GetTabsByServerId(server_id: string): Promise<Tab[]>{
	return fetch(`${backend_url}/server/${server_id}/tabs`)
		.then((res) => { return res.json(); });
}