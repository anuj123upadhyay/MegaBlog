const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLLECTION_ID),
    appwriteNewsLetterCollectionId:String(import.meta.env.VITE_APPWRITE_NEWSLETTER_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwriteFunctionId:String(import.meta.env.VITE_APPWRITE_FUNCTION_ID)
}

export default conf