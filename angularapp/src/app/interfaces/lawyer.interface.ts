import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export interface Degrees{
    id: number;
    title: string;
    status: boolean;
    img: any;
}

export interface Contact{
    name: string;
    lastName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}


export interface Social{
    icon: IconDefinition;
    link: string;
}