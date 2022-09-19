import { useState, useEffect } from "react";

import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {

    const [repositories,setReporitories] = useState<Repository[]>([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json()) //converter resposta pra json
        .then(data => setReporitories(data))
    },[])

    return(
        <section className="repository-list" >
            <h1>Lista de Repositórios</h1>

            <ul>
                {repositories.map(repository => (
                    <RepositoryItem repository={repository} key={repository.name} />
                ))}
            </ul>
        </section>
    )
}