import type Server from "./server";

export default interface Tab {
	id: string;
	name: string;
	server_id: string;
	server: Server;
	date_created: Date;
}