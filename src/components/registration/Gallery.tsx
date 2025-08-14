import Image from 'next/image';
import { Card, CardContent } from '@/registry/new-york-v4/ui/card';

const Gallery = () => {
    return (
        <section className="container mx-auto py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Experience Maui</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                    <CardContent className="p-0 relative">
                        <Image
                            src="/images/leo_visions-407m8uT3GRY-unsplash.jpg"
                            alt="Photo by Leo_Visions on Unsplash"
                            width={600}
                            height={400}
                            className="rounded-t-lg object-cover"
                        />
                        <div className="p-4">
                            <p className="text-xs text-muted-foreground">
                                Photo by <a href="https://unsplash.com/@leo_visions_?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="underline">Leo_Visions</a> on <a href="https://unsplash.com/photos/yellow-and-black-turtle-in-water-407m8uT3GRY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="underline">Unsplash</a>
                            </p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-0 relative">
                        <Image
                            src="/images/jeff-king-jYBy2HCUve0-unsplash.jpg"
                            alt="Photo by Jeff King on Unsplash"
                            width={600}
                            height={400}
                            className="rounded-t-lg object-cover"
                        />
                        <div className="p-4">
                            <p className="text-xs text-muted-foreground">
                                Photo by <a href="https://unsplash.com/@jeffkingla?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="underline">Jeff King</a> on <a href="https://unsplash.com/photos/brown-and-red-sand-jYBy2HCUve0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="underline">Unsplash</a>
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default Gallery;
