import { db } from '../config.js';
import { isValidEmail } from '../utils/validator.js';
import { sendWaitlistConfirmationEmail } from '../utils/emailTemplate.js';

export async function addProspect({ name, email }) {
  if (!name || !email || !isValidEmail(email)) {
    const err = new Error('Invalid name or email');
    err.status = 400;
    throw err;
  }
  try {
    const { rows } = await db.query(
      `INSERT INTO prospects (name, email) VALUES ($1, $2) RETURNING id, name, email, created_at`,
      [name.trim(), email.toLowerCase()]
    );
    // Send confirmation email
    try {
      await sendWaitlistConfirmationEmail(name.trim(), email.toLowerCase());
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
    }
    return rows[0];
  } catch (e) {
    if (e.code === '23505') {
      const err409 = new Error('Email already registered');
      err409.status = 409;
      throw err409;
    }
    throw e;
  }
}

export async function getAllProspects() {
  const { rows } = await db.query(
    `SELECT id, name, email, created_at FROM prospects ORDER BY created_at DESC`
  );
  return rows;
}