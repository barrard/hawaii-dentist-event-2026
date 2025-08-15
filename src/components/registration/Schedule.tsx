'use client';

import React, { useState } from 'react';

import { colors } from '@/lib/colors';
import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';

import { Calendar, Clock, GraduationCap, MapPin, Music, Users, Utensils } from 'lucide-react';

type EventType = 'business' | 'social' | 'meals' | 'free';

interface Event {
    time: string;
    title: string;
    type: EventType;
    location?: string;
    note?: string;
}

interface DaySchedule {
    date: string;
    events: Event[];
}

interface ScheduleData {
    [key: string]: DaySchedule;
}

const EventSchedule = () => {
    const [selectedDay, setSelectedDay] = useState('wednesday');

    const getEventIcon = (event: string) => {
        if (
            event.toLowerCase().includes('breakfast') ||
            event.toLowerCase().includes('lunch') ||
            event.toLowerCase().includes('dinner') ||
            event.toLowerCase().includes('reception')
        ) {
            return <Utensils className='h-4 w-4' />;
        }
        if (event.toLowerCase().includes('lecture') || event.toLowerCase().includes('meeting')) {
            return <GraduationCap className='h-4 w-4' />;
        }
        if (event.toLowerCase().includes('dancing')) {
            return <Music className='h-4 w-4' />;
        }
        if (event.toLowerCase().includes('golf')) {
            return <Users className='h-4 w-4' />;
        }

        return <Clock className='h-4 w-4' />;
    };

    const scheduleData: ScheduleData = {
        wednesday: {
            date: 'Wednesday, August 12',
            events: [
                { time: 'Morning', title: 'Golf Tournament', type: 'social' },
                { time: '11am - 5pm', title: 'Check in and Registration, Sign up for Dine Around', type: 'business' },
                { time: '1pm - 4pm', title: 'Executive Council Meeting', location: 'Hotel', type: 'business' },
                { time: '5pm - 8pm', title: 'Welcome Reception', type: 'social' }
            ]
        },
        thursday: {
            date: 'Thursday, August 13',
            events: [
                { time: '7am - 5pm', title: 'Registration and Sign up for Dine Around', type: 'business' },
                {
                    time: '7am - 9:30am',
                    title: 'Breakfast',
                    location: 'Hotel',
                    note: '(registered guests)',
                    type: 'meals'
                },
                { time: '7:30am - 8:45am', title: 'Mentors Meeting', type: 'business' },
                { time: '9am - 9:50am', title: 'Lecture', location: 'Hotel', type: 'business' },
                { time: '10am - 10:50am', title: 'Lecture', location: 'Hotel', type: 'business' },
                { time: '11am - 11:50am', title: 'Lecture', location: 'Hotel', type: 'business' },
                { time: '11:50am - 1pm', title: 'Bento Lunch', type: 'meals' },
                { time: '1pm - 1:50pm', title: 'Lecture', location: 'Hotel', type: 'business' },
                { time: '2pm - 4pm', title: 'Ellsperman Memorial Lecture', type: 'business' },
                { time: 'All day', title: 'Family/Guest Activities', type: 'free' },
                { time: '6:30pm', title: 'Dining Around Options', type: 'social' }
            ]
        },
        friday: {
            date: 'Friday, August 14 - Free Day',
            events: [
                {
                    time: '7am - 9:30am',
                    title: 'Breakfast',
                    location: 'Hotel',
                    note: '(registered guests)',
                    type: 'meals'
                },
                { time: 'All day', title: 'Free Time', type: 'free' },
                { time: 'Evening', title: 'Dinner on Your Own', type: 'free' }
            ]
        },
        saturday: {
            date: 'Saturday, August 15',
            events: [
                {
                    time: '7am - 9:30am',
                    title: 'Breakfast',
                    location: 'Hotel',
                    note: '(registered guests)',
                    type: 'meals'
                },
                { time: '8:00am', title: 'Bus Departure to UH', type: 'business' },
                {
                    time: '8:30am - 11:30am',
                    title: 'Clinic Operations',
                    location: 'University of Hawaii Dental Hygiene School',
                    type: 'business'
                },
                { time: '11:00am - 11:30am', title: 'Clean-up & PowerPoint Prep', type: 'business' },
                { time: '11:30am - 12:30pm', title: 'Bento Lunch', type: 'meals' },
                { time: '12:30pm - 2:30pm', title: 'Critique/All Member Meeting', type: 'business' },
                { time: '2:45pm', title: 'Return Bus to Hotel', type: 'business' },
                { time: 'All day', title: 'Family and Guest Activities', type: 'free' },
                { time: '5:30pm - 6:30pm', title: 'Cocktail Hour', location: 'Hotel', type: 'social' },
                { time: '6:30pm - 9:00pm', title: 'Gala Dinner, Awards, Speeches', location: 'Hotel', type: 'social' },
                { time: '9pm - 11pm', title: 'Dancing', location: 'Hotel', type: 'social' }
            ]
        }
    };

    const getEventTypeClasses = (type: EventType) => {
        const colorMap: Record<EventType, React.CSSProperties> = {
            business: {
                borderColor: colors.secondary,
                color: colors.secondary
            },
            social: {
                borderColor: colors.primary,
                color: colors.primary
            },
            meals: {
                borderColor: colors.accent,
                color: colors.accent
            },
            free: {
                borderColor: colors.mutedForeground,
                color: colors.mutedForeground
            }
        };

        return (
            colorMap[type] || {
                borderColor: colors.foreground,
                color: colors.foreground
            }
        );
    };

    const days = [
        { key: 'wednesday', label: 'Wed 12' },
        { key: 'thursday', label: 'Thu 13' },
        { key: 'friday', label: 'Fri 14' },
        { key: 'saturday', label: 'Sat 15' }
    ];

    return (
        <section className='container mx-auto max-w-5xl py-12'>
            <div className='mb-8 text-center'>
                <h2 className='text-foreground mb-2 flex items-center justify-center gap-3 text-3xl font-bold'>
                    <Calendar style={{ color: colors.primary }} className='h-8 w-8' />
                    Event Schedule
                </h2>
                <p className='text-muted-foreground'>Complete agenda for the conference</p>
            </div>

            <div className='mb-8 flex justify-center gap-2'>
                {days.map((day) => (
                    <Button
                        key={day.key}
                        variant='outline'
                        size='lg'
                        onClick={() => setSelectedDay(day.key)}
                        className={cn(
                            'cursor-pointer rounded-lg border-2 text-lg shadow-sm transition-all duration-200 hover:shadow-md',
                            selectedDay === day.key ? 'border-primary bg-muted text-primary scale-105' : 'border-border'
                        )}
                        style={
                            selectedDay === day.key ? { boxShadow: `0 10px 15px -3px ${colors.warmHighlight}` } : {}
                        }>
                        {day.label}
                    </Button>
                ))}
            </div>

            <Card>
                <CardHeader style={{ backgroundColor: colors.primary }} className='rounded-t-lg p-4'>
                    <CardTitle className='text-primary-foreground text-xl font-semibold'>
                        {scheduleData[selectedDay].date}
                    </CardTitle>
                </CardHeader>
                <CardContent className='divide-border divide-y p-0'>
                    {scheduleData[selectedDay].events.map((event, index) => (
                        <div key={index} className='hover:bg-muted/50 p-4 transition-colors duration-200'>
                            <div className='grid grid-cols-[200px_1fr] items-start gap-4'>
                                <div>
                                    <div
                                        className='bg-muted inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium'
                                        style={getEventTypeClasses(event.type)}>
                                        {getEventIcon(event.title)}
                                        {event.time}
                                    </div>
                                </div>
                                <div className='min-w-0'>
                                    <h3 className='text-foreground mb-1 font-semibold'>{event.title}</h3>
                                    <div className='text-muted-foreground flex flex-wrap items-center gap-4 text-sm'>
                                        {event.location && (
                                            <div className='flex items-center gap-1'>
                                                <MapPin className='h-4 w-4' />
                                                <span>{event.location}</span>
                                            </div>
                                        )}
                                        {event.note && <div className='italic'>{event.note}</div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card className='mt-8'>
                <CardHeader>
                    <CardTitle className='text-foreground text-base font-semibold'>Legend</CardTitle>
                </CardHeader>
                <CardContent className='flex flex-wrap gap-2'>
                    {[
                        { type: 'business', label: 'Business' },
                        { type: 'meals', label: 'Meals' },
                        { type: 'social', label: 'Social' },
                        { type: 'free', label: 'Free Time' }
                    ].map(({ type, label }) => (
                        <span
                            key={type}
                            className='bg-muted inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold'
                            style={getEventTypeClasses(type as EventType)}>
                            {label}
                        </span>
                    ))}
                </CardContent>
            </Card>
        </section>
    );
};

export default EventSchedule;
