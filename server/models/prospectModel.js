import { db } from '../config.js';

export async function insertProspect(name, email) {
  const { rows } = await db.query(
    `INSERT INTO prospects (name, email) VALUES ($1, $2) RETURNING id, name, email, created_at`,
    [name.trim(), email.toLowerCase()]
  );
  return rows[0];
}

export async function getAllProspects() {
  const { rows } = await db.query(
    `SELECT id, name, email, created_at FROM prospects ORDER BY created_at DESC`
  );
  return rows;
}