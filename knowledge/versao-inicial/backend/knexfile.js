// Update with your config settings.

module.exports = {
    
    /*
    client: 'postgresql',
    connection: {
        database: 'knowledge',
        user: 'postgres',
        password: '123456'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    }*/
    
    client: 'postgresql',
    connection: {
        host: 'codaxpostgres.c8rmjbl8lqg6.us-west-2.rds.amazonaws.com',
        database: 'postgres',
        user: 'codax',
        password: 'codax2020'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    }
    

};