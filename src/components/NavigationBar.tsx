import Link from 'next/link';

const NavigationBar = () => {
    return (
        <nav className='mx-auto mt-3 flex w-full max-w-7xl items-center justify-between px-3 sm:px-0 lg:mt-6'>
            <Link href='/'>
                <h1 className='text-xl font-bold'>My App</h1>
            </Link>
            <div className='flex items-center gap-4'>
                <Link
                    href='/registration'
                    className='text-muted-foreground hover:text-primary text-sm font-medium transition-colors'>
                    Registration
                </Link>
            </div>
        </nav>
    );
};

export default NavigationBar;
