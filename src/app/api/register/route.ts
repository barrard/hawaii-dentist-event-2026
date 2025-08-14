import { promises as fs } from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        const filePath = path.join(process.cwd(), 'registrations.json');

        let registrations = [];
        try {
            const fileContent = await fs.readFile(filePath, 'utf-8');
            registrations = JSON.parse(fileContent);
        } catch (error) {
            // File might not exist yet, start with an empty array
            if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
                throw error;
            }
        }

        registrations.push(data);
        await fs.writeFile(filePath, JSON.stringify(registrations, null, 2));

        return NextResponse.json({ message: 'Registration successful!' }, { status: 200 });
    } catch (error) {
        console.error('Registration API error:', error);

        return NextResponse.json({ message: 'Registration failed.', error: (error as Error).message }, { status: 500 });
    }
}
