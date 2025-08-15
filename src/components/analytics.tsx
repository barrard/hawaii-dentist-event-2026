'use client';

import { useEffect } from 'react';

import { usePathname } from 'next/navigation';

import Cookies from 'js-cookie';

// Import Cookies

// Simple UUID generation function (for client-side)
const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0,
            v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};

const Analytics = () => {
    const pathname = usePathname();

    useEffect(() => {
        const trackPageView = async () => {
            let userId = Cookies.get('userId'); // Get existing userId from cookie

            if (!userId) {
                userId = generateUUID(); // Generate new UUID if not found
                Cookies.set('userId', userId, { expires: 365 }); // Set cookie for 1 year
            }

            try {
                await fetch('/api/track-page-view', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ url: window.location.href, userId }) // Include userId
                });
            } catch (error) {
                console.error('Failed to track page view:', error);
            }
        };

        trackPageView();
    }, [pathname]); // Re-run when pathname changes

    return null; // This component doesn't render anything
};

export default Analytics;
