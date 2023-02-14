function App() {
    console.log('App -> render')

    const [items, setItems] = React.useState([])

    const handleSearch = event => {
        event.preventDefault()

        const query = event.target.query.value

        searchGiphy(query, results => setItems(results))
    }

    return <div>
        <form className="border-2 p-2 flex justify-center gap-2" onSubmit={handleSearch}>
            <input className="border-2" type="search" name="query" />
            <button className="border-2" type="submit">Search</button>
        </form>
        {!!items.length && <ul>{items.map(item => <li key={item.id}><img src={item.images.original.url} /></li>)}</ul>}
    </div>
}