'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';

import { Alert, AlertDescription, AlertTitle } from '@/registry/new-york-v4/ui/alert';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';

import { AlertTriangle, Eye, FileDown } from 'lucide-react';
import { useState } from 'react';

import CustomButton from './CustomButton';

const PdfViewer = dynamic(() => import('./PdfViewer'), { ssr: false });

const MauiInfo = () => {
    const [selectedMap, setSelectedMap] = useState<{ name: string; href: string } | null>(null);

    const maps = [
        { name: 'Maui Island', href: '/pdf/mauimap.pdf' },
        { name: 'Central Maui', href: '/pdf/centralmauimap.pdf' },
        { name: 'Lahaina map', href: '/pdf/lahainamap.pdf' },
        { name: 'South Maui map', href: '/pdf/southmauimap.pdf' },
        { name: 'West Maui map', href: '/pdf/westmauimap.pdf' },
        { name: 'Upcountry Maui map', href: '/pdf/upcountrymauimap.pdf' }
    ];

    return (
        <section className='container mx-auto py-12'>
            <h2 className='mb-8 text-center text-3xl font-bold'>Discover Maui</h2>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Map of Maui</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <iframe
                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d477401.9158219021!2d-156.66834784915613!3d20.803321589156095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x79552b4acc4c61dd%3A0xcc43e741dc113e7f!2sMaui!5e0!3m2!1sen!2sus!4v1755204515459!5m2!1sen!2sus'
                                width='100%'
                                height='450'
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading='lazy'
                                referrerPolicy='no-referrer-when-downgrade'></iframe>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>August Weather in Maui</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-muted-foreground'>
                                Maui in August is typically hot, sunny, and dry, with average high temperatures in the
                                mid-80s Fahrenheit and low temperatures in the mid-70s. It's within the dry season, so
                                rainfall is minimal, but localized showers can occur. August is also a popular time to
                                visit, so expect larger crowds.
                            </p>
                            <ul className='mt-4 list-disc space-y-2 pl-6'>
                                <li>
                                    <strong>Temperatures:</strong> Daytime highs in the mid-80s°F (29-30°C), nighttime
                                    lows in the mid-70s°F (23-24°C).
                                </li>
                                <li>
                                    <strong>Sunshine:</strong> Generally sunny with low rainfall, ideal for outdoor
                                    activities.
                                </li>
                                <li>
                                    <strong>Rainfall:</strong> Localized showers can occur, so a light rain jacket is
                                    recommended.
                                </li>
                                <li>
                                    <strong>Crowds:</strong> August is a popular month, so expect larger crowds.
                                </li>
                                <li>
                                    <strong>Water Temperature:</strong> Averages around 79°F (26°C), perfect for
                                    swimming.
                                </li>
                            </ul>
                            <Alert variant='destructive' className='mt-6'>
                                <AlertTriangle className='h-4 w-4' />
                                <AlertTitle>Hurricane Season Awareness</AlertTitle>
                                <AlertDescription>
                                    While Hawaii's hurricane season runs from June to November, severe weather events
                                    are rare. It's always wise to stay informed about local weather forecasts.
                                </AlertDescription>
                            </Alert>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <Card className='relative mt-8 w-full overflow-hidden'>
                <Image
                    src='/images/luke-scarpino-ngRNC_h2G8E-unsplash.jpg'
                    alt='Photo by Luke Scarpino on Unsplash'
                    layout='fill'
                    objectFit='cover'
                    className='z-0'
                />
                <div className='absolute inset-0 z-0 bg-black/50' />
                <div className='relative z-10 text-white'>
                    <CardHeader>
                        <CardTitle>Downloadable Maps</CardTitle>
                        <p className='pt-2'>
                            Maps provided by{' '}
                            <a
                                href='https://www.manaloharentacar.net'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='hover:text-primary-foreground/80 underline'>
                                manaloharentacar.net
                            </a>
                        </p>
                    </CardHeader>
                    <CardContent className='grid grid-cols-1 items-start gap-8 md:grid-cols-2'>
                        <div className='space-y-4'>
                            <ul className='space-y-4'>
                                {maps.map((map) => (
                                    <li key={map.name} className='list-none flex flex-col items-center space-y-2 sm:grid sm:grid-cols-[1fr_auto] sm:items-center sm:gap-4 md:flex md:flex-col md:items-center md:space-y-2 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-4'>
                                        <p className='text-lg font-semibold w-full text-center sm:text-left md:w-full md:text-center lg:text-left'>{map.name}</p>
                                        <div className='flex items-start space-x-4 justify-center w-full sm:justify-start md:justify-center md:w-full lg:justify-start'>
                                            <CustomButton
                                                variant='secondary'
                                                size='sm'
                                                icon={<Eye className='h-4 w-4' />}
                                                onClick={() => setSelectedMap(map)}>
                                                View
                                            </CustomButton>
                                            <CustomButton
                                                variant='accent'
                                                size='sm'
                                                icon={<FileDown className='h-4 w-4' />}
                                                href={map.href}
                                                target='_blank'
                                                rel='noopener noreferrer'>
                                                Download
                                            </CustomButton>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <p className='mt-4 text-xs'>
                                Background Photo by{' '}
                                <a
                                    href='https://unsplash.com/@lrscarpino?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='underline'>
                                    Luke Scarpino
                                </a>{' '}
                                on{' '}
                                <a
                                    href='https://unsplash.com/photos/a-beach-with-palm-trees-and-a-mountain-in-the-background-ngRNC_h2G8E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='underline'>
                                    Unsplash
                                </a>
                            </p>
                        </div>
                        <div>
                            <Image
                                src='/images/maui-map.jpeg'
                                alt='Maui Map'
                                width={500}
                                height={300}
                                className='rounded-lg shadow-lg'
                            />
                        </div>
                    </CardContent>
                </div>
            </Card>
            {selectedMap && (
                <PdfViewer
                    file={selectedMap.href}
                    name={selectedMap.name}
                    isOpen={!!selectedMap}
                    onClose={() => setSelectedMap(null)}
                />
            )}
        </section>
    );
};

export default MauiInfo;
