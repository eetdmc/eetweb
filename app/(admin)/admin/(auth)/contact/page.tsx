"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useEffect } from 'react'

import { useForm, Controller } from "react-hook-form";
import { Button } from '@/components/ui/button'
import { ImageUploader } from '@/components/ui/image-uploader'
import { Textarea } from '@/components/ui/textarea'
import AdminItemContainer from '@/app/components/common/AdminItemContainer';

interface ContactFormProps {
    metaTitle: string;
    metaDescription: string;
    firstSection: {
        mainTitle: string;
        subTitle: string;
        phone: string;
        email: string;
        address: string;
        map: string;
        image: string;
        imageAlt: string;
    };
}

const ContactPage = () => {


    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<ContactFormProps>();


    const handleAddContact = async (data: ContactFormProps) => {
        try {
            const response = await fetch(`/api/admin/contact`, {
                method: "PATCH",
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                // router.push("/admin/commitment");
            }
        } catch (error) {
            console.log("Error in adding contact", error);
        }
    }

    const fetchContactData = async () => {
        try {
            const response = await fetch(`/api/admin/contact`);
            if (response.ok) {
                const data = await response.json();
                setValue("metaTitle", data.data.metaTitle);
                setValue("metaDescription", data.data.metaDescription);
                setValue("firstSection", data.data.firstSection);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error in fetching contact data", error);
        }
    }



    useEffect(() => {
        fetchContactData();
    }, []);


    return (
        <div className='flex flex-col gap-5'>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit(handleAddContact)}>


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
                        <div className='flex flex-col gap-1'>
                                                    <Label className='font-bold'>Image</Label>
                                                    <Controller
                                                        name="firstSection.image"
                                                        control={control}
                                                        rules={{ required: "Image is required" }}
                                                        render={({ field }) => (
                                                            <ImageUploader
                                                                value={field.value}
                                                                onChange={field.onChange}
                                                            />
                                                        )}
                                                    />
                                                    {errors.firstSection?.image && (
                                                        <p className="text-red-500">{errors.firstSection?.image.message}</p>
                                                    )}
                                                    <Label className='font-bold'>Alt Tag</Label>
                                                    <Input type='text' placeholder='Alt Tag' {...register("firstSection.imageAlt")} />
                                                </div>
                                                <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Phone</Label>
                            <Input type='text' placeholder='Phone' {...register("firstSection.phone", {
                                required: "Phone is required"
                            })} />
                            {errors.firstSection?.phone && <p className='text-red-500'>{errors.firstSection?.phone.message}</p>}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Address</Label>
                            <Textarea placeholder='Address' {...register("firstSection.address", {
                                required: "Address is required"
                            })} />
                            {errors.firstSection?.address && <p className='text-red-500'>{errors.firstSection?.address.message}</p>}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Email</Label>
                            <Input type='text' placeholder='Email' {...register("firstSection.email", {
                                required: "Email is required"
                            })} />
                            {errors.firstSection?.email && <p className='text-red-500'>{errors.firstSection?.email.message}</p>}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Map</Label>
                            <Input type='text' placeholder='Map' {...register("firstSection.map", {
                                required: "Map is required"
                            })} />
                            {errors.firstSection?.map && <p className='text-red-500'>{errors.firstSection?.map.message}</p>}
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

export default ContactPage