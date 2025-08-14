
import Image from 'next/image';
import CustomButton from './CustomButton';
import MauiInfo from './MauiInfo';

const EventDetails = () => {
    return (
        <>
            <section className="container mx-auto py-12">
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
                            <p className="absolute bottom-2 right-2 text-xs text-white bg-black/50 p-1 rounded">
                                Photo by <a href="https://unsplash.com/@whereisfarid?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="underline">Farid Askerov</a> on <a href="https://unsplash.com/photos/body-of-water-under-white-cloudy-sky-during-daytime-photo-DSpC6QfjaWA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="underline">Unsplash</a>
                            </p>
                        </div>
                        <div className="relative h-64 w-full">
                            <Image
                                src="/images/neora-aylon-5jErKxqb-Dk-unsplash.jpg"
                                alt="Photo by Neora Aylon on Unsplash"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                            <p className="absolute bottom-2 right-2 text-xs text-white bg-black/50 p-1 rounded">
                                Photo by <a href="https://unsplash.com/@loveneora?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="underline">Neora Aylon</a> on <a href="https://unsplash.com/photos/palm-trees-facing-the-sea-5jErKxqb-Dk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="underline">Unsplash</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <MauiInfo />
        </>
    );
};

export default EventDetails;
