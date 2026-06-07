import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getEmbedding } from "@/lib/embedding";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const queryEmbedding =
      await getEmbedding(message);

    const { data: matches, error } =
      await supabase.rpc(
        "match_documents",
        {
          query_embedding:
            queryEmbedding,
          match_count: 5,
        }
      );

    if (error) {
      console.log(error);

      return NextResponse.json({
        answer:
          "Database search failed",
      });
    }

    const context =
      (matches as Array<{ content?: string }> | null | undefined)
        ?.map((match) => match.content ?? "")
        .join("\n\n") || "";

    const model =
      genAI.getGenerativeModel({
        model:
          "gemini-3.1-flash-lite",
      });

    const result =
      await model.generateContent(`
You are Ronit's AI Portfolio Assistant.

Answer only using portfolio information.

Portfolio Context:
${context}

Question:
${message}
`);

    return NextResponse.json({
      answer:
        result.response.text(),
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      answer:
        "Something went wrong.",
    });
  }
}