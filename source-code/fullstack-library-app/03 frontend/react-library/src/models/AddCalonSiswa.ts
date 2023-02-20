class AddCalonSiswa {
    id: number;
    name: string;
    namaAyah: string;
    noTelephone: string;
    password: string;
    email: string;


    constructor ( id: number, name: string, namaAyah: string, noTelephone: string,
                 password : string, email: string ) {
        this.id = id;
        this.name = name;
        this.namaAyah = namaAyah;
        this.noTelephone = noTelephone;
        this.password = password;
        this.email = email;

    }
}

export default AddCalonSiswa;