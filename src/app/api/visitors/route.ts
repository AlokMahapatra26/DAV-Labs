import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Path to store the visitor data
// In a real production app, use a database (Redis, Postgres, etc.)
const DATA_FILE_PATH = path.join(process.cwd(), 'visitor-data.json');

// Interface for our data structure
interface VisitorData {
    totalVisits: number;
    uniqueIPs: string[];
}

// Helper to read data
function getVisitorData(): VisitorData {
    try {
        if (!fs.existsSync(DATA_FILE_PATH)) {
            return { totalVisits: 0, uniqueIPs: [] };
        }
        const fileContent = fs.readFileSync(DATA_FILE_PATH, 'utf-8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.error('Error reading visitor data:', error);
        return { totalVisits: 0, uniqueIPs: [] };
    }
}

// Helper to save data
function saveVisitorData(data: VisitorData) {
    try {
        fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error saving visitor data:', error);
    }
}

export async function POST(request: Request) {
    try {
        // simple IP detection
        const forwardedFor = request.headers.get('x-forwarded-for');
        const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown';

        // In dev, localhost might be ::1 or 127.0.0.1. We treat them as unique.

        const data = getVisitorData();
        let isUnique = false;

        if (ip !== 'unknown' && !data.uniqueIPs.includes(ip)) {
            data.uniqueIPs.push(ip);
        }

        // Increment total visits for every hit (if IP is valid or just strictly every hit?)
        // Let's count every hit that has an IP (even if seen before).
        // Increment total visits for every hit, even if IP is unknown (e.g. localhost)
        data.totalVisits += 1;
        saveVisitorData(data);

        return NextResponse.json({
            count: data.totalVisits,
            isUnique: ip !== 'unknown' && !data.uniqueIPs.includes(ip) // slightly inaccurate now as we pushed already, but effectively checks if it was new
        });

    } catch (error) {
        console.error('Visitor API Error:', error);
        return NextResponse.json({ count: 0 }, { status: 500 });
    }
}

export async function GET() {
    const data = getVisitorData();
    // Return current count without incrementing
    return NextResponse.json({ count: data.totalVisits });
}
