code:
'use server';

import Mailgun from 'mailgun.js';
import formDataModule from 'form-data'; // Assuming you're in a Node.js environment

const requiredFields = [
  'first-name',
  'last-name',
  'email',
  'phone',
  'deadline',
  'description',
];

// Assuming FormData is available in your environment, otherwise, define a suitable type
export async function create(formData: FormData) {
  const formDataKeys = [...formData.keys()];
  for (const key of requiredFields) {
    if (!formDataKeys.includes(key)) {
      throw new Error(`Missing required field: ${key}`);
    }
  }

  const mailgun = new Mailgun(formDataModule);
  const DOMAIN = "www.elevenllm.dev";
  const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'key-yourkeyhere'});

  try {
    const response = await mg.messages.create(DOMAIN, {
      from: 'Client Intake Form <mailgun@www.elevenllm.dev.org>',
      to: 'IIEleven11@yahoo.com',
      subject: '[SUBMISSION] Client Intake Form',
      text: `${formData.get('first-name')} submitted an order request:\n\nFirst name: ${formData.get('first-name')}\nLast name: ${formData.get('last-name')}\nEmail: ${formData.get('email')}\nPhone: ${formData.get('phone')}\nDeadline: ${formData.get('deadline')}\nDescription: ${formData.get('description')}\nReferences: ${formData.get('references')}`,
    });

    console.log('Message sent: ', response.message);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Failed to send message: ', error.message);
    } else {
      console.error('An unknown error occurred');
    }
    
  }
}