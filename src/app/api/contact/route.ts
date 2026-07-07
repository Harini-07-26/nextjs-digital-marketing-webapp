import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, firstName, lastName, company, phone } = body;

    // Simple validation
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    // Prepare lead record
    const lead = {
      id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2) + Date.now().toString(36),
      email: email.trim(),
      firstName: (firstName || '').trim(),
      lastName: (lastName || '').trim(),
      company: (company || '').trim(),
      phone: (phone || '').trim(),
      createdAt: new Date().toISOString(),
    };

    // Save lead to local JSON file
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'leads.json');

    // Ensure data directory exists
    await fs.mkdir(dataDir, { recursive: true });

    let leads = [];
    try {
      const fileData = await fs.readFile(filePath, 'utf-8');
      leads = JSON.parse(fileData);
      if (!Array.isArray(leads)) {
        leads = [];
      }
    } catch (e) {
      // File doesn't exist yet, we will start with a new list
    }

    leads.push(lead);

    await fs.writeFile(filePath, JSON.stringify(leads, null, 2), 'utf-8');

    return NextResponse.json({ success: true, lead });
  } catch (error: any) {
    console.error('Error saving lead:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
