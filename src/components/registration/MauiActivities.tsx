import Image from 'next/image';

import { Card, CardContent } from '@/registry/new-york-v4/ui/card';

import PhotoCredit from './PhotoCredit';

const MauiActivities = () => {
    return (
        <section className='bg-muted container mx-auto rounded-lg p-4 py-1'>
            <h2 className='mb-8 text-center text-3xl font-bold'>Experience Maui</h2>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                <Card className='py-0'>
                    <CardContent className='relative p-0'>
                        <Image
                            src='/images/leo_visions-407m8uT3GRY-unsplash.jpg'
                            alt='Photo by Leo_Visions on Unsplash'
                            width={600}
                            height={400}
                            className='rounded-lg object-cover'
                        />
                        <div>
                            <PhotoCredit
                                name='Leo_Visions'
                                href='https://unsplash.com/@leo_visions_?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
                            />
                        </div>
                    </CardContent>
                </Card>
                <Card className='py-0'>
                    <CardContent className='relative p-0'>
                        <Image
                            src='/images/jeff-king-jYBy2HCUve0-unsplash.jpg'
                            alt='Photo by Jeff King on Unsplash'
                            width={600}
                            height={400}
                            className='rounded-lg object-cover'
                        />
                        <div>
                            <PhotoCredit
                                name='Jeff King'
                                href='https://unsplash.com/@jeffkingla?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default MauiActivities;
