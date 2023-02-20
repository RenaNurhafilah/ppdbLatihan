import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import calonSiswaModel from "../../models/AddCalonSiswa";

export const DataCalonSiswa: React.FC<{ calonSiswa: calonSiswaModel, deleteCalonSiswa: any}> = (props, key) => {

    const [calonSiswas, setCalonSiswas] = useState<any[]>([]);

    useEffect(() => {
        fetch('http://localhost:8081/api/profile/calonSiswas' )
            .then((response) => response.json())
            .then((data) => {
                setCalonSiswas(data);
            });
    }, []);

    async function deleteCalonSiswa() {
        const url = `http://localhost:8081/api/profile/calonSiswas/delete`;
        const requestOptions = {
            method: 'DELETE',
        };

        const updateResponse = await fetch(url, requestOptions);
        if (!updateResponse.ok) {
            throw new Error('Something went wrong!');
        }
        props.deleteCalonSiswa();
    }

    return (
        <div>
            <div className="jarak-atas">
                <br/>
                <p className="justify">
                    <h3> Data Calon Siswa </h3>
                </p>
            </div>

            <div className='content'>
                <div className="card-body">
                    <div className="div btn">
                        <Link type='button' to='/addCalonSiswa' className='btn main-color btn-lg text-white' >
                            Add Calon Siswa (+) </Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-secondary text-white">
                        <tr>
                            <th> Name </th>
                            <th> Nama Ayah </th>
                            <th> No HP </th>
                            <th> Password </th>
                            <th> Email </th>
                            <th> Action </th>
                        </tr>
                        </thead>

                        <tbody>
                        {calonSiswas.map((calonSiswas) => (
                            <tr key={calonSiswas.id}>
                                <td>{calonSiswas.name}</td>
                                <td>{calonSiswas.namaAyah}</td>
                                <td>{calonSiswas.noTelephone}</td>
                                <td>{calonSiswas.password}</td>
                                <td>{calonSiswas.email}</td>

                                <td>
                                    <button onClick={deleteCalonSiswa}> Delete </button>
                                    <a href='#' className="btn btn-danger"> Edit </a>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default DataCalonSiswa;
