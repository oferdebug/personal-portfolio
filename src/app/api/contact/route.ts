import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Store message in database
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    });

    // Send email notification (implement your email service here)
    // Example: await sendEmail({ to: "your@email.com", subject: "New Contact Form Submission", ...})

    return NextResponse.json(
      { message: "Message sent successfully", contact },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
} 