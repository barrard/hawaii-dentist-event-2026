import Image from 'next/image';
import CustomButton from './CustomButton';

const HeroSection = () => {
    return (
        <section
            className='relative h-[50vh] bg-cover bg-center text-white'
            style={{ backgroundImage: "url('/images/RDTuckerinlays.JPG')" }}>
            <div className='absolute inset-0 bg-black/50' />
            <div className='relative z-10 container mx-auto flex h-full flex-col items-center justify-center text-center'>
                <Image src='/images/logo-tucker.png' alt='Tucker Logo' width={150} height={150} />
                <h1 className='mt-4 text-5xl font-bold'>Joint Annual Session</h1>
                <p className='mt-4 text-xl'>
                    Presented by The American Academy of Gold Foil Operators and The Academy of RV Tucker Study Clubs.
                </p>
                <CustomButton href='#registration-form' size='lg' className='mt-8' variant='primary'>
                    Register Now
                </CustomButton>
            </div>
        </section>
    );
};

export default HeroSection;
