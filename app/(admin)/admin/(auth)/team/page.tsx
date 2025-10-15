"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useEffect } from 'react'

import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Button } from '@/components/ui/button'
import { ImageUploader } from '@/components/ui/image-uploader'
import { RiDeleteBinLine } from "react-icons/ri";
import { Textarea } from '@/components/ui/textarea'
import AdminItemContainer from '@/app/components/common/AdminItemContainer';

interface TeamFormProps {
    metaTitle: string;
    metaDescription: string;
    firstSection: {
        mainTitle: string;
        subTitle: string;
        description: string;
    };
    secondSection: {
        title: string;
        items:{
            image: string;
            imageAlt: string;
            title: string;
            designation: string;
        }[]
    };
    thirdSection: {
        title: string;
        description: string;
        firstImage: string;
        firstImageAlt: string;
        secondImage: string;
        secondImageAlt: string;
    };
    fourthSection: {
        title: string;
        items: {
            logo: string;
            logoAlt: string;
            title: string;
            description: string;
        }[];
    };
}

const TeamPage = () => {


    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<TeamFormProps>();


    const { fields: secondSectionItems, append: secondSectionAppend, remove: secondSectionRemove } = useFieldArray({
        control,
        name: "secondSection.items"
    });


    const handleAddTeam = async (data: TeamFormProps) => {
        try {
            const response = await fetch(`/api/admin/team`, {
                method: "PATCH",
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                // router.push("/admin/commitment");
            }
        } catch (error) {
            console.log("Error in adding team", error);
        }
    }

    const fetchTeamData = async () => {
        try {
            const response = await fetch(`/api/admin/team`);
            if (response.ok) {
                const data = await response.json();
                setValue("metaTitle", data.data.metaTitle);
                setValue("metaDescription", data.data.metaDescription);
                setValue("firstSection", data.data.firstSection);
                setValue("secondSection", data.data.secondSection);
                setValue("secondSection.items", data.data.secondSection.items);
                setValue("thirdSection", data.data.thirdSection);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error in fetching team data", error);
        }
    }



    useEffect(() => {
        fetchTeamData();
    }, []);


    return (
        <div className='flex flex-col gap-5'>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit(handleAddTeam)}>


                <AdminItemContainer>
                <Label main>First Section</Label>
                <div className='p-5 rounded-md flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Main Title</Label>
                            <Input type='text' placeholder='Main Title' {...register("firstSection.mainTitle", {
                                required: "Main Title is required"
                            })} />
                            {errors.firstSection?.mainTitle && <p className='text-red-500'>{errors.firstSection?.mainTitle.message}</p>}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Sub Title</Label>
                            <Input type='text' placeholder='Sub Title' {...register("firstSection.subTitle", {
                                required: "Sub Title is required"
                            })} />
                            {errors.firstSection?.subTitle && <p className='text-red-500'>{errors.firstSection?.subTitle.message}</p>}
                        </div>
                        <div>
                            <Label className="text-sm font-bold">Description</Label>
                            <Controller name="firstSection.description" control={control} rules={{ required: "Description is required" }} render={({ field }) => {
                                return <Textarea value={field.value} onChange={field.onChange} />
                            }} />
                        </div>
                    </div>

                </div>
                </AdminItemContainer>


                <AdminItemContainer>
                <Label main>Second Section</Label>
                <div className='p-5 rounded-md flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Title</Label>
                            <Input type='text' placeholder='Title' {...register("secondSection.title", {
                                required: "Title is required"
                            })} />
                            {errors.secondSection?.title && <p className='text-red-500'>{errors.secondSection?.title.message}</p>}
                        </div>
                        
                        <div>
                    <Label className='font-bold'>Items</Label>
                <div className='border p-2 rounded-md flex flex-col gap-5'>


                    {secondSectionItems.map((field, index) => (
                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b pb-5 last:border-b-0'>
                            <div className='absolute top-2 right-2'>
                                <RiDeleteBinLine onClick={() => secondSectionRemove(index)} className='cursor-pointer text-red-600' />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Image</Label>
                                    <Controller
                                        name={`secondSection.items.${index}.image`}
                                        control={control}
                                        rules={{ required: "Image is required" }}
                                        render={({ field }) => (
                                            <ImageUploader
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                    {errors.secondSection?.items?.[index]?.image && (
                                        <p className="text-red-500">{errors.secondSection?.items?.[index]?.image.message}</p>
                                    )}
                                </div>

                                <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register(`secondSection.items.${index}.imageAlt`, {
                                        required: "Value is required"
                                    })} />
                                    {errors.secondSection?.items?.[index]?.imageAlt && <p className='text-red-500'>{errors.secondSection?.items?.[index]?.imageAlt.message}</p>}
                                </div>
                            </div>


                            </div>

                            <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Title</Label>
                                    <Input type='text' placeholder='Title' {...register(`secondSection.items.${index}.title`, {
                                        required: "Value is required"
                                    })} />
                                    {errors.secondSection?.items?.[index]?.title && <p className='text-red-500'>{errors.secondSection?.items?.[index]?.title.message}</p>}
                                </div>
                            </div>

                            <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Designation</Label>
                            <Input type='text' placeholder='Designation' {...register(`secondSection.items.${index}.designation`, {
                                required: "Value is required"
                            })} />
                            {errors.secondSection?.items?.[index]?.designation && <p className='text-red-500'>{errors.secondSection?.items?.[index]?.designation.message}</p>}
                        </div>
                        
                            </div>

                        </div>
                    ))}

                    

                </div>
                <div className='flex justify-end mt-2'>
                        <Button type='button' addItem onClick={() => secondSectionAppend({ title: "", image: "", imageAlt: "", designation: "" })}>Add Item</Button>
                    </div>
                </div>

                    </div>

                </div>
                </AdminItemContainer>



                <AdminItemContainer>
                <Label main>Third Section</Label>
                <div className='p-5 rounded-md flex flex-col gap-2'>
                <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Title</Label>
                            <Input type='text' placeholder='Title' {...register("thirdSection.title", {
                                required: "Title is required"
                            })} />
                            {errors.thirdSection?.title && <p className='text-red-500'>{errors.thirdSection?.title.message}</p>}
                        </div>
                        <div>
                            <Label className="text-sm font-bold">Description</Label>
                            <Controller name="thirdSection.description" control={control} rules={{ required: "Description is required" }} render={({ field }) => {
                                return <Textarea value={field.value} onChange={field.onChange} />
                            }} />
                        </div>
                    <div className='grid grid-cols-2 gap-2'>
                    <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>First Image</Label>
                                    <Controller
                                        name={`thirdSection.firstImage`}
                                        control={control}
                                        rules={{ required: "Image is required" }}
                                        render={({ field }) => (
                                            <ImageUploader
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                    {errors.thirdSection?.firstImage && (
                                        <p className="text-red-500">{errors.thirdSection?.firstImage.message}</p>
                                    )}
                                </div>

                                <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register(`thirdSection.firstImageAlt`, {
                                        required: "Value is required"
                                    })} />
                                    {errors.thirdSection?.firstImageAlt && <p className='text-red-500'>{errors.thirdSection?.firstImageAlt.message}</p>}
                                </div>
                            </div>


                            </div>


                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Second Image</Label>
                                    <Controller
                                        name={`thirdSection.secondImage`}
                                        control={control}
                                        rules={{ required: "Image is required" }}
                                        render={({ field }) => (
                                            <ImageUploader
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                    {errors.thirdSection?.secondImage && (
                                        <p className="text-red-500">{errors.thirdSection?.secondImage.message}</p>
                                    )}
                                </div>

                                <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register(`thirdSection.secondImageAlt`, {
                                        required: "Value is required"
                                    })} />
                                    {errors.thirdSection?.secondImageAlt && <p className='text-red-500'>{errors.thirdSection?.secondImageAlt.message}</p>}
                                </div>
                            </div>


                            </div>

                    </div>

                </div>
                </AdminItemContainer>



                <div className='flex flex-col gap-2'>
                    <Label className='pl-3 font-bold'>Meta Title</Label>
                    <Input type='text' placeholder='Meta Title' {...register("metaTitle")} />
                </div>
                <div className='flex flex-col gap-2'>
                    <Label className='pl-3 font-bold'>Meta Description</Label>
                    <Input type='text' placeholder='Meta Description' {...register("metaDescription")} />
                </div>

                <div className='flex'>
                    <Button type='submit' className="cursor-pointer text-white text-[16px] w-full">Submit</Button>
                </div>

            </form>
        </div>
    )
}

export default TeamPage