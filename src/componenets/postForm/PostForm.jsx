import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE } from "../index";
import service from "../../appwrite/configAppwrite";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Controller } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Label } from "../../components/ui/label";

export default function PostForm({ post }) {
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
      tags: post?.tags || [],
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const [imagePreview, setImagePreview] = useState(null); // State for image preview

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set the image preview URL
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null); // Clear preview if no image is selected
    }
  };

  const submit = async (data) => {
    data.tags = data.tags.split(",").map(tag => tag.trim()).filter(tag => tag !== "");
    
    if (post) {
      console.log(data);

      const file = data.image[0]
        ? await service.uploadFile(data.image[0])
        : null;

      if (file) {
        service.deleteFile(post.featuredImage);
      }

      const dbPost = await service.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      console.log(dbPost);
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await service.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        console.log(data);
        const dbPost = await service.createPost({
          ...data,
          userId: userData.$id,
        });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
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
      onSubmit={handleSubmit(submit)}
      className="flex flex-wrap md:flex-row flex-col"
    >
      <div className="md:w-2/3 md:px-2 px-4">
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
          defaultValue={getValues("content")}
        />
      </div>

      {/* <div className="md:w-1/3 md:px-2 px-4 ">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={service.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}

        <Input
          label="Category :"
          placeholder="Category"
          className="mb-4"
          {...register("category", { required: true })}
        />

        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div> */}

      <div className="md:w-1/3 md:px-2 px-4">
        <Dialog>
          <DialogTrigger variant="outline">
            <Button variant="outline">Submit</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action is to post the blog.
                <Input
                  type="file"
                  label="Featured Image :"
                  className="mb-4"
                  accept="image/png, image/jpg, image/jpeg, image/gif"
                  {...register("image", { required: !post })}
                  onChange={handleImageChange} // Handle image selection
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
                    control={control} // Pass the control object
                    rules={{ required: true }} // Set validation rules
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <Select
                        onValueChange={onChange} // Handle value change
                        onBlur={onBlur} // Handle blur event
                        value={value} // Controlled value
                        ref={ref} // Ref for focus management
                        className="mb-4"
                      >
                        <SelectTrigger className="w-full mb-4">
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
                  className="mb-4"
                  {...register("category", { required: true })}
                />

                {/* New Input for Metadata */}
                <Input
                  label="Metadata (max 150 chars):"
                  placeholder="Enter metadata..."
                  className="mb-4"
                  {...register("metaData", {
                    maxLength: { value: 150, message: "Max length is 150 characters" },
                  })}
                />

                {/* New Input for Tags */}
                <Input
                  label="Tags (comma-separated):"
                  placeholder="Tag1, Tag2, Tag3..."
                  className="mb-4"
                  {...register("tags", {
                    validate: value => {
                      const tagsArray = value.split(',').map(tag => tag.trim());
                      return tagsArray.length <= 5 || "You can add up to 5 tags.";
                    }
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

        {/* <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button> */}
      </div>
    </form>
  );
}
