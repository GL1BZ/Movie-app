import { Search } from '../components/Search'

export function Header(props){
    const { searchMovies } = props
    return(
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid container">
            <a className="navbar-brand">Movies App</a>
            <Search searchMovies={ searchMovies }/>
        </div>
    </nav>
    );
};