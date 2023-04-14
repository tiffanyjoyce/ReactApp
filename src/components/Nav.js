import { Link } from "react-router-dom";
import '../css/nav.css';

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-secondary">
                <div className="container-fluid">
                    <Link className="home nav-item nav-link active" to='/'>Home</Link>
                    <Link className="shop nav-item nav-link active" to='/shop'>Shop</Link>
            </div>
            </nav>
        </div>
    );
}
export default Nav;