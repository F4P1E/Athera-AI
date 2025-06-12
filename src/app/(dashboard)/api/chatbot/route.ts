import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "API_KEY", // Make sure to set this in your .env file
});

const completion = openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: "Hello, how are you?" }],
    });

    completion.then((result) => console.log(result.choices[0].message));
export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: message }],
    });

    return NextResponse.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return NextResponse.json({ reply: "Error processing request. Please try again later." });
  }
}
