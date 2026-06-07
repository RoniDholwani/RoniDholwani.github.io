import { pipeline } from "@xenova/transformers";

type EmbeddingExtractor = (
  text: string,
  options: { pooling: "mean"; normalize: true }
) => Promise<{ data: ArrayLike<number> }>;

let extractor: EmbeddingExtractor | null = null;

export async function getEmbedding(text: string) {
  if (!extractor) {
    extractor = (await pipeline(
      "feature-extraction",
      "Xenova/all-MiniLM-L6-v2"
    )) as EmbeddingExtractor;
  }

  const output = await extractor(text, {
    pooling: "mean",
    normalize: true,
  });

  return Array.from(output.data);
}