import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === 'true',
  requireTLS: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendWaitlistConfirmationEmail(name, email) {
  try {
    const sanitizedName = name.replace(/[^\w\s]/gi, '');
    const mailOptions = {
      from: {
        name: process.env.EMAIL_FROM_NAME,
        address: process.env.EMAIL_FROM_ADDRESS
      },
      to: email,
      subject: 'Thanks for joining F1 Quant!',
      replyTo: process.env.CONTACT_EMAIL || process.env.EMAIL_FROM_ADDRESS,
      headers: {
        'List-Unsubscribe': `<mailto:${process.env.CONTACT_EMAIL || process.env.EMAIL_FROM_ADDRESS}?subject=unsubscribe>, <${process.env.UNSUBSCRIBE_LINK || '#'}>`,
        'Precedence': 'bulk',
        'X-Auto-Response-Suppress': 'OOF, AutoReply'
      },
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to F1 Quant</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: collapse;">
            <tr>
              <td style="padding: 0;">
                <h2 style="color: #333; margin-bottom: 20px;">Welcome to F1 Quant, ${sanitizedName}!</h2>
                
                <p>Thank you for joining our waitlist. We're excited to have you on board as one of our early supporters.</p>
                
                <p>As a member of our waitlist, you'll receive:</p>
                
                <ul style="padding-left: 20px;">
                  <li>Early access when we launch</li>
                  <li>Exclusive updates on our development progress</li>
                  <li>Opportunities to provide feedback and shape our product</li>
                </ul>
                
                <p>We're working hard to create something special and can't wait to share it with you.</p>
                
                <p>If you have any questions in the meantime, feel free to reach out to us at <a href="mailto:${process.env.CONTACT_EMAIL}" style="color: #0066cc;">${process.env.CONTACT_EMAIL}</a>.</p>
                
                <p style="margin-top: 30px;">
                  Best regards,<br>
                  The QuantF1 Team
                </p>
                
                <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
                  <p>${process.env.COMPANY_NAME}</p>
                  
                  <p>This email was sent to ${email}. If you didn't sign up for the F1 Quant waitlist, please disregard this message.</p>
                  
                  <p><a href="${process.env.UNSUBSCRIBE_LINK}" style="color: #666;">Unsubscribe</a> from future communications.</p>
                </div>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      text: `
Welcome to F1 Quant, ${sanitizedName}!

Thank you for joining our waitlist. We're excited to have you on board as one of our early supporters.

As a member of our waitlist, you'll receive:
- Early access when we launch
- Exclusive updates on our development progress
- Opportunities to provide feedback and shape our product

We're working hard to create something special and can't wait to share it with you.

If you have any questions in the meantime, feel free to reach out to us at ${process.env.CONTACT_EMAIL}.

Best regards,
The F1 Quant Team

---
${process.env.COMPANY_NAME}
${process.env.COMPANY_ADDRESS}

This email was sent to ${email}. If you didn't sign up for the QuantF1 waitlist, please disregard this message.
To unsubscribe: ${process.env.UNSUBSCRIBE_LINK}
      `.trim(),
    };
    // Add a delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 300));

    const info = await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    throw error;
  }
}