import sdit from '../image/sdit.png';

export const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
            <div className='container-fluid'>
                <img className="d-block  rounded" src={sdit} alt="sdit" height="50"  />
                &emsp;
                <h3 className='text-white'>PPDB SDIT Fatahillah</h3>
                <button className='navbar-toggler' type='button'
                        data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
                        aria-controls='navbarNavDropdown' aria-expanded='false'
                        aria-label='Toggle Navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                    <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Home</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Search Books</a>
                            </li>

                                <li className='nav-item'>
                                    <a className='nav-link' href='#'>Shelf</a>
                                </li>




                        </ul>
                        <ul className='navbar-nav ms-auto'>

                                <li className='nav-item m-1'>
                                    <a type='button' className='btn btn-outline-light' href='#'>Logout</a>
                                </li>
                                :

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}