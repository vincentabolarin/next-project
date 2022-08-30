import Link from "next/link";

const ClientsPage = () => {
    const clients = [
        {id: 'vincent', name: 'Vincent'},
        {id: 'bassey', name: 'Bassey'}
    ]
    return (
        <div>
            <h1>The Clients Page</h1>
            <ul>
                {clients.map(client => <li key={client.id}>
                    <Link href={`/clients/${client.id}`}>{client.name}</Link>
                </li>)}
            </ul>
        </div>
    );
}
 
export default ClientsPage;