import { AddCalonSiswa } from './components/AddCalonSiswa';


export const CalonSiswaPage = () => {

    return (
        <div className='container'>
            <div className='mt-5'>
                <h3> Data Calon Peserta </h3>

                <div className='tab-content' id='nav-tabContent'>
                    <div className='tab-pane fade show active' id='nav-add-calonSiswa' role='tabpanel'>
                        <AddCalonSiswa/>
                    </div>
                </div>
            </div>
        </div>
    );
}