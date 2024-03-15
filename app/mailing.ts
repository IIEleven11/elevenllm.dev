'use server';
<<<<<<< HEAD
require('dotenv').config();

=======

import Mailgun from 'mailgun.js';
import formDataModule from 'form-data'; // Assuming you're in a Node.js environment
>>>>>>> 26551e1 (submit form update)

const requiredFields = [
  'first-name',
  'last-name',
  'email',
  'phone',
  'deadline',
  'description',
];

<<<<<<< HEAD
// Server action
=======
>>>>>>> 26551e1 (submit form update)
export async function create(formData: FormData) {
  const formDataKeys = [...formData.keys()];
  for (const key of requiredFields) {
    if (!formDataKeys.includes(key)) {
      throw new Error(`Missing required field: ${key}`);
    }
  }

<<<<<<< HEAD
  if (!process.env.MAILGUN_API_KEY) {
    throw new Error('MAILGUN_API_KEY is not defined. Please set it in your environment.');
  }

  const mailgun = require("mailgun-js");
  const DOMAIN = "sandbox1848d36d510f458591c808d01b6a5797.mailgun.org";
  const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN });
  const data = {
    from: 'Client Intake Form <postmaster@sandbox1848d36d510f458591c808d01b6a5797.mailgun.org>',
    to: 'IIEleven11@yahoo.com',
    subject: '[SUBMISSION] Client Intake Form',
    text: `${formData.get('first-name')} submitted an order request:\n\nFirst name: ${formData.get('first-name')}\nLast name: ${formData.get('last-name')}\nEmail: ${formData.get('email')}\nPhone: ${formData.get('phone')}\nDeadline: ${formData.get('deadline')}\nDescription: ${formData.get('description')}\nReferences: ${formData.get('references')}`,
  };

  mg.messages().send(data, function(error: any, body: any) {
    console.log(body);
  });

  // You can see a record of this email in your logs: https://app.mailgun.com/app/logs.

  // You can send up to 300 emails/day from this sandbox server.
  // Next, you should add your own domain so you can send 10000 emails/month for free.

}
=======
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
    // Return a success message
    return 'Application has been successfully sent.';
  } catch (error) {
    if (error instanceof Error) {
      console.error('Failed to send message: ', error.message);
      throw new Error('Failed to send application.');
    } else {
      console.error('An unknown error occurred');
      throw new Error('An unknown error occurred.');
    }
  }
}


>>>>>>> 26551e1 (submit form update)
