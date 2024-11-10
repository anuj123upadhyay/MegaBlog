import React, { useCallback, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Input, RTE } from "./index";
import service from "../appwrite/configAppwrite";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Label } from "../components/ui/label";

export default function EditPostForm({ post }) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    getValues,
  } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.$id || "",
      content: post?.content || "",
      status: post?.status || "",
      category: post?.category || "",
      metaData: post?.metaData || "",
      tags: post?.tags?.join(", ") || "", // Convert tags array to comma-separated string
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const submit = async (data) => {
    console.log("Update clicked"); // Log when update is clicked
    try {
      data.tags = data.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag !== "");

      const file = data.image[0] ? await service.uploadFile(data.image[0]) : null;

      if (file && post) {
        await service.deleteFile(post.featuredImage);
      }

      const updatedData = {
        ...data,
        featuredImage: file ? file.$id : undefined,
      };

      const dbPost = post
        ? await service.updatePost(post.$id, updatedData)
        : await service.createPost({ ...updatedData, userId: userData.$id });

      if (dbPost) {
        console.log("Update successful");
        navigate(`/post/${dbPost.$id}`);
      }
    } catch (error) {
      console.error("Error updating post:", error); // Log error if update fails
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form
    //   onSubmit={handleSubmit(submit)}
      className="flex flex-wrap md:flex-row flex-col"
    >
      <div className="md:px-2 px-4">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={post?.content}
        />
      </div>

      <div className="md:px-2 px-4">
        <Dialog>
          <DialogTrigger className="flex justify-center items-center w-full h-full">
            <div className="w-[80vh] bg-black text-white p-4 mt-4 rounded-md">
              Move Forward
            </div>
          </DialogTrigger>

          <DialogContent
            className="bg-white"
            style={{ maxHeight: "80vh", overflowY: "auto" }}
          >
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action is to post the blog.
                <Input
                  type="file"
                  label="Featured Image :"
                  className="mb-4 text-black"
                  accept="image/png, image/jpg, image/jpeg, image/gif"
                  {...register("image", { required: !post })}
                  onChange={handleImageChange}
                />
                {post && (
                  <div className="w-full mb-4">
                    <img
                      src={service.getFilePreview(post.featuredImage)}
                      alt={post.title}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                )}
                {imagePreview && (
                  <div className="w-full mb-4">
                    <h3 className="text-sm font-semibold mb-2">
                      Selected Image Preview:
                    </h3>
                    <img
                      src={imagePreview}
                      alt="Selected"
                      className="rounded-lg shadow-lg"
                      style={{ maxWidth: "80px", maxHeight: "80px" }}
                    />
                  </div>
                )}
                <div className="grid w-full gap-2">
                  <Label htmlFor="status">Post Now/Save as Draft:</Label>
                  <Controller
                    name="status"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <Select
                        onValueChange={onChange}
                        onBlur={onBlur}
                        value={value} // Use `value` from Controller
                        ref={ref}
                        className="mb-4 text-black"
                      >
                        <SelectTrigger className="w-full mb-4 bg-white">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="active">Post Now</SelectItem>
                          <SelectItem value="inactive">Draft</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
                <Input
                  label="Category :"
                  placeholder="Category"
                  className="mb-4 text-black"
                  {...register("category", { required: true })}
                />
                <Input
                  label="Metadata (max 150 chars):"
                  placeholder="Enter metadata..."
                  className="mb-4 text-black"
                  {...register("metaData", {
                    maxLength: {
                      value: 150,
                      message: "Max length is 150 characters",
                    },
                  })}
                />
                <Input
                  label="Tags (comma-separated):"
                  placeholder="Tag1, Tag2, Tag3..."
                  className="mb-4 text-black"
                  {...register("tags", {
                    validate: (value) => {
                      const tagsArray = value
                        .split(",")
                        .map((tag) => tag.trim());
                      return (
                        tagsArray.length <= 5 || "You can add up to 5 tags."
                      );
                    },
                  })}
                />
                <Button
                  type="submit"
                  bgColor={post ? "bg-green-500" : undefined}
                  className="w-full"
                  onClick={handleSubmit(submit)}
                >
                  {post ? "Update" : "Submit"}
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </form>
  );
}
