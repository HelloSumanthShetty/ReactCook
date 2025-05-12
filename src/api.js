import { HfInference } from '@huggingface/inference'


const hf = new HfInference(import.meta.env.VITE_SECRET_KEY)

console.log("Loaded secret key:", import.meta.env.VITE_SECRET_KEY)

const SYSTEM_PROMPT = `You are a friendly recipe assistant. You will:
1. Receive a list of ingredients the user has.
2. Suggest a recipe they could make using some or all of those ingredients.
3. You may add a few extra ingredients if needed, but keep them minimal.
4. If any ingredient is inappropriate or unsafe, gently warn the user (e.g. “Please check that [ingredient] is suitable for cooking before use.”).
5. Format your recipe entirely in Markdown, using headings (##), lists, and code blocks where appropriate to make it easy to render on a webpage.
  `


export async function getRecipeFromHuggingChat(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(', ')
try{
  const response = await hf.chatCompletion({
model: "microsoft/Phi-3-mini-4k-instruct"
,
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user',   content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
    ],
    max_tokens: 1024,
  })
     return response.choices?.[0]?.message?.content ?? '';
  } catch (err) {
    console.error("HuggingFace Error:", err);
    return '';  // return empty on error
  }
}