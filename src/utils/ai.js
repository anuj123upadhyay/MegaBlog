import conf from "../config/config";
import { HfInference } from "@huggingface/inference";

// Create a new HuggingFace Inference instance
const Hf = new HfInference(conf.appwriteHuggingFaceAcessToken);

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

// Function to call Hugging Face API for trending topics
export const callAI = async (prompt) => {
    try {
        // Using HfInference for text generation
        const result = await Hf.textGeneration({
            model: "mistralai/Mistral-7B-Instruct-v0.2",
            inputs: prompt,
            parameters: {
                max_new_tokens: 500,  // Adjust the length as needed
            }
        });

        return result.generated_text;  // This will return the generated text from the model
    } catch (error) {
        console.error("Error calling Hugging Face API: ", error);
        throw error;
    }
};
