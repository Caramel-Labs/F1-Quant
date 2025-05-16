import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

/**
 * Send a waiting list confirmation email to a prospect
 * @param {string} name - The prospect's name
 * @param {string} email - The prospect's email address
 * @returns {Promise} - The result of the email sending operation
 */
export async function sendWaitlistConfirmationEmail(name, email) {
  try {
    const mailOptions = {
      from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM_ADDRESS}>`,
      to: email,
      subject: 'Welcome to QuantF1',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for joining our waiting list, ${name}!</h2>
          <p>We've successfully received your registration for <strong>${process.env.COMPANY_NAME || 'our product'}</strong>. You're now on our priority list and will be among the first to know when we launch.</p>
          <p>What happens next:</p>
          <ul>
            <li>We'll send you occasional updates about our progress</li>
            <li>You'll receive early access when we're ready to launch</li>
            <li>We may reach out for feedback on new features</li>
          </ul>
          <p>If you have any questions, please contact us at <a href="mailto:${process.env.CONTACT_EMAIL || process.env.EMAIL_FROM_ADDRESS}">${process.env.CONTACT_EMAIL || process.env.EMAIL_FROM_ADDRESS}</a>.</p>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px;">Best regards,<br>${process.env.EMAIL_FROM_NAME || 'The Team'}</p>
            <p style="color: #999; font-size: 12px;">${process.env.COMPANY_ADDRESS || ''}</p>
            <p style="color: #999; font-size: 11px;">
              If you didn't sign up for our waiting list, please ignore this email.<br>
              <a href="\${process.env.UNSUBSCRIBE_LINK || '#'}">Unsubscribe</a> from future communications.
            </p>
          </div>
        </div>
      `,
      text: `Thank you for joining our waiting list, ${name}!\n\nWe've successfully received your registration for ${process.env.COMPANY_NAME || 'our product'}. You're now on our priority list and will be among the first to know when we launch.\n\nWhat happens next:\n- We'll send you occasional updates about our progress\n- You'll receive early access when we're ready to launch\n- We may reach out for feedback on new features\n\nIf you have any questions, please contact us at ${process.env.CONTACT_EMAIL || process.env.EMAIL_FROM_ADDRESS}.\n\nBest regards,\n${process.env.EMAIL_FROM_NAME || 'The Team'}\n\n${process.env.COMPANY_ADDRESS || ''}\n\nIf you didn't sign up for our waiting list, please ignore this email.\nTo unsubscribe: ${process.env.UNSUBSCRIBE_LINK || 'Reply with UNSUBSCRIBE in the subject line'}`,
    };
    const info = await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    throw error;
  }
}