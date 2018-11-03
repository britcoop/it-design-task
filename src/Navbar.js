import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-end">
            <div className="line-title">
                <a className="navbar-brand" href="/">
                {/* <hr className="grow-left agent-2 intro-line"/> */}
                    {/* <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top brand-font" alt=""/> */}
                    Info-Tech Events &amp; Workshops
                </a>
            </div>
            </nav>
        </div>
    )
}

export default Navbar;