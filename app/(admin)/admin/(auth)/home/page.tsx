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

interface HomeFormProps {
    metaTitle: string;
    metaDescription: string;
    bannerSection:{
        items:{
            image: string;
            imageAlt: string;
            title:string;
            description:string;
        }[]
    }
    secondSection:{
        image:string;
        imageAlt:string;
        title:string;
        description:string;
    }
    thirdSection: {
        image:string;
        imageAlt:string;
        items: {
            logo: string;
            logoAlt: string;
            title:string;
            description:string;
        }[];
    };
    fourthSection: {
        mainTitle:string;
        subTitle:string;
        items: {
            image: string;
            imageAlt: string;
            title:string;
            description:string;
        }[];
    };
    fifthSection: {
        mainTitle:string;
        subTitle:string;
        items: {
            image: string;
            imageAlt: string;
            title:string;
            number:string;
            value:string;
            locations:{
                title:string;
            }[];
        }[];
    };
    sixthSection: {
        title:string;
        items: {
            title:string;
            description:string;
        }[];
    };
}

const HomePage = () => {


    const { register, handleSubmit, setValue, control, formState: { errors }, watch } = useForm<HomeFormProps>();


    const { fields: bannerSectionItems, append: bannerSectionAppend, remove: bannerSectionRemove } = useFieldArray({
        control,
        name: "bannerSection.items"
    });


    const { fields: thirdSectionItems, append: thirdSectionAppend, remove: thirdSectionRemove } = useFieldArray({
        control,
        name: "thirdSection.items"
    });

    const { fields: fourthSectionItems, append: fourthSectionAppend, remove: fourthSectionRemove } = useFieldArray({
        control,
        name: "fourthSection.items"
    });

    const { fields: fifthSectionItems, append: fifthSectionAppend, remove: fifthSectionRemove } = useFieldArray({
        control,
        name: "fifthSection.items"
    });

    const { fields: sixthSectionItems, append: sixthSectionAppend, remove: sixthSectionRemove } = useFieldArray({
        control,
        name: "sixthSection.items"
    });


    const handleAddHome = async (data: HomeFormProps) => {
        try {
            const response = await fetch(`/api/admin/home`, {
                method: "PATCH",
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                // router.push("/admin/commitment");
            }
        } catch (error) {
            console.log("Error in adding home", error);
        }
    }

    const fetchHomeData = async () => {
        try {
            const response = await fetch(`/api/admin/home`);
            if (response.ok) {
                const data = await response.json();
                setValue("metaTitle", data.data.metaTitle);
                setValue("metaDescription", data.data.metaDescription);
                setValue("bannerSection.items", data.data.bannerSection.items);
                setValue("secondSection", data.data.secondSection);
                setValue("thirdSection", data.data.thirdSection);
                setValue("thirdSection.items", data.data.thirdSection.items);
                setValue("fourthSection", data.data.fourthSection);
                setValue("fourthSection.items", data.data.fourthSection.items);
                setValue("fifthSection", data.data.fifthSection);
                setValue("fifthSection.items", data.data.fifthSection.items);
                setValue("sixthSection", data.data.sixthSection);
                setValue("sixthSection.items", data.data.sixthSection.items);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error in fetching home data", error);
        }
    }



    useEffect(() => {
        fetchHomeData();
    }, []);


        const handleAddLocation = (index: number) => {
        const currentFiles = watch(`fifthSection.items.${index}.locations`) || [];
        setValue(`fifthSection.items.${index}.locations`, [...currentFiles, { title: "" }]);
    };

    const handleRemoveLocation = (index: number, fileIndex: number) => {
        const currentFiles = watch(`fifthSection.items.${index}.locations`) || [];
        setValue(`fifthSection.items.${index}.locations`, currentFiles.filter((_, i) => i !== fileIndex));
    }


    return (
        <div className='flex flex-col gap-5'>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit(handleAddHome)}>


                    <AdminItemContainer>
                    <Label className='font-bold' main>Banner Section</Label>
                    <div className='p-5 rounded-md flex flex-col gap-5'>
                    <Label className='font-bold'>Items</Label>
                <div className='border p-2 rounded-md flex flex-col gap-5'>


                    {bannerSectionItems.map((field, index) => (
                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b pb-5 last:border-b-0'>
                            <div className='absolute top-2 right-2'>
                                <RiDeleteBinLine onClick={() => bannerSectionRemove(index)} className='cursor-pointer text-red-600' />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Image</Label>
                                    <Controller
                                        name={`bannerSection.items.${index}.image`}
                                        control={control}
                                        rules={{ required: "Image is required" }}
                                        render={({ field }) => (
                                            <ImageUploader
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                    {errors.bannerSection?.items?.[index]?.image && (
                                        <p className="text-red-500">{errors.bannerSection?.items?.[index]?.image.message}</p>
                                    )}
                                </div>

                                <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register(`bannerSection.items.${index}.imageAlt`, {
                                        required: "Value is required"
                                    })} />
                                    {errors.bannerSection?.items?.[index]?.imageAlt && <p className='text-red-500'>{errors.bannerSection?.items?.[index]?.imageAlt.message}</p>}
                                </div>
                            </div>


                            </div>

                            <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Title</Label>
                                    <Input type='text' placeholder='Title' {...register(`bannerSection.items.${index}.title`, {
                                        required: "Value is required"
                                    })} />
                                    {errors.bannerSection?.items?.[index]?.title && <p className='text-red-500'>{errors.bannerSection?.items?.[index]?.title.message}</p>}
                                </div>
                            </div>
                            </div>

                        </div>
                    ))}

                    

                </div>
                <div className='flex justify-end mt-2'>
                        <Button type='button' addItem onClick={() => bannerSectionAppend({ title: "", image: "", imageAlt: "", description: "" })}>Add Item</Button>
                    </div>
                </div>
                </AdminItemContainer>


                <AdminItemContainer>
                    <Label className='font-bold' main>Second Section</Label>
                    <div className='grid grid-cols-2 gap-2 relative p-5'>
                    
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Image</Label>
                                    <Controller
                                        name={`secondSection.image`}
                                        control={control}
                                        rules={{ required: "Image is required" }}
                                        render={({ field }) => (
                                            <ImageUploader
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                    {errors.secondSection?.image && (
                                        <p className="text-red-500">{errors.secondSection?.image.message}</p>
                                    )}
                                </div>

                                <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register(`secondSection.imageAlt`, {
                                        required: "Value is required"
                                    })} />
                                    {errors.secondSection?.imageAlt && <p className='text-red-500'>{errors.secondSection?.imageAlt.message}</p>}
                                </div>
                            </div>


                            </div>

                            <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Title</Label>
                                    <Input type='text' placeholder='Title' {...register(`secondSection.title`, {
                                        required: "Value is required"
                                    })} />
                                    {errors.secondSection?.title && <p className='text-red-500'>{errors.secondSection?.title.message}</p>}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Description</Label>
                                    <Controller name="secondSection.description" control={control} rules={{ required: "Description is required" }} render={({ field }) => {
                                        return <Textarea value={field.value} onChange={field.onChange} />
                                    }} />
                                </div>
                            </div>
                            </div>

                        </div>
                </AdminItemContainer>

                                <AdminItemContainer>
                <Label main>Third Section</Label>
                <div className='p-5 rounded-md flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Image</Label>
                                    <Controller
                                        name={`thirdSection.image`}
                                        control={control}
                                        rules={{ required: "Image is required" }}
                                        render={({ field }) => (
                                            <ImageUploader
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                    {errors.thirdSection?.image && (
                                        <p className="text-red-500">{errors.thirdSection?.image.message}</p>
                                    )}
                                </div>

                                <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register(`thirdSection.imageAlt`, {
                                        required: "Value is required"
                                    })} />
                                    {errors.thirdSection?.imageAlt && <p className='text-red-500'>{errors.thirdSection?.imageAlt.message}</p>}
                                </div>
                            </div>


                            </div>

                        <div>
                    <Label className='font-bold'>Items</Label>
                <div className='border p-2 rounded-md flex flex-col gap-5'>


                    {thirdSectionItems.map((field, index) => (
                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b pb-5 last:border-b-0'>
                            <div className='absolute top-2 right-2'>
                                <RiDeleteBinLine onClick={() => thirdSectionRemove(index)} className='cursor-pointer text-red-600' />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Logo</Label>
                                    <Controller
                                        name={`thirdSection.items.${index}.logo`}
                                        control={control}
                                        rules={{ required: "Image is required" }}
                                        render={({ field }) => (
                                            <ImageUploader
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                    {errors.thirdSection?.items?.[index]?.logo && (
                                        <p className="text-red-500">{errors.thirdSection?.items?.[index]?.logo.message}</p>
                                    )}
                                </div>

                                <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register(`thirdSection.items.${index}.logoAlt`, {
                                        required: "Value is required"
                                    })} />
                                    {errors.thirdSection?.items?.[index]?.logoAlt && <p className='text-red-500'>{errors.thirdSection?.items?.[index]?.logoAlt.message}</p>}
                                </div>
                            </div>


                            </div>

                            <div>
                                <div className='grid grid-cols-1 gap-2 col-span-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Title</Label>
                                    <Input type='text' placeholder='Title' {...register(`thirdSection.items.${index}.title`, {
                                        required: "Value is required"
                                    })} />
                                    {errors.thirdSection?.items?.[index]?.title && <p className='text-red-500'>{errors.thirdSection?.items?.[index]?.title.message}</p>}
                                </div>
                                <div>
                            <Label className="text-sm font-bold">Description</Label>
                            <Controller name={`thirdSection.items.${index}.description`} control={control} rules={{ required: "Description is required" }} render={({ field }) => {
                                return <Textarea value={field.value} onChange={field.onChange} />
                            }} />
                            {errors.thirdSection?.items?.[index]?.description && <p className='text-red-500'>{errors.thirdSection?.items?.[index]?.description.message}</p>}
                        </div>
                            </div>
                            </div>


                        </div>
                    ))}

                    

                </div>
                <div className='flex justify-end mt-2'>
                        <Button type='button' addItem onClick={() => thirdSectionAppend({ title: "", description: "",logo: "",logoAlt: "" })}>Add Item</Button>
                    </div>
                </div>

                    </div>

                </div>
                </AdminItemContainer>


                <AdminItemContainer>
                <Label main>Fourth Section</Label>
                <div className='p-5 rounded-md flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Main Title</Label>
                            <Input type='text' placeholder='Main Title' {...register("fourthSection.mainTitle", {
                                required: "Main Title is required"
                            })} />
                            {errors.fourthSection?.mainTitle && <p className='text-red-500'>{errors.fourthSection?.mainTitle.message}</p>}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Sub Title</Label>
                            <Input type='text' placeholder='Sub Title' {...register("fourthSection.subTitle", {
                                required: "Sub Title is required"
                            })} />
                            {errors.fourthSection?.subTitle && <p className='text-red-500'>{errors.fourthSection?.subTitle.message}</p>}
                        </div>

                        <div>
                    <Label className='font-bold'>Items</Label>
                <div className='border p-2 rounded-md flex flex-col gap-5'>


                    {fourthSectionItems.map((field, index) => (
                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b pb-5 last:border-b-0'>
                            <div className='absolute top-2 right-2'>
                                <RiDeleteBinLine onClick={() => fourthSectionRemove(index)} className='cursor-pointer text-red-600' />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Image</Label>
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
                                        <p className="text-red-500">{errors.fourthSection?.items?.[index]?.image.message}</p>
                                    )}
                                </div>

                                <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register(`fourthSection.items.${index}.imageAlt`, {
                                        required: "Value is required"
                                    })} />
                                    {errors.fourthSection?.items?.[index]?.imageAlt && <p className='text-red-500'>{errors.fourthSection?.items?.[index]?.imageAlt.message}</p>}
                                </div>
                            </div>


                            </div>

                            <div>
                                <div className='grid grid-cols-1 gap-2 col-span-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Title</Label>
                                    <Input type='text' placeholder='Title' {...register(`fourthSection.items.${index}.title`, {
                                        required: "Value is required"
                                    })} />
                                    {errors.fourthSection?.items?.[index]?.title && <p className='text-red-500'>{errors.fourthSection?.items?.[index]?.title.message}</p>}
                                </div>
                                <div>
                            <Label className="text-sm font-bold">Description</Label>
                            <Controller name={`fourthSection.items.${index}.description`} control={control} rules={{ required: "Description is required" }} render={({ field }) => {
                                return <Textarea value={field.value} onChange={field.onChange} />
                            }} />
                            {errors.fourthSection?.items?.[index]?.description && <p className='text-red-500'>{errors.fourthSection?.items?.[index]?.description.message}</p>}
                        </div>
                            </div>
                            </div>

                        </div>
                    ))}


                </div>
                <div className='flex justify-end mt-2'>
                        <Button type='button' addItem onClick={() => fourthSectionAppend({ title: "", description: "",image: "",imageAlt: "" })}>Add Item</Button>
                    </div>
                </div>

                    </div>

                </div>
                </AdminItemContainer>


<AdminItemContainer>
                    <Label main>Fifth Section</Label>
                    <div className='p-5 rounded-md flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-1'>
                                <Label className='font-bold'>Main Title</Label>
                                <Input type='text' placeholder='Title' {...register("fifthSection.mainTitle", {
                                    required: "Title is required"
                                })} />
                                {errors.fifthSection?.mainTitle && <p className='text-red-500'>{errors.fifthSection?.mainTitle.message}</p>}
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Label className='font-bold'>Sub Title</Label>
                                <Input type='text' placeholder='Title' {...register("fifthSection.subTitle", {
                                    required: "Title is required"
                                })} />
                                {errors.fifthSection?.subTitle && <p className='text-red-500'>{errors.fifthSection?.subTitle.message}</p>}
                            </div>

                        </div>


                        <div>
                            <Label className='font-bold'>Items</Label>
                            <div className='border p-2 rounded-md flex flex-col gap-5'>


                                {fifthSectionItems.map((field, index) => (
                                    <div key={field.id}>
                                        <div className='grid grid-cols-2 gap-2 relative border p-2 rounded-md'>
                                            <div className='absolute top-2 right-2'>
                                                <RiDeleteBinLine onClick={() => fifthSectionRemove(index)} className='cursor-pointer text-red-600' />
                                            </div>

                                            <div className='flex flex-col gap-2'>
                                                <div className='flex flex-col gap-2'>
                                                    <Label className='font-bold'>Image</Label>
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
                                                        <p className="text-red-500">{errors.fifthSection?.items?.[index]?.image.message}</p>
                                                    )}
                                                </div>

                                                <div className='flex flex-col gap-2'>
                                                    <div className='flex flex-col gap-2'>
                                                        <Label className='font-bold'>Alt Tag</Label>
                                                        <Input type='text' placeholder='Alt Tag' {...register(`fifthSection.items.${index}.imageAlt`, {
                                                            required: "Value is required"
                                                        })} />
                                                        {errors.fifthSection?.items?.[index]?.imageAlt && <p className='text-red-500'>{errors.fifthSection?.items?.[index]?.imageAlt.message}</p>}
                                                    </div>


                                                </div>



                                            </div>

                                            <div className='flex flex-col gap-2'>
                                                <div>
                                                    <Label>Title</Label>
                                                    <Input type='text' placeholder='Title' {...register(`fifthSection.items.${index}.title`, {
                                                        required: "Title is required"
                                                    })} />
                                                    {errors.fifthSection?.items?.[index]?.title && <p className='text-red-500'>{errors.fifthSection?.items?.[index]?.title.message}</p>}
                                                </div>
                                               <div className='grid grid-cols-2 gap-2'>

                                                <div>
                                                    <Label>Number</Label>
                                                    <Input type='text' placeholder='Number' {...register(`fifthSection.items.${index}.number`, {
                                                        required: "Number is required"
                                                    })} />
                                                    {errors.fifthSection?.items?.[index]?.number && <p className='text-red-500'>{errors.fifthSection?.items?.[index]?.number.message}</p>}
                                                </div>
                                                <div>
                                                    <Label>Value</Label>
                                                    <Input type='text' placeholder='Value' {...register(`fifthSection.items.${index}.value`, {
                                                        required: "Value is required"
                                                    })} />
                                                    {errors.fifthSection?.items?.[index]?.value && <p className='text-red-500'>{errors.fifthSection?.items?.[index]?.value.message}</p>}
                                                </div>
                                                </div>

                                                <div>
                                                    <Button type='button' className="w-full cursor-pointer text-white bg-green-400 text-[16px]" onClick={() => { handleAddLocation(index) }}>Add Location</Button>
                                                </div>


                                            </div>

                                        </div>



                                        <div className='grid grid-cols-2 gap-2 mt-5'>
                                            {watch(`fifthSection.items.${index}.locations`).map((file, fileIndex) => (
                                                <div key={fileIndex} className='grid grid-cols-1 gap-2 relative border p-2 rounded-md'>
                                                    <div className='absolute top-2 right-2'>
                                                        <RiDeleteBinLine onClick={() => handleRemoveLocation(index, fileIndex)} className='cursor-pointer text-red-600' />
                                                    </div>

                                                    <div className='flex flex-col gap-2'>
                                                        <div className='flex flex-col gap-2'>
                                                            <Label className='font-bold'>Title</Label>
                                                            <Controller
                                                                name={`fifthSection.items.${index}.locations.${fileIndex}.title`}
                                                                control={control}
                                                                rules={{ required: "Title is required" }}
                                                                render={({ field }) => (
                                                                    <Input
                                                                        value={field.value}
                                                                        onChange={(e) => {
                                                                            field.onChange(e.target.value); // update file URL // update size separately
                                                                        }}
                                                                    />
                                                                )}
                                                            />
                                                            {errors.fifthSection?.items?.[index]?.locations?.[fileIndex]?.title && <p className='text-red-500'>{errors.fifthSection?.items?.[index]?.locations?.[fileIndex]?.title.message}</p>}
                                                        </div>

                                                    </div>

                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                ))}

                                

                            </div>
                            <div className='mt-3 flex justify-end'>
                                    <Button type='button' className="w-fit cursor-pointer text-white text-[16px]" addItem onClick={() => { fifthSectionAppend({ image: "", imageAlt: "", title: "", number: "", value: "", locations: [] }) }}>Add Item</Button>
                                </div>
                        </div>


                    </div>

                </AdminItemContainer>


                <AdminItemContainer>
                <Label main>Sixth Section</Label>
                <div className='p-5 rounded-md flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Title</Label>
                            <Input type='text' placeholder='Title' {...register("sixthSection.title", {
                                required: "Title is required"
                            })} />
                            {errors.sixthSection?.title && <p className='text-red-500'>{errors.sixthSection?.title.message}</p>}
                        </div>
                        <div>
                    <Label className='font-bold'>Items</Label>
                <div className='border p-2 rounded-md flex flex-col gap-5'>


                    {sixthSectionItems.map((field, index) => (
                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b pb-5 last:border-b-0'>
                            <div className='absolute top-0 right-2'>
                                <RiDeleteBinLine onClick={() => sixthSectionRemove(index)} className='cursor-pointer text-red-600' />
                            </div>

<div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Title</Label>
                                    <Input type='text' placeholder='Title' {...register(`sixthSection.items.${index}.title`, {
                                        required: "Value is required"
                                    })} />
                                    {errors.sixthSection?.items?.[index]?.title && <p className='text-red-500'>{errors.sixthSection?.items?.[index]?.title.message}</p>}
                                </div>
                            <div>
                                
                                
                                <div>
                            <Label className="text-sm font-bold">Description</Label>
                            <Controller name={`sixthSection.items.${index}.description`} control={control} rules={{ required: "Description is required" }} render={({ field }) => {
                                return <Textarea value={field.value} onChange={field.onChange} />
                            }} />
                            {errors.sixthSection?.items?.[index]?.description && <p className='text-red-500'>{errors.sixthSection?.items?.[index]?.description.message}</p>}
                        </div>
                            
                            </div>


                            

                        </div>
                    ))}

                    

                </div>
                <div className='flex justify-end mt-2'>
                        <Button type='button' addItem onClick={() => sixthSectionAppend({ title: "", description: "" })}>Add Item</Button>
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

export default HomePage