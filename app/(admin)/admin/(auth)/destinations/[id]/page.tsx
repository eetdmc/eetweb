"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect } from "react";

import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { ImageUploader } from "@/components/ui/image-uploader";
import { RiDeleteBinLine } from "react-icons/ri";
import { Textarea } from "@/components/ui/textarea";
import AdminItemContainer from "@/app/components/common/AdminItemContainer";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { MdDelete } from "react-icons/md";
import { useRefetchDestinations } from "@/app/contexts/refetchDestinations";
import { RiAiGenerateText } from "react-icons/ri";
import { VideoUploader } from "@/components/ui/video-uploader";

interface UAEFormProps {
  metaTitle: string;
  metaDescription: string;
  firstSection: {
    location: string;
    mainTitle: string;
    subTitle: string;
    description: string;
    firstVideo: string;
    firstVideoPoster: string;
    secondVideo: string;
    secondVideoPoster: string;
    slug: string;
  };
  secondSection: {
    title: string;
    description: string;
  };
  destinationSection: {
    title: string;
    items: {
      image: string;
      imageAlt: string;
      title: string;
      description: string;
    }[];
  };
  thirdSection: {
    title: string;
    items: {
      image: string;
      imageAlt: string;
      title: string;
    }[];
  };
  fourthSection: {
    title: string;
    items: {
      image: string;
      imageAlt: string;
    }[];
  };
  fifthSection: {
    title: string;
    items: {
      image: string;
      imageAlt: string;
      title: string;
    }[];
  };
  sixthSection: {
    destinationCount: number;
    homeImage: string;
    mainDestinations: {
      title: string;
    }[];
  };
}

const UAEPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    watch,
  } = useForm<UAEFormProps>();

  const router = useRouter();
  const { id } = useParams();
  const { setRefetchDestinations } = useRefetchDestinations();

  const {
    fields: thirdSectionItems,
    append: thirdSectionAppend,
    remove: thirdSectionRemove,
  } = useFieldArray({
    control,
    name: "thirdSection.items",
  });

  const {
    fields: fourthSectionItems,
    append: fourthSectionAppend,
    remove: fourthSectionRemove,
  } = useFieldArray({
    control,
    name: "fourthSection.items",
  });

  const {
    fields: fifthSectionItems,
    append: fifthSectionAppend,
    remove: fifthSectionRemove,
  } = useFieldArray({
    control,
    name: "fifthSection.items",
  });

  const {
    fields: sixthSectionItems,
    append: sixthSectionAppend,
    remove: sixthSectionRemove,
  } = useFieldArray({
    control,
    name: "sixthSection.mainDestinations",
  });

  const {
    fields: destinationSectionItems,
    append: destinationSectionAppend,
    remove: destinationSectionRemove,
  } = useFieldArray({
    control,
    name: "destinationSection.items",
  });

  const handleAddUAE = async (data: UAEFormProps) => {
    try {
      const response = await fetch(`/api/admin/destinations?id=${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        console.log("here");
        setRefetchDestinations((prev) => !prev);
        // router.push("/admin/commitment");
      }
    } catch (error) {
      console.log("Error in adding destination", error);
    }
  };

  const fetchUAEData = async () => {
    try {
      const response = await fetch(`/api/admin/destinations?id=${id}`);
      if (response.ok) {
        const data = await response.json();
        setValue("metaTitle", data.data.metaTitle);
        setValue("metaDescription", data.data.metaDescription);
        setValue("firstSection", data.data.firstSection);
        setValue("secondSection", data.data.secondSection);
        setValue("destinationSection", data.data.destinationSection);
        setValue("destinationSection.items", data.data.destinationSection.items);
        setValue("thirdSection", data.data.thirdSection);
        setValue("thirdSection.items", data.data.thirdSection.items);
        setValue("fourthSection", data.data.fourthSection);
        setValue("fourthSection.items", data.data.fourthSection.items);
        setValue("fifthSection", data.data.fifthSection);
        setValue("fifthSection.items", data.data.fifthSection.items);
        setValue("sixthSection", data.data.sixthSection);
        setValue(
          "sixthSection.mainDestinations",
          data.data.sixthSection.mainDestinations
        );
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error in fetching destination data", error);
    }
  };

  const handleDeleteDestination = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/destinations?id=${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        setRefetchDestinations((prev) => !prev);
        router.push("/admin");
      }
    } catch (error) {
      console.log("Error in deleting destination", error);
    }
  };

  const handleAutoGenerate = () => {
    const name = watch("firstSection.location");
    if (!name) return;
    const slug = name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, ""); // remove leading/trailing dashes
    setValue("firstSection.slug", slug);
  };

  useEffect(() => {
    fetchUAEData();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-end">
        <Dialog>
          <DialogTrigger className="flex items-center gap-2 bg-red-500 text-white px-2 py-1 rounded-md">
            Delete Destination
            <MdDelete />
          </DialogTrigger>
          <DialogContent className="bg-white">
            <DialogHeader>
              <DialogTitle>Are you sure?</DialogTitle>
            </DialogHeader>
            <div className="flex gap-2">
              <DialogClose className="bg-black text-white px-2 py-1 rounded-md">
                No
              </DialogClose>
              <DialogClose
                className="bg-black text-white px-2 py-1 rounded-md"
                onClick={() => handleDeleteDestination(id as string)}
              >
                Yes
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit(handleAddUAE)}
      >
        <AdminItemContainer>
          <Label main>First Section</Label>
          <div className="p-5 rounded-md flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <Label className="font-bold">Main Title</Label>
                <Input
                  type="text"
                  placeholder="Main Title"
                  {...register("firstSection.mainTitle", {
                    required: "Main Title is required",
                  })}
                />
                {errors.firstSection?.mainTitle && (
                  <p className="text-red-500">
                    {errors.firstSection?.mainTitle.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <Label className="font-bold">Location</Label>
                <Input
                  type="text"
                  placeholder="Location"
                  {...register("firstSection.location", {
                    required: "Location is required",
                  })}
                />
                {errors.firstSection?.location && (
                  <p className="text-red-500">
                    {errors.firstSection?.location.message}
                  </p>
                )}
              </div>
              <div>
                <Label className="flex gap-2 items-center mb-1">
                  Slug
                  <div
                    className="flex gap-2 items-center bg-green-600 text-white p-1 rounded-md cursor-pointer w-fit"
                    onClick={handleAutoGenerate}
                  >
                    <p>Auto Generate</p>
                    <RiAiGenerateText />
                  </div>
                </Label>
                <Input
                  type="text"
                  placeholder="Slug"
                  {...register("firstSection.slug", {
                    required: "Slug is required",
                    pattern: {
                      value: /^[a-z0-9]+(-[a-z0-9]+)*$/,
                      message:
                        "Slug must contain only lowercase letters, numbers, and hyphens (no spaces)",
                    },
                  })}
                />
                {errors.firstSection?.slug && (
                  <p className="text-red-500">
                    {errors.firstSection?.slug.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <Label className="font-bold">Sub Title</Label>
                <Input
                  type="text"
                  placeholder="Sub Title"
                  {...register("firstSection.subTitle", {
                    required: "Sub Title is required",
                  })}
                />
                {errors.firstSection?.subTitle && (
                  <p className="text-red-500">
                    {errors.firstSection?.subTitle.message}
                  </p>
                )}
              </div>
              <div>
                <Label className="text-sm font-bold">Description</Label>
                <Controller
                  name="firstSection.description"
                  control={control}
                  rules={{ required: "Description is required" }}
                  render={({ field }) => {
                    return (
                      <Textarea value={field.value} onChange={field.onChange} />
                    );
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-1">
                <Label className="font-bold">First Video</Label>
                <Controller
                  name="firstSection.firstVideo"
                  control={control}
                  rules={{ required: "Image is required" }}
                  render={({ field }) => (
                    <VideoUploader
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
                {errors.firstSection?.firstVideo && (
                  <p className="text-red-500">
                    {errors.firstSection?.firstVideo.message}
                  </p>
                )}
                <Label className="font-bold">First Video Poster</Label>
                <Controller
                  name="firstSection.firstVideoPoster"
                  control={control}
                  rules={{ required: "Image is required" }}
                  render={({ field }) => (
                    <ImageUploader
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
                {errors.firstSection?.firstVideoPoster && (
                  <p className="text-red-500">
                    {errors.firstSection?.firstVideoPoster.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <Label className="font-bold">Second Video</Label>
                <Controller
                  name="firstSection.secondVideo"
                  control={control}
                  rules={{ required: "Image is required" }}
                  render={({ field }) => (
                    <VideoUploader
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
                {errors.firstSection?.secondVideo && (
                  <p className="text-red-500">
                    {errors.firstSection?.secondVideo.message}
                  </p>
                )}
                <Label className="font-bold">Second Video Poster</Label>
                <Controller
                  name="firstSection.secondVideoPoster"
                  control={control}
                  rules={{ required: "Image is required" }}
                  render={({ field }) => (
                    <ImageUploader
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
                {errors.firstSection?.secondVideoPoster && (
                  <p className="text-red-500">
                    {errors.firstSection?.secondVideoPoster.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </AdminItemContainer>

        <AdminItemContainer>
          <Label main>Second Section</Label>
          <div className="p-5 rounded-md flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <Label className="font-bold">Title</Label>
                <Input
                  type="text"
                  placeholder="Title"
                  {...register("secondSection.title", {
                    required: "Title is required",
                  })}
                />
                {errors.secondSection?.title && (
                  <p className="text-red-500">
                    {errors.secondSection?.title.message}
                  </p>
                )}
              </div>
              <div>
                <Label className="text-sm font-bold">Description</Label>
                <Controller
                  name="secondSection.description"
                  control={control}
                  rules={{ required: "Description is required" }}
                  render={({ field }) => {
                    return (
                      <Textarea value={field.value} onChange={field.onChange} />
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </AdminItemContainer>

        <AdminItemContainer>
          <Label main>Destination Section</Label>
          <div className="p-5 rounded-md flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <Label className="font-bold">Title</Label>
                <Input
                  type="text"
                  placeholder="Title"
                  {...register("destinationSection.title", {
                    required: "Title is required",
                  })}
                />
                {errors.destinationSection?.title && (
                  <p className="text-red-500">
                    {errors.destinationSection?.title.message}
                  </p>
                )}
              </div>
              <div>
                <Label className="font-bold">Items</Label>
                <div className="border p-2 rounded-md flex flex-col gap-5">
                  {destinationSectionItems.map((field, index) => (
                    <div
                      key={field.id}
                      className="grid grid-cols-2 gap-2 relative border-b pb-5 last:border-b-0"
                    >
                      <div className="absolute top-2 right-2">
                        <RiDeleteBinLine
                          onClick={() => destinationSectionRemove(index)}
                          className="cursor-pointer text-red-600"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                          <Label className="font-bold">Image</Label>
                          <Controller
                            name={`destinationSection.items.${index}.image`}
                            control={control}
                            rules={{ required: "Image is required" }}
                            render={({ field }) => (
                              <ImageUploader
                                value={field.value}
                                onChange={field.onChange}
                              />
                            )}
                          />
                          {errors.destinationSection?.items?.[index]?.image && (
                            <p className="text-red-500">
                              {
                                errors.destinationSection?.items?.[index]?.image
                                  .message
                              }
                            </p>
                          )}
                        </div>

                        <div className="flex flex-col gap-2">
                          <div className="flex flex-col gap-2">
                            <Label className="font-bold">Alt Tag</Label>
                            <Input
                              type="text"
                              placeholder="Alt Tag"
                              {...register(
                                `destinationSection.items.${index}.imageAlt`,
                                {
                                  required: "Value is required",
                                }
                              )}
                            />
                            {errors.destinationSection?.items?.[index]?.imageAlt && (
                              <p className="text-red-500">
                                {
                                  errors.destinationSection?.items?.[index]?.imageAlt
                                    .message
                                }
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                          <div className="flex flex-col gap-2">
                            <Label className="font-bold">Title</Label>
                            <Input
                              type="text"
                              placeholder="Title"
                              {...register(
                                `destinationSection.items.${index}.title`,
                                {
                                  required: "Value is required",
                                }
                              )}
                            />
                            {errors.destinationSection?.items?.[index]?.title && (
                              <p className="text-red-500">
                                {
                                  errors.destinationSection?.items?.[index]?.title
                                    .message
                                }
                              </p>
                            )}
                          </div>
                          <div className="flex flex-col gap-2">
                            <Label className="font-bold">Description</Label>
                            <Textarea
                              placeholder="Description"
                              {...register(
                                `destinationSection.items.${index}.description`,
                                {
                                  required: "Value is required",
                                }
                              )}
                            />
                            {errors.destinationSection?.items?.[index]?.description && (
                              <p className="text-red-500">
                                {
                                  errors.destinationSection?.items?.[index]?.description
                                    .message
                                }
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end mt-2">
                  <Button
                    type="button"
                    addItem
                    onClick={() =>
                      destinationSectionAppend({ title: "", image: "", imageAlt: "", description: "" })
                    }
                  >
                    Add Item
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </AdminItemContainer>

        <AdminItemContainer>
          <Label main>Third Section</Label>
          <div className="p-5 rounded-md flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <Label className="font-bold">Title</Label>
                <Input
                  type="text"
                  placeholder="Title"
                  {...register("thirdSection.title", {
                    required: "Title is required",
                  })}
                />
                {errors.thirdSection?.title && (
                  <p className="text-red-500">
                    {errors.thirdSection?.title.message}
                  </p>
                )}
              </div>
              <div>
                <Label className="font-bold">Items</Label>
                <div className="border p-2 rounded-md flex flex-col gap-5">
                  {thirdSectionItems.map((field, index) => (
                    <div
                      key={field.id}
                      className="grid grid-cols-2 gap-2 relative border-b pb-5 last:border-b-0"
                    >
                      <div className="absolute top-2 right-2">
                        <RiDeleteBinLine
                          onClick={() => thirdSectionRemove(index)}
                          className="cursor-pointer text-red-600"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                          <Label className="font-bold">Image</Label>
                          <Controller
                            name={`thirdSection.items.${index}.image`}
                            control={control}
                            rules={{ required: "Image is required" }}
                            render={({ field }) => (
                              <ImageUploader
                                value={field.value}
                                onChange={field.onChange}
                              />
                            )}
                          />
                          {errors.thirdSection?.items?.[index]?.image && (
                            <p className="text-red-500">
                              {
                                errors.thirdSection?.items?.[index]?.image
                                  .message
                              }
                            </p>
                          )}
                        </div>

                        <div className="flex flex-col gap-2">
                          <div className="flex flex-col gap-2">
                            <Label className="font-bold">Alt Tag</Label>
                            <Input
                              type="text"
                              placeholder="Alt Tag"
                              {...register(
                                `thirdSection.items.${index}.imageAlt`,
                                {
                                  required: "Value is required",
                                }
                              )}
                            />
                            {errors.thirdSection?.items?.[index]?.imageAlt && (
                              <p className="text-red-500">
                                {
                                  errors.thirdSection?.items?.[index]?.imageAlt
                                    .message
                                }
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                          <div className="flex flex-col gap-2">
                            <Label className="font-bold">Title</Label>
                            <Input
                              type="text"
                              placeholder="Title"
                              {...register(
                                `thirdSection.items.${index}.title`,
                                {
                                  required: "Value is required",
                                }
                              )}
                            />
                            {errors.thirdSection?.items?.[index]?.title && (
                              <p className="text-red-500">
                                {
                                  errors.thirdSection?.items?.[index]?.title
                                    .message
                                }
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end mt-2">
                  <Button
                    type="button"
                    addItem
                    onClick={() =>
                      thirdSectionAppend({ title: "", image: "", imageAlt: "" })
                    }
                  >
                    Add Item
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </AdminItemContainer>

        <AdminItemContainer>
          <Label main>Fourth Section</Label>

          <div className="p-5 rounded-md flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <Label className="font-bold">Title</Label>
                <Input
                  type="text"
                  placeholder="Title"
                  {...register(`fourthSection.title`, {
                    required: "Value is required",
                  })}
                />
                {errors.fourthSection?.title && (
                  <p className="text-red-500">
                    {errors.fourthSection?.title.message}
                  </p>
                )}
              </div>
            </div>

            <Label>Items</Label>
            <div className="border p-2 rounded-md grid grid-cols-2 gap-2">
              {fourthSectionItems.map((field, index) => (
                <div
                  key={field.id}
                  className="grid grid-cols-1 gap-2 relative border-r pr-2 last:border-r-0"
                >
                  <div className="absolute top-2 right-2">
                    <RiDeleteBinLine
                      onClick={() => fourthSectionRemove(index)}
                      className="cursor-pointer text-red-600"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2">
                      <Label className="font-bold">Image</Label>
                      <Controller
                        name={`fourthSection.items.${index}.image`}
                        control={control}
                        rules={{ required: "Image is required" }}
                        render={({ field }) => (
                          <ImageUploader
                            value={field.value}
                            onChange={field.onChange}
                          />
                        )}
                      />
                      {errors.fourthSection?.items?.[index]?.image && (
                        <p className="text-red-500">
                          {errors.fourthSection?.items?.[index]?.image.message}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col gap-2">
                        <Label className="font-bold">Alt Tag</Label>
                        <Input
                          type="text"
                          placeholder="Alt Tag"
                          {...register(
                            `fourthSection.items.${index}.imageAlt`,
                            {
                              required: "Value is required",
                            }
                          )}
                        />
                        {errors.fourthSection?.items?.[index]?.imageAlt && (
                          <p className="text-red-500">
                            {
                              errors.fourthSection?.items?.[index]?.imageAlt
                                .message
                            }
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-2">
              <Button
                type="button"
                addItem
                onClick={() => fourthSectionAppend({ image: "", imageAlt: "" })}
              >
                Add Item
              </Button>
            </div>
          </div>
        </AdminItemContainer>

        <AdminItemContainer>
          <Label main>Fifth Section</Label>
          <div className="p-5 rounded-md flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <Label className="font-bold">Title</Label>
                <Input
                  type="text"
                  placeholder="Title"
                  {...register("fifthSection.title", {
                    required: "Title is required",
                  })}
                />
                {errors.fifthSection?.title && (
                  <p className="text-red-500">
                    {errors.fifthSection?.title.message}
                  </p>
                )}
              </div>
              <div>
                <Label className="font-bold">Items</Label>
                <div className="border p-2 rounded-md flex flex-col gap-5">
                  {fifthSectionItems.map((field, index) => (
                    <div
                      key={field.id}
                      className="grid grid-cols-2 gap-2 relative border-b pb-5 last:border-b-0"
                    >
                      <div className="absolute top-2 right-2">
                        <RiDeleteBinLine
                          onClick={() => fifthSectionRemove(index)}
                          className="cursor-pointer text-red-600"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                          <Label className="font-bold">Image</Label>
                          <Controller
                            name={`fifthSection.items.${index}.image`}
                            control={control}
                            rules={{ required: "Image is required" }}
                            render={({ field }) => (
                              <ImageUploader
                                value={field.value}
                                onChange={field.onChange}
                              />
                            )}
                          />
                          {errors.fifthSection?.items?.[index]?.image && (
                            <p className="text-red-500">
                              {
                                errors.fifthSection?.items?.[index]?.image
                                  .message
                              }
                            </p>
                          )}
                        </div>

                        <div className="flex flex-col gap-2">
                          <div className="flex flex-col gap-2">
                            <Label className="font-bold">Alt Tag</Label>
                            <Input
                              type="text"
                              placeholder="Alt Tag"
                              {...register(
                                `fifthSection.items.${index}.imageAlt`,
                                {
                                  required: "Value is required",
                                }
                              )}
                            />
                            {errors.fifthSection?.items?.[index]?.imageAlt && (
                              <p className="text-red-500">
                                {
                                  errors.fifthSection?.items?.[index]?.imageAlt
                                    .message
                                }
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                          <div className="flex flex-col gap-2">
                            <Label className="font-bold">Title</Label>
                            <Input
                              type="text"
                              placeholder="Title"
                              {...register(
                                `fifthSection.items.${index}.title`,
                                {
                                  required: "Value is required",
                                }
                              )}
                            />
                            {errors.fifthSection?.items?.[index]?.title && (
                              <p className="text-red-500">
                                {
                                  errors.fifthSection?.items?.[index]?.title
                                    .message
                                }
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end mt-2">
                  <Button
                    type="button"
                    addItem
                    onClick={() =>
                      fifthSectionAppend({ title: "", image: "", imageAlt: "" })
                    }
                  >
                    Add Item
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </AdminItemContainer>

        <AdminItemContainer>
          <Label main>Sixth Section</Label>
          <div className="p-5 rounded-md flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <Label className="font-bold">Destination Count</Label>
                <Input
                  type="text"
                  placeholder="Destination Count"
                  {...register("sixthSection.destinationCount", {
                    required: "Destination Count is required",
                  })}
                />
                {errors.sixthSection?.destinationCount && (
                  <p className="text-red-500">
                    {errors.sixthSection?.destinationCount.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <Label className="font-bold">Home Image</Label>
                <Controller
                  name={`sixthSection.homeImage`}
                  control={control}
                  rules={{ required: "Image is required" }}
                  render={({ field }) => (
                    <ImageUploader
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
                {errors.sixthSection?.homeImage && (
                  <p className="text-red-500">
                    {errors.sixthSection?.homeImage.message}
                  </p>
                )}
              </div>
              <div>
                <Label className="text-sm font-bold">Main Destinations</Label>
                <div className="border p-2 rounded-md grid grid-cols-2 gap-2">
                  {sixthSectionItems.map((field, index) => (
                    <div
                      key={field.id}
                      className="grid grid-cols-1 gap-2 relative border-r pr-2 last:border-r-0"
                    >
                      <div className="absolute top-2 right-2">
                        <RiDeleteBinLine
                          onClick={() => sixthSectionRemove(index)}
                          className="cursor-pointer text-red-600"
                        />
                      </div>

                      <div>
                        <div className="flex flex-col gap-2">
                          <Label className="pl-3 font-bold">Title</Label>
                          <Input
                            type="text"
                            placeholder="Title"
                            {...register(
                              `sixthSection.mainDestinations.${index}.title`
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end mt-2">
                  <Button
                    type="button"
                    addItem
                    onClick={() => sixthSectionAppend({ title: "" })}
                  >
                    Add Item
                  </Button>
                </div>
                {errors.sixthSection?.mainDestinations && (
                  <p className="text-red-500">
                    {errors.sixthSection?.mainDestinations?.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </AdminItemContainer>

        <div className="flex flex-col gap-2">
          <Label className="pl-3 font-bold">Meta Title</Label>
          <Input
            type="text"
            placeholder="Meta Title"
            {...register("metaTitle")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="pl-3 font-bold">Meta Description</Label>
          <Input
            type="text"
            placeholder="Meta Description"
            {...register("metaDescription")}
          />
        </div>

        <div className="flex">
          <Button
            type="submit"
            className="cursor-pointer text-white text-[16px] w-full"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UAEPage;
