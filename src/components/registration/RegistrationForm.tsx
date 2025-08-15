'use client';

import { useState } from 'react';

import { Button } from '@/registry/new-york-v4/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';
import { Checkbox } from '@/registry/new-york-v4/ui/checkbox';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/registry/new-york-v4/ui/form';
import { Input } from '@/registry/new-york-v4/ui/input';
import { RadioGroup, RadioGroupItem } from '@/registry/new-york-v4/ui/radio-group';
import { Textarea } from '@/registry/new-york-v4/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';

import CustomButton from './CustomButton';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const FormSchema = z.object({
    firstName: z.string().min(2, {
        message: 'First name must be at least 2 characters.'
    }),
    lastName: z.string().min(2, {
        message: 'Last name must be at least 2 characters.'
    }),
    preferredName: z.string().min(2, {
        message: 'Preferred name must be at least 2 characters.'
    }),
    title: z.string().optional(),
    email: z.string().email(),
    phone: z.string().min(10, {
        message: 'Phone number must be at least 10 digits.'
    }),
    memberships: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: 'You have to select at least one item.'
    }),
    guests: z.string().optional(),
    allergies: z.string().optional(),
    golf: z.enum(['yes', 'no'])
});

const AnimatedCard = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}>
        {children}
    </motion.div>
);

const RegistrationForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            preferredName: '',
            title: '',
            email: '',
            phone: '',
            memberships: [],
            guests: '',
            allergies: '',
            golf: 'no'
        }
    });

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                toast('Registration Successful!', {
                    description: 'Thank you for registering.'
                });
                form.reset();
                window.location.href = '/registration/thank-you'; // Redirect to thank you page
            } else {
                const errorData = await response.json();
                toast('Registration Failed', {
                    description: errorData.message || 'Something went wrong.'
                });
            }
        } catch (error) {
            console.error('Submission error:', error);
            toast('Submission Error', {
                description: 'Could not connect to the server.'
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id='registration-form' className='container mx-auto py-12'>
            <h2 className='text-3xl font-bold'>Register Now</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='mt-8 space-y-6'>
                    <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                        <AnimatedCard>
                            <Card className='shadow-lg'>
                                <CardHeader>
                                    <CardTitle>Personal Information</CardTitle>
                                </CardHeader>
                                <CardContent className='space-y-4'>
                                    <FormField
                                        control={form.control}
                                        name='firstName'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>First Name *</FormLabel>
                                                <FormControl>
                                                    <Input placeholder='John' {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name='lastName'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Last Name *</FormLabel>
                                                <FormControl>
                                                    <Input placeholder='Doe' {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name='preferredName'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Preferred Name on Name Tag *</FormLabel>
                                                <FormControl>
                                                    <Input placeholder='John Doe' {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name='title'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Title</FormLabel>
                                                <FormControl>
                                                    <Input placeholder='DDS' {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </CardContent>
                            </Card>
                        </AnimatedCard>
                        <AnimatedCard>
                            <Card className='shadow-lg'>
                                <CardHeader>
                                    <CardTitle>Contact Information</CardTitle>
                                </CardHeader>
                                <CardContent className='space-y-4'>
                                    <FormField
                                        control={form.control}
                                        name='email'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email *</FormLabel>
                                                <FormControl>
                                                    <Input placeholder='john.doe@example.com' {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name='phone'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Phone Number *</FormLabel>
                                                <FormControl>
                                                    <Input placeholder='555-555-5555' {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </CardContent>
                            </Card>
                        </AnimatedCard>
                    </div>
                    <AnimatedCard>
                        <Card className='shadow-lg'>
                            <CardHeader>
                                <CardTitle>Event Preferences</CardTitle>
                            </CardHeader>
                            <CardContent className='space-y-4'>
                                <FormField
                                    control={form.control}
                                    name='memberships'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Memberships *</FormLabel>
                                            <FormDescription>Select all that apply</FormDescription>
                                            <div className='space-y-2'>
                                                <div className='flex flex-row items-start space-y-0 space-x-3'>
                                                    <FormControl>
                                                        <Checkbox
                                                            ref={field.ref}
                                                            checked={field.value?.includes('aagfo')}
                                                            onCheckedChange={(checked) => {
                                                                return checked
                                                                    ? field.onChange([
                                                                          ...(field.value || []),
                                                                          'aagfo'
                                                                      ])
                                                                    : field.onChange(
                                                                          field.value?.filter(
                                                                              (value) =>
                                                                                  value !== 'aagfo'
                                                                          )
                                                                      );
                                                            }}
                                                        />
                                                    </FormControl>
                                                    <FormLabel className='font-normal'>
                                                        American Academy of Gold Foil Operators
                                                    </FormLabel>
                                                </div>
                                                <div className='flex flex-row items-start space-y-0 space-x-3'>
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={field.value?.includes('arvtsc')}
                                                            onCheckedChange={(checked) => {
                                                                return checked
                                                                    ? field.onChange([
                                                                          ...(field.value || []),
                                                                          'arvtsc'
                                                                      ])
                                                                    : field.onChange(
                                                                          field.value?.filter(
                                                                              (value) =>
                                                                                  value !== 'arvtsc'
                                                                          )
                                                                      );
                                                            }}
                                                        />
                                                    </FormControl>
                                                    <FormLabel className='font-normal'>
                                                        Academy of RV Tucker Study Clubs
                                                    </FormLabel>
                                                </div>
                                                <div className='flex flex-row items-start space-y-0 space-x-3'>
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={field.value?.includes('guest')}
                                                            onCheckedChange={(checked) => {
                                                                return checked
                                                                    ? field.onChange([
                                                                          ...(field.value || []),
                                                                          'guest'
                                                                      ])
                                                                    : field.onChange(
                                                                          field.value?.filter(
                                                                              (value) =>
                                                                                  value !== 'guest'
                                                                          )
                                                                      );
                                                            }}
                                                        />
                                                    </FormControl>
                                                    <FormLabel className='font-normal'>
                                                        Guest Dentist
                                                    </FormLabel>
                                                </div>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name='guests'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Please indicate any guests that will be joining you</FormLabel>
                                            <FormControl>
                                                <Input placeholder='Jane Doe' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='allergies'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Please list any allergies you or your companion may have
                                            </FormLabel>
                                            <FormControl>
                                                <Textarea placeholder='Peanuts' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='golf'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Are you interested in playing golf?</FormLabel>
                                            <FormControl>
                                                <RadioGroup
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                    className='flex flex-col space-y-1'>
                                                    <FormItem className='flex items-center space-y-0 space-x-3'>
                                                        <FormControl>
                                                            <RadioGroupItem value='yes' />
                                                        </FormControl>
                                                        <FormLabel className='font-normal'>Yes</FormLabel>
                                                    </FormItem>
                                                    <FormItem className='flex items-center space-y-0 space-x-3'>
                                                        <FormControl>
                                                            <RadioGroupItem value='no' />
                                                        </FormControl>
                                                        <FormLabel className='font-normal'>No</FormLabel>
                                                    </FormItem>
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>
                    </AnimatedCard>
                    <CustomButton type='submit' disabled={isSubmitting} variant='primary' className='shadow-lg'>
                        {isSubmitting ? (
                            <>
                                <svg
                                    className='mr-2 h-5 w-5 animate-spin'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'>
                                    <circle
                                        className='opacity-25'
                                        cx='12'
                                        cy='12'
                                        r='10'
                                        stroke='currentColor'
                                        strokeWidth='4'></circle>
                                    <path
                                        className='opacity-75'
                                        fill='currentColor'
                                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                                </svg>
                                Submitting...
                            </>
                        ) : (
                            'Submit'
                        )}
                    </CustomButton>
                </form>
            </Form>
        </section>
    );
};

export default RegistrationForm;
