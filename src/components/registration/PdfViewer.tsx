"use client";

import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import { colors } from '@/lib/colors';
import { Button } from '@/registry/new-york-v4/ui/button';

import CustomButton from './CustomButton';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/registry/new-york-v4/ui/dialog';

import { Eye, FileDown, Loader2, ZoomIn, ZoomOut } from 'lucide-react';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

interface PdfViewerProps {
    file: string;
    name: string;
    isOpen: boolean;
    onClose: () => void;
}

const PdfViewer = ({ file, name, isOpen, onClose }: PdfViewerProps) => {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1.0);
    const [pageWidth, setPageWidth] = useState(0);
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        setScreenWidth(window.innerWidth);
    }, []);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = file;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    function onPageLoadSuccess(page: any) {
        setPageWidth(page.width);
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent
                className='max-w-full'
                style={{
                    backgroundColor: colors.lightBackground,
                    width: pageWidth ? `${Math.min(pageWidth + 40, screenWidth * 0.9)}px` : 'auto'
                }}>
                <DialogHeader>
                    <DialogTitle>{name}</DialogTitle>
                    <DialogDescription asChild>
                        <div>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center space-x-2'>
                                    <Button variant='secondary' onClick={() => setScale(scale * 1.2)}>
                                        <ZoomIn className='h-4 w-4' />
                                    </Button>
                                    <Button variant='secondary' onClick={() => setScale(scale / 1.2)}>
                                        <ZoomOut className='h-4 w-4' />
                                    </Button>
                                </div>
                                <p>
                                    Page {pageNumber} of {numPages}
                                </p>
                                <CustomButton variant='accent' size='sm' onClick={handleDownload}>
                                    <FileDown className='mr-2 h-4 w-4' />
                                    Download
                                </CustomButton>
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
                <div className='h-[70vh] overflow-auto'>
                    <Document
                        file={file}
                        onLoadSuccess={onDocumentLoadSuccess}
                        loading={<Loader2 className='h-8 w-8 animate-spin' />}>
                        <Page
                            pageNumber={pageNumber}
                            scale={scale}
                            onLoadSuccess={onPageLoadSuccess}
                        />
                    </Document>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PdfViewer;
