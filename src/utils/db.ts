import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
    connectionString:
        "postgresql://postgres:SRYfLtvxPuyxL8wy@db.tjtsirrwnbfhclegsisv.supabase.co:5432/postgres", // Supabase provides this
    ssl: {
        rejectUnauthorized: false, // Required for Supabase hosted PG
    },
});

export async function query(text: string, params?: any[]) {
    const client = await pool.connect();
    try {
        console.log("connection successful");
        const res = await client.query(text, params);
        return res;
    } finally {
        client.release();
    }
}
