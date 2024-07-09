import React from "react";
import Collections from "./Collections";



function Home(){

    const [user, setUser] = useState('')
    const [collections, setCollections] = useState([])


    useEffect(() => {
        fetch(`/collections/${user.id}`)
        .then(response => response.json())
        .then(setCollections)
        .catch(error => console.error("Fetching Collections Failed: ", error));
    }, []);

    const collections_list = collections.map(collection => (
        <Collections key={collection.id} collection={collection}/>
    ))

    return (
        <div>
            <main>
                <ul className='collection-list'>
                    {collections_list}
                </ul>
            </main>
        </div>
    )
}
export default Home;