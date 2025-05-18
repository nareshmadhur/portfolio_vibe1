
'use server';

import { z } from 'zod';
import { siteContent } from '@/lib/constants';

/**
 * Zod schema for validating contact form data.
 * Ensures that all fields meet the minimum length or format requirements.
 */
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

/**
 * Defines the shape of the state returned by the submitContactForm server action.
 * Includes a message, a success flag, and optional Zod validation errors.
 */
export type ContactFormState = {
  message: string;
  success: boolean;
  errors?: z.ZodIssue[];
};

/**
 * Server action to handle contact form submissions.
 * Validates the form data using the `contactFormSchema`.
 * Includes a placeholder for actual email sending logic to nareshmadhur@gmail.com.
 * Returns a `ContactFormState` object indicating success or failure.
 * @param {ContactFormState} prevState - The previous state of the form action.
 * @param {FormData} formData - The submitted form data.
 * @returns {Promise<ContactFormState>} The new state after processing the form.
 */
export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Validate form fields against the schema
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  // If validation fails, return error messages
  if (!validatedFields.success) {
    return {
      message: siteContent.contactPage.form.genericFormError,
      success: false,
      errors: validatedFields.error.issues,
    };
  }

  // If validation is successful, process the data
  const { name, email, subject, message } = validatedFields.data;

  // TODO: Implement actual email sending logic here.
  // The validated data is available: name, email, subject, message.
  // You would typically use a library like Nodemailer (with an SMTP service like Gmail/SendGrid),
  // or an email API service like Resend, SendGrid API, Mailgun, etc.
  // to send an email to nareshmadhur@gmail.com with the form details.
  //
  // Example using a conceptual EmailService (requires actual implementation and setup):
  /*
  try {
    // Example:
    // const sendMail = async () => {
    //   // 1. Configure your chosen email transport (e.g., Nodemailer)
    //   //    You'll need to install the necessary package (e.g., `npm install nodemailer`)
    //   //    and configure it with your email provider's credentials (use environment variables!).
    //   const transporter = nodemailer.createTransport({
    //     service: 'gmail', // Or your SMTP provider
    //     auth: {
    //       user: process.env.GMAIL_USER,
    //       pass: process.env.GMAIL_APP_PASSWORD, // Use an App Password for Gmail
    //     },
    //   });

    //   // 2. Define email options
    //   const mailOptions = {
    //     from: email, // The sender's email from the form
    //     to: 'nareshmadhur@gmail.com', // Your email address
    //     replyTo: email,
    //     subject: `New Contact Form Submission: ${subject}`,
    //     html: `
    //       <h1>New Contact Form Submission</h1>
    //       <p><strong>Name:</strong> ${name}</p>
    //       <p><strong>Email:</strong> ${email}</p>
    //       <p><strong>Subject:</strong> ${subject}</p>
    //       <p><strong>Message:</strong></p>
    //       <p>${message.replace(/\n/g, '<br>')}</p>
    //     `,
    //   };

    //   // 3. Send the email
    //   await transporter.sendMail(mailOptions);
    //   console.log('Contact form email sent successfully.');
    // };
    //
    // await sendMail();

    // For now, just log that this is where email sending would happen
    console.log('Email sending logic would go here. Target: nareshmadhur@gmail.com, Data:', { name, email, subject, message });
    // Simulate a delay as if an email was sent
    await new Promise(resolve => setTimeout(resolve, 1000));

  } catch (error) {
    console.error('Failed to send contact form email:', error);
    return {
      // Provide a user-friendly error message
      message: 'Sorry, there was an issue sending your message. Please try again later.',
      success: false,
    };
  }
  */

  // If you are not implementing the try/catch block above yet,
  // this simulates a delay for the current placeholder behavior.
  // Remove this line once you have actual email sending logic.
  console.log('Simulating email send. Target: nareshmadhur@gmail.com, Data:', { name, email, subject, message });
  await new Promise(resolve => setTimeout(resolve, 1000));


  // Return success message
  return {
    message: siteContent.contactPage.form.genericSuccessMessage,
    success: true,
  };
}

