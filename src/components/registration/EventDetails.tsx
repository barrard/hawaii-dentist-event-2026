
import Image from 'next/image';
import CustomButton from './CustomButton';
import MauiInfo from './MauiInfo';
import PhotoCredit from './PhotoCredit';

const EventDetails = () => {
    return (
        <>
            <section className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="text-2xl font-semibold">Date & Time</h3>
                        <p className="text-muted-foreground mt-2">August 12th-15th, 2025</p>
                        
                        <h3 className="text-2xl font-semibold mt-8">Location</h3>
                        <p className="text-muted-foreground mt-2">Wailea Beach Resort - Marriott, Maui</p>
                        <CustomButton href="#hotel-details" size="sm" className="mt-4" variant="outline">
                            View Hotel Details
                        </CustomButton>

                        <h3 className="text-2xl font-semibold mt-8">Registration Costs</h3>
                        <ul className="text-muted-foreground mt-2 list-disc pl-6">
                            <li>Members & Guest Dentists: $1200 ($1300 after July 31st)</li>
                            <li>Short Course: $1400 (Limited to 16 participants)</li>
                            <li>Companions: $700 ($800 after July 31st)</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="relative h-64 w-full">
                            <Image
                                src="/images/farid-askerov-DSpC6QfjaWA-unsplash.jpg"
                                alt="Photo by Farid Askerov on Unsplash"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                            <PhotoCredit
                                name='Farid Askerov'
                                href='https://unsplash.com/@whereisfarid?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
                            />
                        </div>
                        <div className="relative h-64 w-full">
                            <Image
                                src="/images/neora-aylon-5jErKxqb-Dk-unsplash.jpg"
                                alt="Photo by Neora Aylon on Unsplash"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                            <PhotoCredit
                                name='Neora Aylon'
                                href='https://unsplash.com/@loveneora?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
                            />
                        </div>
                    </div>
                </div>
            </section>
            <MauiInfo />
        </>
    );
};

export default EventDetails;
