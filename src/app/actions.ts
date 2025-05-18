
'use server';

import { z } from 'zod';
import { siteContent } from '@/lib/constants';
// To implement actual email sending, you might use a library like Resend:
// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY); // Ensure RESEND_API_KEY is in your .env

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

  // --- Actual Email Sending Logic Would Go Here ---
  // This section is a placeholder. To send an email, you'd use a service.
  // Example using Resend (conceptual - requires setup and API key):
  /*
  if (!process.env.RESEND_API_KEY) {
    console.error('Resend API key is not configured.');
    return {
      message: 'Email service is not configured. Please contact the administrator.',
      success: false,
    };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Your Portfolio Contact Form <onboarding@resend.dev>', // Replace with your "from" address registered with Resend
      to: ['nareshmadhur@gmail.com'],
      subject: `New Contact Form Submission: ${subject}`,
      reply_to: email,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Failed to send contact form email:', error);
      return {
        message: 'Sorry, there was an issue sending your message. Please try again later.',
        success: false,
      };
    }

    console.log('Contact form email sent successfully via Resend:', data);

  } catch (error) {
    console.error('Unexpected error sending contact form email:', error);
    return {
      message: 'An unexpected error occurred while sending your message. Please try again.',
      success: false,
    };
  }
  */

  // Current placeholder behavior: Log to console and simulate a delay.
  // REMOVE THIS once you have actual email sending logic implemented above.
  console.log('Simulating email send (actual sending not implemented). Target: nareshmadhur@gmail.com, Data:', { name, email, subject, message });
  await new Promise(resolve => setTimeout(resolve, 1000));


  // Return success message
  return {
    message: siteContent.contactPage.form.genericSuccessMessage,
    success: true,
  };
}
