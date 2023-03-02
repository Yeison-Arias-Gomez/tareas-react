import { CONTACTO } from "./componentB";

export class ComponentA { 
    name = '';
    lastName = '';
    email = '';
    connected = CONTACTO.CONNECTED;

    constructor(name, lastName, email, connected){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.connected = connected;
    }    
 
}

