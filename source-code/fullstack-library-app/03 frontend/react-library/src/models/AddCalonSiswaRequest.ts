class AddCalonSiswaRequest {
    name: string;
    namaAyah: string;
    noTelephone: string;
    password: string;
    email: string;


    constructor ( name: string, namaAyah: string, noTelephone: string,
                 password : string, email: string ) {

        this.name = name;
        this.namaAyah = namaAyah;
        this.noTelephone = noTelephone;
        this.password = password;
        this.email = email;

    }
}

export default AddCalonSiswaRequest;