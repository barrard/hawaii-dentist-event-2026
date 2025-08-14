const ThankYouPage = () => {
    return (
        <section className="container mx-auto py-12 text-center">
            <h1 className="text-4xl font-bold text-primary">Thank You for Registering!</h1>
            <p className="mt-4 text-lg text-foreground">
                Your registration has been successfully submitted. We look forward to seeing you at the event!
            </p>
            <p className="mt-2 text-foreground">
                You will receive a confirmation email shortly.
            </p>
        </section>
    );
};

export default ThankYouPage;
