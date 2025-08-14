import { Avatar, AvatarFallback } from '@/registry/new-york-v4/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';

const speakers = [
    {
        name: 'Dr. John Doe',
        bio: 'Dr. John Doe is a renowned expert in restorative dentistry with over 20 years of experience. He has published numerous articles and is a sought-after speaker at international conferences.',
        topic: 'Advanced Techniques in Gold Foil Restoration',
    },
    {
        name: 'Dr. Jane Smith',
        bio: 'Dr. Jane Smith is a leading researcher in dental materials science. Her work focuses on the longevity and biocompatibility of restorative materials.',
        topic: 'The Science Behind Modern Dental Adhesives',
    },
];

const Speakers = () => {
    return (
        <section className="container mx-auto py-12">
            <h2 className="text-3xl font-bold mb-8">Featured Speakers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {speakers.map((speaker) => (
                    <Card key={speaker.name}>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Avatar className="h-20 w-20">
                                <AvatarFallback>{speaker.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle>{speaker.name}</CardTitle>
                                <p className="text-muted-foreground">{speaker.topic}</p>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{speaker.bio}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Speakers;
