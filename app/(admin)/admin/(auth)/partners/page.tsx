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

interface PartnerFormProps {
  metaTitle: string;
  metaDescription: string;
  firstSection: {
    mainTitle: string;
    subTitle: string;
    description: string;
    items: {
      title: string;
      image: string;
      imageAlt: string;
    }[];
  };
}

const PartnerPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<PartnerFormProps>();

  const {
    fields: firstSectionItems,
    append: firstSectionAppend,
    remove: firstSectionRemove,
  } = useFieldArray({
    control,
    name: "firstSection.items",
  });

  const handleAddPartner = async (data: PartnerFormProps) => {
    try {
      const response = await fetch(`/api/admin/partners`, {
        method: "PATCH",
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        // router.push("/admin/commitment");
      }
    } catch (error) {
      console.log("Error in adding partner", error);
    }
  };

  const fetchPartnerData = async () => {
    try {
      const response = await fetch(`/api/admin/partners`);
      if (response.ok) {
        const data = await response.json();
        setValue("metaTitle", data.data.metaTitle);
        setValue("metaDescription", data.data.metaDescription);
        setValue("firstSection", data.data.firstSection);
        setValue("firstSection.items", data.data.firstSection.items);
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error in fetching partner data", error);
    }
  };

  useEffect(() => {
    fetchPartnerData();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit(handleAddPartner)}
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

              <div>
                <Label className="font-bold">Items</Label>
                <div className="border p-2 rounded-md grid grid-cols-3 gap-5">
                  {firstSectionItems.map((field, index) => (
                    <div
                      key={field.id}
                      className="grid grid-cols-1 gap-2 relative border-r pr-5 last:border-r-0"
                    >
                      <div className="absolute top-2 right-2">
                        <RiDeleteBinLine
                          onClick={() => firstSectionRemove(index)}
                          className="cursor-pointer text-red-600"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                          <Label className="font-bold">Image</Label>
                          <Controller
                            name={`firstSection.items.${index}.image`}
                            control={control}
                            rules={{ required: "Image is required" }}
                            render={({ field }) => (
                              <ImageUploader
                                value={field.value}
                                onChange={field.onChange}
                              />
                            )}
                          />
                          {errors.firstSection?.items?.[index]?.image && (
                            <p className="text-red-500">
                              {
                                errors.firstSection?.items?.[index]?.image
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
                                `firstSection.items.${index}.imageAlt`,
                                {
                                  required: "Value is required",
                                }
                              )}
                            />
                            {errors.firstSection?.items?.[index]?.imageAlt && (
                              <p className="text-red-500">
                                {
                                  errors.firstSection?.items?.[index]?.imageAlt
                                    .message
                                }
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="flex flex-col gap-2">
                            <Label className="font-bold">Title</Label>
                            <Input
                              type="text"
                              placeholder="Title"
                              {...register(
                                `firstSection.items.${index}.title`,
                                {
                                  required: "Value is required",
                                }
                              )}
                            />
                            {errors.firstSection?.items?.[index]?.title && (
                              <p className="text-red-500">
                                {
                                  errors.firstSection?.items?.[index]?.title
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
                      firstSectionAppend({ image: "", imageAlt: "", title: "" })
                    }
                  >
                    Add Item
                  </Button>
                </div>
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

export default PartnerPage;
