import { useState } from 'react';
import {useNavigate} from "react-router-dom";

export const AddCalonSiswa= () => {

    //New Calon Siswa
    const [name, setName] = useState("");
    const [namaAyah, setNamaAyah] = useState("");
    const [noTelephone, setNoTelephone] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    //Display
    const [displayWarning, setDisplayWarning] = useState(false);
    const [displaySuccess, setDisplaySuccess] = useState(false);

    async function submitCalonSiswa() {
        const url = `http://localhost:8081/api/calonSiswas`;

        const submitCalonSiswaResponse = await fetch(url);
        if (!submitCalonSiswaResponse.ok) {
            throw new Error('Cek Kembali data Input');
        }
        setName('');
        setNamaAyah('');
        setNoTelephone('');
        setPassword('');
        setEmail('');
        setDisplayWarning(false);
        setDisplaySuccess(true)
    }


    return(
        <div className="columns mt-5 is-centered">
            {displaySuccess &&
            <div className='alert alert-success' role='alert'>
                Calon Siswa Sukses di tambahkan
            </div>
            }
            {displayWarning &&
                <div className='alert alert-danger' role='alert'>
                    Isi sesuai ketentuan
                </div>
            }

            <div className='card'>
                <div className='card-header'>
                    Add Calon Siswa
                </div>
                <div className='card-body'>
                    <form method='POST'>
                        <div className="form-group">
                            <label className="form-label"> Nama Lengkap </label>
                            <input
                                type="text"
                                className="form-control"
                                name='name'
                                required onChange={e => setName(e.target.value)}
                                value={name}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label"> Nama Ayah </label>
                            <input
                                type="text"
                                className="form-control"
                                name='namaAyah'
                                required onChange={e => setNamaAyah(e.target.value)}
                                value={namaAyah}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label"> No Hp </label>
                            <input
                                type="number"
                                className="form-control"
                                name='noTelephone'
                                required onChange={e => setNoTelephone(e.target.value)}
                                value={noTelephone}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name='password'
                                required onChange={e => setPassword(e.target.value)}
                                value={password}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label"> Email </label>
                            <input
                                type="email"
                                className="form-control"
                                name='email'
                                required onChange={e => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>


                        <div>
                            <button type='button' className='btn btn-primary mt-3' onClick={submitCalonSiswa} >
                                Add Calon Siswa
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}




