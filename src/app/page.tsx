/**
 * The main page component.
 *
 * @returns {JSX.Element} The rendered page.
 */
const Page = () => {
    return (
        <main className='flex flex-1 flex-col items-center justify-center p-6 text-center'>
            <h1 className='text-4xl font-bold'>Welcome to Your Application!</h1>
            <p className='text-muted-foreground mt-4 text-lg'>
                Get started by editing <code>src/app/page.tsx</code>
            </p>
        </main>
    );
};

export default Page;
