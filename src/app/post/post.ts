export interface Post {
    id: string;
    date: Date;
    imageUrl:string;
    descricao:string;
    categoria:string;
    title:string;
    cidade:string;
    estado:string;
    author: {
        id:string;
        fullName:string;
    };
}

export type Posts = Array<Post>;