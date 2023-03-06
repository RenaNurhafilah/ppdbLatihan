import React, { useState, useEffect } from "react";
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

interface CalonSiswa {
    id: number;
    name: string;
    namaAyah: string;
    noTelephone: string;
    password: string;
    email: String;

}

const TabelCalonSiswa: React.FC = () => {
    const [tabelCalonSiswa, setTabelCalonSiswa] = useState<CalonSiswa[]>([]);

    useEffect(() => {
        axios.get<CalonSiswa[]>('http://localhost:8081/api/calonSiswas')
            .then(response => setTabelCalonSiswa(response.data))
            .catch(error => console.error(error));
    }, []);


    return (
        <table id="example2" className="table table-bordered table-hover">
            <thead>
            <tr>
                <th>No</th>
                <th>Nama Lengkap</th>
                <th>Nama Ayah</th>
                <th>No Telephone</th>
                <th>Password</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <ul>
                    {tabelCalonSiswa.map((calon_siswa) => (
                        <li key={calon_siswa.id}>
                            <span>{calon_siswa.name}</span>
                            <span>{calon_siswa.namaAyah}</span>
                            <span>{calon_siswa.noTelephone}</span>
                            <span>{calon_siswa.password}</span>
                            <span>{calon_siswa.email}</span>

                        </li>
                    ))}
                </ul>
            </tr>
            </tbody>
        </table>
    );
};

export default TabelCalonSiswa;