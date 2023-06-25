import {Client, ClientConfig, QueryResult, QueryResultBase, QueryResultRow} from 'pg'
// const client = new Client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'docker_test',
//     password: '123',
//     port: 5431,
// })

// export const database = async () => {
//     client.connect().then(() => console.log("Database connected!")).catch(e => console.log("Database connection error:", e))

// client.query("CREATE TABLE users (UserID serial primary key, Lastname text, Firstname text)")
// await client.query("INSERT INTO users (Lastname, Firstname) VALUES ('Olga','Tkachenko')")
// await client.query("INSERT INTO users (Lastname, Firstname) VALUES ('Alexej','Pawljuk')")
//
// const response = await client.query("SELECT * FROM users")
// console.log(response.rows)
// }




interface IDatabase {
    connect(): Promise<void>

    query<R>(queryText: string, values?: [] | undefined): Promise<QueryResult>
}



export class Database implements IDatabase {
    private client: Client

    constructor(public readonly config: ClientConfig) {
        this.client = new Client(config)
    }

    connect(): Promise<void> {
        return this.client.connect()
    }

    query<R extends QueryResultRow>(queryText: string, values?: any[]): Promise<QueryResult<R>> {
        return this.client.query<R>(queryText, values)
    }
}






