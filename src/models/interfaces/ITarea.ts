
export enum Niveles{
    "Informativa",
    "Urgente",
    "Bloqueante"
}

//Interface sirve para definir la firma y los punto necesarios a implementar por quien la  use
export interface ITarea{
    titulo: string;
    descripcion?: string;
    completada: boolean;
    urgencia?: Niveles;
    resume : () => string
}

