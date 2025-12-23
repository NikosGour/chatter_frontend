import type Tab from "./tab";
import type User from "./user";

export default 	interface Message{
	id        : number;
	text      : string;
	sender    : User;
	tab       : Tab;
	date_sent : Date;
}