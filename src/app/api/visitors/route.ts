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
            data.totalVisits += 1;
            isUnique = true;
            saveVisitorData(data);
        }
        // If you want to count *every* visit regardless of unique IP, uncomment below:
        // else if (ip === 'unknown') {
        //    // fallback logic if needed
        // }

        // For the purpose of "Total Visitors", usually we just want the total count of unique visitors 
        // or total page loads. The user asked for "total number of visitor till now".
        // Let's stick to unique IPs for "Visitors" vs "Page Views".
        // However, for a high count to show off, sometimes "Page Views" is preferred.
        // Let's stick to unique IPs + existing total. 
        // Actually, if I just refresh, I might want to see it go up for testing?
        // Let's increment totalVisits only on unique IP for "Visitors".

        // If the file didn't exist, we start at some reasonable number or 0? 
        // Let's start at 0.

        return NextResponse.json({
            count: data.uniqueIPs.length, // Or data.totalVisits if we tracked non-unique
            isUnique
        });

    } catch (error) {
        console.error('Visitor API Error:', error);
        return NextResponse.json({ count: 0 }, { status: 500 });
    }
}

export async function GET() {
    const data = getVisitorData();
    // Return current count without incrementing
    return NextResponse.json({ count: data.uniqueIPs.length });
}
