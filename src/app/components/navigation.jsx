const Navbar = () => {
    return(
    <div className="navbar bg-base-100">
        <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="https://haadirazzak.com">hr</a>
        </div>
        <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
            <li><a href="/Haadi_Razzak_Resume_1.docx.pdf" target="_blank">Resume</a></li>
            <li><a href="https://github.com/haadir" target="_blank">Github</a></li>
            <li><a href="https://www.linkedin.com/in/haadirazzak/" target="_blank">LinkedIn</a></li>
            <li><a href="mailto:hrazzak@usc.edu">Email</a></li>
        </ul>
        </div>
    </div>
  );
};

export default Navbar;