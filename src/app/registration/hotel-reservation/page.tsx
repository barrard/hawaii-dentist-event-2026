import { Button } from '@/registry/new-york-v4/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';

const HotelReservationPage = () => {
    return (
        <section className="container mx-auto py-12 text-center">
            <Card className="max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-3xl">Manage Your Hotel Reservation</CardTitle>
                    <CardDescription>
                        Access your booking details directly from the hotel's website.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-6">
                        You should have received a confirmation email from the Grand Wailea Resort after booking your room. This email contains your reservation details and a link to manage your booking. If you cannot find the email, you can visit the hotel's website and use your confirmation number to retrieve your reservation.
                    </p>
                    <Button asChild>
                        <a href="https://www.hilton.com/en/grand-wailea/" target="_blank" rel="noopener noreferrer">
                            Visit Hotel Website
                        </a>
                    </Button>
                </CardContent>
            </Card>
        </section>
    );
};

export default HotelReservationPage;
