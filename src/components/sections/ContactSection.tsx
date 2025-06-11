
'use client';

import { useActionState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { submitContactForm, type ContactFormState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Loader2 } from 'lucide-react';
import { useFormStatus } from 'react-dom';
import { siteContent } from '@/lib/constants';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const initialState: ContactFormState = {
  message: '',
  success: false,
};

/**
 * Submit button component for the contact form.
 * Displays a loader and "Sending..." text when the form is pending.
 * @returns {JSX.Element} The SubmitButton component.
 */
function SubmitButton() {
  const { pending } = useFormStatus(); // Simplified: Directly use useFormStatus
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {pending ? siteContent.contactPage.form.sendingButton : siteContent.contactPage.form.sendButton}
    </Button>
  );
}

/**
 * Contact section component containing the contact form.
 * Handles form submission using React Server Actions and displays toasts for feedback.
 * @returns {JSX.Element} The ContactSection component.
 */
export default function ContactSection() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? siteContent.contactPage.form.successMessageTitle : siteContent.contactPage.form.errorMessageTitle,
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
      if (state.success) {
        form.reset();
      }
    }
    if (state.errors) {
        state.errors.forEach(error => {
            form.setError(error.path[0] as keyof ContactFormValues, { message: error.message });
        });
    }
  }, [state, toast, form]);

  return (
    <Card className="max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl text-left">{siteContent.contactPage.form.title}</CardTitle>
        <CardDescription className="text-left">
          {siteContent.contactPage.form.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form action={formAction} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="name">{siteContent.contactPage.form.nameLabel}</FormLabel>
                  <FormControl>
                    <Input id="name" placeholder={siteContent.contactPage.form.namePlaceholder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email">{siteContent.contactPage.form.emailLabel}</FormLabel>
                  <FormControl>
                    <Input id="email" type="email" placeholder={siteContent.contactPage.form.emailPlaceholder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="subject">{siteContent.contactPage.form.subjectLabel}</FormLabel>
                  <FormControl>
                    <Input id="subject" placeholder={siteContent.contactPage.form.subjectPlaceholder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="message">{siteContent.contactPage.form.messageLabel}</FormLabel>
                  <FormControl>
                    <Textarea id="message" placeholder={siteContent.contactPage.form.messagePlaceholder} rows={5} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <SubmitButton />
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

    
