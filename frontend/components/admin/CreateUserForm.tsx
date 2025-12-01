'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createUserSchema, CreateUserFormData } from '@/lib/schemas';
import Link from 'next/link';

export default function CreateUserForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserSchema),
        defaultValues: {
            role: 'Operator',
            status: false,
        },
    });

    const onSubmit = (data: CreateUserFormData) => {
        console.log('Form Data:', data);
        alert('User created successfully! (Mock)');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-[#111a22] rounded-xl border border-gray-200 dark:border-[#324d67] p-8 space-y-8">
            {/* User Information Section */}
            <div>
                <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-4 border-b border-gray-200 dark:border-[#324d67]">User Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <label className="flex flex-col">
                        <p className="text-gray-800 dark:text-white text-base font-medium leading-normal pb-2">First Name</p>
                        <input
                            {...register('firstName')}
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#324d67] bg-transparent dark:bg-[#192633] h-14 placeholder:text-gray-400 dark:placeholder:text-[#92adc9] p-[15px] text-base font-normal leading-normal"
                            placeholder="Enter first name"
                        />
                        {errors.firstName && <span className="text-red-500 text-sm mt-1">{errors.firstName.message}</span>}
                    </label>
                    <label className="flex flex-col">
                        <p className="text-gray-800 dark:text-white text-base font-medium leading-normal pb-2">Last Name</p>
                        <input
                            {...register('lastName')}
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#324d67] bg-transparent dark:bg-[#192633] h-14 placeholder:text-gray-400 dark:placeholder:text-[#92adc9] p-[15px] text-base font-normal leading-normal"
                            placeholder="Enter last name"
                        />
                        {errors.lastName && <span className="text-red-500 text-sm mt-1">{errors.lastName.message}</span>}
                    </label>
                    <label className="flex flex-col">
                        <p className="text-gray-800 dark:text-white text-base font-medium leading-normal pb-2">Email Address</p>
                        <input
                            {...register('email')}
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#324d67] bg-transparent dark:bg-[#192633] h-14 placeholder:text-gray-400 dark:placeholder:text-[#92adc9] p-[15px] text-base font-normal leading-normal"
                            placeholder="user@example.com"
                        />
                        {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
                    </label>
                    <label className="flex flex-col">
                        <p className="text-gray-800 dark:text-white text-base font-medium leading-normal pb-2">Job Title <span className="text-gray-400">(Optional)</span></p>
                        <input
                            {...register('jobTitle')}
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#324d67] bg-transparent dark:bg-[#192633] h-14 placeholder:text-gray-400 dark:placeholder:text-[#92adc9] p-[15px] text-base font-normal leading-normal"
                            placeholder="e.g. Product Manager"
                        />
                    </label>
                </div>
            </div>

            {/* Access Control Section */}
            <div>
                <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-4 border-b border-gray-200 dark:border-[#324d67]">Access Control & Permissions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <label className="flex flex-col">
                        <p className="text-gray-800 dark:text-white text-base font-medium leading-normal pb-2">Assign Role</p>
                        <div className="relative">
                            <select
                                {...register('role')}
                                className="form-select appearance-none flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#324d67] bg-transparent dark:bg-[#192633] h-14 p-[15px] pr-10 text-base font-normal leading-normal"
                            >
                                <option value="Admin">Admin</option>
                                <option value="Supervisor">Supervisor</option>
                                <option value="Operator">Operator</option>
                                <option value="Client">Client</option>
                            </select>
                            <span className="material-symbols-outlined absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 dark:text-[#92adc9] pointer-events-none">expand_more</span>
                        </div>
                        {errors.role && <span className="text-red-500 text-sm mt-1">{errors.role.message}</span>}
                    </label>
                    <label className="flex flex-col">
                        <p className="text-gray-800 dark:text-white text-base font-medium leading-normal pb-2">Assign Supervisor</p>
                        <div className="relative">
                            <input
                                {...register('supervisor')}
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#324d67] bg-transparent dark:bg-[#192633] h-14 p-[15px] pl-10 text-base font-normal leading-normal"
                                placeholder="Search by name or email"
                            />
                            <span className="material-symbols-outlined absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 dark:text-[#92adc9] pointer-events-none">search</span>
                        </div>
                    </label>
                </div>
            </div>

            {/* Security & Status Section */}
            <div>
                <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-4 border-b border-gray-200 dark:border-[#324d67]">Security & Status</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <label className="flex flex-col">
                        <p className="text-gray-800 dark:text-white text-base font-medium leading-normal pb-2">Set Initial Password</p>
                        <div className="relative">
                            <input
                                {...register('password')}
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#324d67] bg-transparent dark:bg-[#192633] h-14 p-[15px] pr-12 text-base font-normal leading-normal"
                                placeholder="••••••••"
                                type="password"
                            />
                            <button type="button" className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 dark:text-[#92adc9]">
                                <span className="material-symbols-outlined text-xl">visibility_off</span>
                            </button>
                        </div>
                        {errors.password && <span className="text-red-500 text-sm mt-1">{errors.password.message}</span>}
                    </label>
                    <div>
                        <p className="text-gray-800 dark:text-white text-base font-medium leading-normal pb-2">Account Status</p>
                        <div className="flex items-center gap-4 h-14">
                            <p className="text-gray-500 dark:text-[#92adc9]">Inactive</p>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" {...register('status')} className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/30 dark:peer-focus:ring-primary/80 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                            </label>
                            <p className="font-medium text-primary dark:text-primary">Active</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Bar */}
            <div className="flex justify-end gap-4 pt-6 border-t border-gray-200 dark:border-[#324d67]">
                <Link href="/admin/users" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-gray-200 dark:bg-[#192633] text-gray-800 dark:text-white text-sm font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate">Cancel</span>
                </Link>
                <button type="submit" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate">Create User</span>
                </button>
            </div>
        </form>
    );
}
