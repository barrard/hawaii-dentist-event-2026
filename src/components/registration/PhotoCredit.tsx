'use client';

interface PhotoCreditProps {
    name: string;
    href: string;
}

const PhotoCredit = ({ name, href }: PhotoCreditProps) => {
    return (
        <p className="absolute bottom-2 right-2 text-xs text-white bg-black/50 p-1 rounded">
            Photo by <a href={href} target="_blank" rel="noopener noreferrer" className="underline">{name}</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="underline">Unsplash</a>
        </p>
    );
};

export default PhotoCredit;
