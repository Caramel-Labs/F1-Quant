import validator from 'validator';

const blockedDomains = [
  'example.com',
  'test.com',
  'mailinator.com',
  '10minutemail.com',
  'tempmail.com',
  'dispostable.com'
];

export function isValidEmail(email) {
  if (!validator.isEmail(email)) {
    return false;
  }

  const domain = email.split('@')[1].toLowerCase();
  if (blockedDomains.includes(domain)) {
    return false;
  }

  return true;
}