import { Alert, AlertDescription, AlertTitle } from '@/registry/new-york-v4/ui/alert';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';

import CustomButton from './CustomButton';
import { AlertCircle } from 'lucide-react';

const HotelDetails = () => {
    return (
        <section id="hotel-details" className='container mx-auto py-12'>
            <h2 className='mb-8 text-3xl font-bold px-4 sm:px-0'>Hotel & Resort Information</h2>
            <Card>
                <CardHeader>
                    <CardTitle>Wailea Beach Resort - Marriott, Maui</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className='text-muted-foreground'>
                        Nestled between two of Maui's best beaches, our oceanfront resort is the ideal place to unwind
                        and enjoy the beauty of Hawaii.
                    </p>
                    <div className='mt-6 grid grid-cols-1 gap-8 md:grid-cols-2'>
                        <div>
                            <div className='mt-6'>
                                <Alert>
                                    <AlertCircle className='h-4 w-4' />
                                    <AlertTitle>Important Registration Information</AlertTitle>
                                    <AlertDescription>
                                        <p>
                                            Register before <strong>December 15, 2026</strong> to get guaranteed
                                            discounted meeting hotel rates.
                                        </p>
                                        <p className='mt-2'>
                                            We have a block of 70 rooms reserved. If the block is not filled, the total
                                            number of discounted rooms will be reduced to 50. Book early to secure your
                                            spot!
                                        </p>
                                    </AlertDescription>
                                </Alert>
                            </div>
                            <div className='mt-6'>
                                <h3 className='text-xl font-semibold'>Room Reservations</h3>
                                <p className='text-muted-foreground mt-2'>
                                    To reserve your room at the discounted rate, please use the button below. For room
                                    upgrades, please contact the hotel directly after booking your initial reservation
                                    and mention you are with our group.
                                </p>

                                <CustomButton
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    href='https://www.marriott.com/en-us/hotels/hnmmc-wailea-beach-resort-marriott-maui/overview/'
                                    size='lg'
                                    className='mt-4'
                                    variant='primary'>
                                    Reserve Your Room
                                </CustomButton>
                            </div>
                        </div>
                        <div>
                            <iframe
                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.5497926640355!2d-156.4428011!3d20.6878874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7954dada4b61da4d%3A0xe73f5d288a7aae5b!2sWailea%20Beach%20Resort%20-%20Marriott%2C%20Maui!5e0!3m2!1sen!2sus!4v1755155692590!5m2!1sen!2sus'
                                width='100%'
                                height='450'
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading='lazy'
                                referrerPolicy='no-referrer-when-downgrade'></iframe>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
};

export default HotelDetails;
