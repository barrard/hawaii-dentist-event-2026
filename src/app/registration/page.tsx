import type { Metadata } from 'next';
import Image from 'next/image';

import EventDetails from '@/components/registration/EventDetails';
import MauiActivities from '@/components/registration/MauiActivities';
import HeroSection from '@/components/registration/HeroSection';
import HotelDetails from '@/components/registration/HotelDetails';
import RegistrationForm from '@/components/registration/RegistrationForm';
import Schedule from '@/components/registration/Schedule';
import Speakers from '@/components/registration/Speakers';

export const metadata: Metadata = {
    title: 'Event Registration',
    description: 'Register for the Joint Annual Session in Maui, Hawaii.'
};

const RegistrationPage = () => {
    return (
        <main className='flex-1'>
            <HeroSection />
            <EventDetails />
            <HotelDetails />
            <Schedule />
            <Speakers />
            <MauiActivities />
            <RegistrationForm />
            <div className="container mx-auto py-12 flex justify-center">
                <Image
                    src="/images/AGD-2027_PACE_Disclaimer.svg"
                    alt="AGD PACE Disclaimer"
                    width={500}
                    height={100}
                />
            </div>
        </main>
    );
};

export default RegistrationPage;
