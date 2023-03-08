import React from 'react';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            search: '',
            type: 'all',
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleKey = (event) => {
        this.props.searchMovies(this.state.search, this.state.type);
        event.preventDefault();
    };

    render() {
        const { type, search } = this.state;
        return (
            <form className="d-flex srch-form" role="search">
                <input
                    className="form-control me-2"
                    type="text"
                    name="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={search}
                    onChange={this.handleChange}
                />

                <select
                    className="form-select"
                    aria-label="Default select example"
                    name="type"
                    value={type}
                    onChange={this.handleChange}
                >
                    <option value="all" selected>
                        All
                    </option>
                    <option value="movie">Movies</option>
                    <option value="series">Series</option>
                </select>

                <button
                    className="btn btn-outline-success"
                    type="submit"
                    onClick={this.handleKey}
                >
                    Search
                </button>
            </form>
        );
    }
}

export { Search };
