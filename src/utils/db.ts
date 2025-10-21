import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // Supabase provides this
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
