import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendWaitlistConfirmationEmail(name, email) {
  try {
    const mailOptions = {
      from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM_ADDRESS}>`,
      to: email,
      subject: 'Thanks for joining QuantF1!',
      replyTo: process.env.CONTACT_EMAIL || process.env.EMAIL_FROM_ADDRESS,
      headers: {
        'List-Unsubscribe': `<mailto:${process.env.CONTACT_EMAIL || process.env.EMAIL_FROM_ADDRESS}?subject=unsubscribe>, <${process.env.UNSUBSCRIBE_LINK || '#'}>`,
      },
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Hi ${name}, you're on the QuantF1 waitlist!</h2>
          <p>We're excited to have you on board. You’ve been added to our early access list for <strong>${process.env.COMPANY_NAME || 'our platform'}</strong>.</p>
          <p>What to expect:</p>
          <ul>
            <li>Occasional updates about our progress</li>
            <li>Early access invites when we launch</li>
            <li>Opportunities to give feedback on features</li>
          </ul>
          <p>Have questions? Reach us at <a href="mailto:${process.env.CONTACT_EMAIL || process.env.EMAIL_FROM_ADDRESS}">${process.env.CONTACT_EMAIL || process.env.EMAIL_FROM_ADDRESS}</a>.</p>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px;">Best regards,<br>${process.env.EMAIL_FROM_NAME || 'The Team'}</p>
            <p style="color: #999; font-size: 12px;">${process.env.COMPANY_ADDRESS || ''}</p>
            <p style="color: #999; font-size: 11px;">
              If you didn't sign up, you can safely ignore this email.<br>
              <a href="${process.env.UNSUBSCRIBE_LINK || '#'}">Unsubscribe</a> from future messages.
            </p>
          </div>
        </div>
      `,
      text: `
Hi ${name},

Thanks for joining the QuantF1 waitlist! You've successfully registered for ${process.env.COMPANY_NAME || 'our platform'}.

What to expect:
- Occasional updates about our progress
- Early access when we launch
- Opportunities to provide feedback

Questions? Contact us at ${process.env.CONTACT_EMAIL || process.env.EMAIL_FROM_ADDRESS}.

Best regards,
${process.env.EMAIL_FROM_NAME || 'The Team'}

${process.env.COMPANY_ADDRESS || ''}

If you didn’t sign up, you can ignore this email.
To unsubscribe: ${process.env.UNSUBSCRIBE_LINK || 'Reply with UNSUBSCRIBE in the subject line'}
      `.trim(),
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    throw error;
  }
}