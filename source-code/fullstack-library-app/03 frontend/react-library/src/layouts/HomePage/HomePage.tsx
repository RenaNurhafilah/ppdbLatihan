import TabelCalonSiswa  from "./components/TabelCalonSiswa";
import {Link} from "react-router-dom";

export const HomePage = () => {
    return (
        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="tabel-buatan">
                            <div className="card">

                                <div className="card-header">
                                    <h3 className="card-title">Data Calon Siswa</h3>
                                </div>
                                &nbsp;
                                <div className="container-fluid">
                                    <Link type="button" className="btn btn-primary" to='/addSiswa'>
                                        Tambah data siswa </Link>

                                </div>

                                <div className="card-body">
                                    <TabelCalonSiswa/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}


