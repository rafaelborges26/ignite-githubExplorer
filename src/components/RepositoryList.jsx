import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {

    const repository = {
        name: 'Title rep',
        description: 'Forms React',
        link: "http://globoesporte.com"
    }

    return(
        <section className="repository-list" >
            <h1>Lista de Repositórios</h1>

            <ul>
               <RepositoryItem repository={repository} />
               <RepositoryItem repository={repository} />
               <RepositoryItem repository={repository} />
            </ul>
        </section>
    )
}