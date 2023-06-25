import {ClientConfig} from "pg";

interface IConfig {
    DATABASE: ClientConfig
    SERVER: {
        PORT: number | string | undefined
    }
}

export const config: IConfig = {
    DATABASE: {
        user:       process.env.POSTGRES_USER || 'postgres',
        host:       process.env.POSTGRES_HOST || 'localhost',
        database:   process.env.POSTGRES_DATABASE || 'docker_test',
        password:   process.env.POSTGRES_PASSWORD || '123',
        port:      (process.env.POSTGRES_PORT as number | undefined)  || 5431,
    },
    SERVER: {
        PORT:       process.env.SERVER_PORT || 8081
    }
}