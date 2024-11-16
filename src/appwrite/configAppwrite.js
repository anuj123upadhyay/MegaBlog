import conf from "../config/config.js";
import { Client, Databases, Functions, ID, Query, Storage } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
    this.functions = new Functions(this.client);

  }

  async createPost({
    title,
    slug,
    content,
    featuredImage,
    status,
    userId,
    category,
    metaData,
    tags,
  }) {
    try {
      console.log(slug);
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
          category,
          metaData,
          tags,
        }
      );
    } catch (error) {
      console.log("Appwrite serive :: createPost :: error", error);
    }
  }

  async updatePost(
    slug,
    { title, content, featuredImage, status, category, metaData, tags }
  ) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          category,
          metaData,
          tags,
        }
      );
    } catch (error) {
      console.log("Appwrite serive :: updatePost :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite serive :: deletePost :: error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite serive :: getPost :: error", error);
      return null;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite service :: getPosts :: error", error);
      return  [] ;
    }
  }

  async getCategory(category) {
    const queries = [Query.equal("category", category)];
    try {
      const response = await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
      return response.documents; // Returns only the documents array
    } catch (error) {
      console.error("Appwrite service :: getCategory :: error", error);
      return [];
    }
  }

  async searchPosts(searchTerm) {
    try {
      console.log("Search Term:", searchTerm);
      const queries = [
        Query.search("title", searchTerm),  // Convert to lowercase for consistent searching
        Query.search("content", searchTerm),
        Query.search("tags", searchTerm),
        Query.search("category", searchTerm),
      ];
      
      const response = await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
  
      console.log("Search Results:", response);
      return response;
    } catch (error) {
      console.log("Appwrite service :: searchPosts :: error", error);
      return false;
    }
  }  
  

  async getCurrentUsersPosts(userId) {
    try {
      const queries = [Query.equal("userId", userId)];
      console.log("first appwrite id", queries);
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite service :: getCurrentUsersPosts :: error", error);
      return false;
    }
  }

  async getCurrentUsersDraftPosts(userId) {
    try {
      const queries = [
        Query.equal("userId", userId),
        Query.equal("status", "inactive"),
      ];
      console.log("first appwrite id", queries);
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log(
        "Appwrite service :: getCurrentUsersDraftPosts :: error",
        error
      );
      return false;
    }
  }

  // file upload service

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite serive :: uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite serive :: deleteFile :: error", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
  }
  

  //------Newsletter subscription service

  async addSubscriber(email) {
    try {
      const response = await this.databases.createDocument(
        conf.appwriteDatabaseId,  // Your database ID
        conf.appwriteNewsLetterCollectionId, 
        ID.unique(),            
        {
          email: email,         
          subscribedAt: new Date().toISOString(), 
        }
      );
     
      
      return response;
    } catch (error) {
      console.error("Appwrite service :: addSubscriber :: error", error);
      return null;
    }
  }

  async sendNewsletter() {
    try {
      const response = await this.functions.createExecution(conf.appwriteFunctionId); 
      console.log('Newsletter sent:', response);
      return response;
    } catch (error) {
      console.error('Error sending newsletter:', error);
      throw error;
    }
  }


}

const service = new Service();
export default service;
