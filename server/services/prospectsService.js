import * as model from '../models/prospectModel.js';
import { isValidEmail } from '../utils/validator.js';
import { sendWaitlistConfirmationEmail } from '../utils/emailTemplate.js';

export async function addProspect({ name, email }) {
  if (!name || !email || !isValidEmail(email)) {
    const err = new Error('Invalid name or email');
    err.status = 400;
    throw err;
  }

  try {
    const prospect = await model.insertProspect(name, email);

    try {
      await sendWaitlistConfirmationEmail(name.trim(), email.toLowerCase());
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
    }

    return prospect;
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
  return await model.getAllProspects();
}