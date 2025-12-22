import type User from './user';

export default interface Server{
	id           : string;
	name         : string;
	users?       : User[];
	date_created : Date;
}