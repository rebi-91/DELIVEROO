import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
    projectId: "czzf120p",
    dataset: "production", // Corrected typo: Changed "dateset" to "dataset"
    useCdn: true,
    apiVersion: "2023-03-05",
});

const builder = imageUrlBuilder(client);

// Export Image URL on CategoryCard
export const urlFor = (source) => builder.image(source);

export default client;

//cd sanity
//sanity cors add https://localhost:3333