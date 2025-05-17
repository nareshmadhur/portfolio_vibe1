
'use server';

import { z } from 'zod';
import { siteContent } from '@/lib/constants'; // Import siteContent for messages

/**
 * Zod schema for validating contact form data.
 */
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

/**
 * Defines the shape of the state returned by the submitContactForm server action.
 */
export type ContactFormState = {
  message: string;
  success: boolean;
  errors?: z.ZodIssue[];
};

/**
 * Server action to handle contact form submissions.
 * Validates the form data and simulates an API call.
 * @param {ContactFormState} prevState - The previous state of the form action.
 * @param {FormData} formData - The submitted form data.
 * @returns {Promise<ContactFormState>} The new state after processing the form.
 */
export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: siteContent.contactPage.form.genericFormError, // Use constant for error message
      success: false,
      errors: validatedFields.error.issues,
    };
  }

  // In a real application, you would process the data here (e.g., send an email, save to database)
  // console.log("Contact Form Submitted:", validatedFields.data); // Removed for cleanup

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: siteContent.contactPage.form.genericSuccessMessage, // Use constant for success message
    success: true,
  };
}

    