# Appwrite Environment Setup

This guide explains how to set up and configure Appwrite for your project, including creating the necessary database, collection, and bucket. You'll also learn how to obtain the required IDs and configure environment variables.

## Prerequisites

1. You need an [Appwrite](https://appwrite.io) instance. You can either:
   - Self-host Appwrite on your server.
   - Use Appwrite's cloud service (recommended for simplicity).

2. Access to the [Appwrite Console](https://appwrite.io/docs/console) for managing your project.

## Step 1: Set Up Your Appwrite Project

### 1.1 Create a New Project
1. Login to your Appwrite dashboard.
2. Click on **Create Project**.
3. Give your project a name and select the platform (Web, Flutter, etc.).
4. Once the project is created, you’ll be redirected to the project dashboard.

**Get the Project ID**:
- Go to the project settings, and copy the **Project ID**.
- Set this as `APPWRITE_PROJECT_ID` in your `.env` file.

```bash
APPWRITE_PROJECT_ID=your-appwrite-project-id
```

## Step 2: Create a Database and Collection

### 2.1 Create a Database
1. In your project dashboard, navigate to the **Database** section.
2. Click on **Create Database** and name it (e.g., `blogDB`).

**Get the Database ID**:
- After creating the database, copy the **Database ID**.
- Set this as `APPWRITE_DATABASE_ID` in your `.env` file.

```bash
APPWRITE_DATABASE_ID=your-appwrite-database-id
```

### 2.2 Create a Collection
1. In the database, create a **Collection**.
2. Name the collection (e.g., `posts`).
3. Configure the collection to allow **Document Writing**, **Reading**, **Updating**, and **Deleting**.

**Get the Collection ID**:
- After creating the collection, copy the **Collection ID**.
- Set this as `APPWRITE_COLLECTION_ID` in your `.env` file.

```bash
APPWRITE_COLLECTION_ID=your-appwrite-collection-id
```

### 2.3 Set Collection Attributes
To store the `title`, `slug`, `content`, `featuredImage`, `status`, and `userId` for your posts, you need to define the following attributes:

1. **Title**:
   - Type: String
   - Length: 128
   - Required: Yes

2. **Slug**:
   - Type: String
   - Length: 128
   - Required: Yes
   - Unique: Yes

3. **Content**:
   - Type: String
   - Length: 5000
   - Required: Yes

4. **Featured Image**:
   - Type: String
   - Length: 128
   - Required: No

5. **Status**:
   - Type: Enum
   - Values: `active`, `inactive`
   - Default: `active`

6. **User ID**:
   - Type: String
   - Length: 36
   - Required: Yes

You can create these attributes through the **Attributes** tab when viewing the collection in the Appwrite dashboard.

## Step 3: Create a Storage Bucket

### 3.1 Create a Bucket
1. In the Appwrite console, go to **Storage**.
2. Click on **Create Bucket** and name it (e.g., `images`).
3. Set the file size limit and allowed file types (e.g., `png`, `jpg`, `jpeg`, `gif`).

**Get the Bucket ID**:
- After creating the bucket, copy the **Bucket ID**.
- Set this as `APPWRITE_BUCKET_ID` in your `.env` file.

```bash
APPWRITE_BUCKET_ID=your-appwrite-bucket-id
```

## Step 4: Set Up Permissions

### 4.1 Configure Collection Permissions
- Go to the **Collection** in the Appwrite console.
- Under **Permissions**, set the following permissions:
  - **Create**, **Read**, **Update**, and **Delete** for `role:all`.

### 4.2 Configure Bucket Permissions
- Go to the **Bucket** settings.
- Set **Create**, **Read**, **Update**, and **Delete** permissions for `role:all`.

### 4.3 Document-Level Permissions (Optional)
You can also set document-level permissions when creating a document, ensuring that users can manage their own posts.

## Step 5: Set Environment Variables

In your project, create a `.env` file and populate it with the following environment variables:

```bash
APPWRITE_ENDPOINT=https://your-appwrite-instance.appwrite.cloud
APPWRITE_PROJECT_ID=your-appwrite-project-id
APPWRITE_DATABASE_ID=your-appwrite-database-id
APPWRITE_COLLECTION_ID=your-appwrite-collection-id
APPWRITE_BUCKET_ID=your-appwrite-bucket-id
```

- **APPWRITE_ENDPOINT**: The URL of your Appwrite instance.
- **APPWRITE_PROJECT_ID**: The Project ID from Step 1.
- **APPWRITE_DATABASE_ID**: The Database ID from Step 2.
- **APPWRITE_COLLECTION_ID**: The Collection ID from Step 2.
- **APPWRITE_BUCKET_ID**: The Bucket ID from Step 3.

## Step 6: Test the Setup

1. Ensure your project’s environment is using the correct `.env` file.
2. Run your application and make a test request (e.g., creating a post or uploading an image).
3. If everything is set up correctly, your Appwrite integration should work smoothly.

---

By following these instructions, you should have Appwrite fully integrated and set up with proper environment variables, database, collection, and bucket for file storage.