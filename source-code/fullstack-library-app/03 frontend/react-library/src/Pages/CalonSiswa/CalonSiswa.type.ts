export interface CalonSiswa {
    id: string;
    name: string;
    namaAyah: string;
    noTelephone: string;
    password: string;
    email: string;
}

export enum PageEnum {
    list,
    add,
    edit,
}