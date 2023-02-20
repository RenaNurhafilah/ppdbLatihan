import { useState } from 'react';
import AddCalonSiswaRequest from '../../../models/AddCalonSiswaRequest';

export const AddCalonSiswa = () => {


    // New Book
    const [name, setName] = useState('');
    const [namaAyah, setNamaAyah] = useState('');
    const [noTelephone, setNoTelephone] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    // Displays
    const [displayWarning, setDisplayWarning] = useState(false);
    const [displaySuccess, setDisplaySuccess] = useState(false);


    async function submitCalonSiswa() {
        const url = `http://localhost:8081/api/profile/calonSiswas`;
        if ( name !== '' && namaAyah !== '' &&  noTelephone !== ''
            && password !== '' && email !== '') {
            const calonSiswa: AddCalonSiswaRequest = new AddCalonSiswaRequest( name, namaAyah, noTelephone, password, email);
            const requestOptions = {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                },
                body: JSON.stringify(calonSiswa)
            };

            const submitCalonSiswa = await fetch(url, requestOptions);
            if (!submitCalonSiswa.ok) {
                throw new Error('Something went wrong!');
            }
            setName('');
            setNamaAyah('');
            setNoTelephone('');
            setPassword('');
            setEmail('');
            setDisplayWarning(false);
            setDisplaySuccess(true);
        } else {
            setDisplayWarning(true);
            setDisplaySuccess(false);
        }
    }

    return (
        <div className='container mt-5 mb-5'>
            {displaySuccess &&
                <div className='alert alert-success' role='alert'>
                    Calon Siswa added successfully
                </div>
            }
            {displayWarning &&
                <div className='alert alert-danger' role='alert'>
                    All fields must be filled out
                </div>
            }
            <div className='card'>
                <div className='card-header'>
                    Add Calon Siswa
                </div>
                <div className='card-body'>
                    <form method='POST'>
                        <div className='row'>
                            <div className='col-md-12 mb-3'>
                                <label className='form-label'>Nama Lengkap</label>
                                <input type="text" className='form-control' name='name' required
                                       onChange={e => setName(e.target.value)} value={name} />
                            </div>
                            <div className='col-md-3 mb-3'>
                                <label className='form-label'> Nama Ayah </label>
                                <input type="text" className='form-control' name='namaAyah' required
                                       onChange={e => setNamaAyah(e.target.value)} value={namaAyah}/>
                            </div>
                            <div className='col-md-3 mb-3'>
                                <label className='form-label'> No Telephone </label>
                                <input type="number" className='form-control' name='noTelephone' required
                                       onChange={e => setNoTelephone(e.target.value)} value={noTelephone}/>
                            </div>
                            <div className='col-md-3 mb-3'>
                                <label className='form-label'> Password </label>
                                <input type="password" className='form-control' name='password' required
                                       onChange={e => setPassword(e.target.value)} value={password}/>
                            </div>
                            <div className='col-md-3 mb-3'>
                                <label className='form-label'> Email </label>
                                <input type="email" className='form-control' name='email' required
                                       onChange={e => setEmail(e.target.value)} value={email}/>
                            </div>
                        </div>

                        <div>
                            <button type='button' className='btn btn-primary mt-3' onClick={submitCalonSiswa}>
                                Add Calon Siswa
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}