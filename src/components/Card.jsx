export function Card(props){
    const {Title, Year, imdbID, Type, Poster} = props;
    return <div id={imdbID} className="card">
                {
                    Poster === 'N/A' ? 
                        <img className="activator" src={`https://via.placeholder.com/300x400?text=${Title}`} alt={ Title }/>
                        :
                        <img src={ Poster } className="card-img-top" alt={ Title }/>
                }
                <div className="card-body">
                <h5 className="card-title">{ Title }</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Type: { Type }</li>
                    <li className="list-group-item">Year: { Year }</li>
                </ul>
            </div>
}