'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { editUserSchema, EditUserFormData } from '@/lib/schemas';
import Link from 'next/link';
import { useState } from 'react';
import Modal from '@/components/ui/Modal';

interface EditUserFormProps {
    defaultValues: EditUserFormData;
}

export default function EditUserForm({ defaultValues }: EditUserFormProps) {
    const [isResetPasswordOpen, setIsResetPasswordOpen] = useState(false);
    const [isDeactivateOpen, setIsDeactivateOpen] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<EditUserFormData>({
        resolver: zodResolver(editUserSchema),
        defaultValues,
    });

    const onSubmit = (data: EditUserFormData) => {
        console.log('Form Data:', data);
        alert('User updated successfully! (Mock)');
    };

    const handleResetPassword = () => {
        alert('Password reset email sent! (Mock)');
        setIsResetPasswordOpen(false);
    };

    const handleDeactivateAccount = () => {
        alert('Account deactivated! (Mock)');
        setIsDeactivateOpen(false);
    };

    const inputClassName = "w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-primary focus:border-primary h-11 px-4";

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
                {/* Account Details Card */}
                <div className="bg-white dark:bg-[#18232e] border border-gray-200 dark:border-gray-700 rounded-xl">
                    <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Account Details</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Update user's personal information and supervisor.</p>
                    </div>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">First Name</label>
                            <input
                                {...register('firstName')}
                                className={inputClassName}
                                placeholder="First Name"
                            />
                            {errors.firstName && <span className="text-red-500 text-sm mt-1">{errors.firstName.message}</span>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Last Name</label>
                            <input
                                {...register('lastName')}
                                className={inputClassName}
                                placeholder="Last Name"
                            />
                            {errors.lastName && <span className="text-red-500 text-sm mt-1">{errors.lastName.message}</span>}
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email Address</label>
                            <input
                                {...register('email')}
                                className={inputClassName}
                                placeholder="Email Address"
                            />
                            {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Supervisor</label>
                            <select
                                {...register('supervisor')}
                                className={inputClassName}
                            >
                                <option value="">Select Supervisor</option>
                                <option value="John Smith">John Smith</option>
                                <option value="Sarah Connor">Sarah Connor</option>
                                <option value="Michael Scott">Michael Scott</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Permissions & Security Card */}
                <div className="bg-white dark:bg-[#18232e] border border-gray-200 dark:border-gray-700 rounded-xl">
                    <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Permissions & Security</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage user roles and password.</p>
                    </div>
                    <div className="p-6">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Role</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                            {['Admin', 'Supervisor', 'Operator', 'Client'].map((role) => (
                                <label key={role} className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        value={role}
                                        {...register('role')}
                                        className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                                    />
                                    <span className="text-sm text-gray-800 dark:text-gray-200">{role}</span>
                                </label>
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsResetPasswordOpen(true)}
                            className="px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                        >
                            <span className="flex items-center gap-2">
                                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>lock_reset</span>
                                Reset Password
                            </span>
                        </button>
                    </div>
                </div>

                {/* Danger Zone Card */}
                <div className="bg-white dark:bg-[#18232e] border border-red-500/50 dark:border-red-500/50 rounded-xl">
                    <div className="p-6">
                        <h3 className="text-lg font-semibold text-red-500">Danger Zone</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">These actions are permanent and cannot be undone.</p>
                        <div className="mt-4">
                            <button
                                type="button"
                                onClick={() => setIsDeactivateOpen(true)}
                                className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-lg shadow-sm hover:bg-red-600 transition-colors"
                            >
                                <span className="flex items-center gap-2">
                                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>person_off</span>
                                    Deactivate Account
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-3">
                    <Link href="/admin/users" className="px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                        Cancel
                    </Link>
                    <button type="submit" className="px-4 py-2 text-sm font-semibold text-white bg-primary rounded-lg shadow-sm hover:bg-primary/90 transition-colors">
                        Save Changes
                    </button>
                </div>
            </form>

            {/* Reset Password Modal */}
            <Modal
                isOpen={isResetPasswordOpen}
                onClose={() => setIsResetPasswordOpen(false)}
                title="Reset Password"
                footer={
                    <>
                        <button
                            onClick={() => setIsResetPasswordOpen(false)}
                            className="px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleResetPassword}
                            className="px-4 py-2 text-sm font-semibold text-white bg-primary rounded-lg shadow-sm hover:bg-primary/90 transition-colors"
                        >
                            Confirm Reset
                        </button>
                    </>
                }
            >
                <p>Are you sure you want to reset the password for this user? They will receive an email with instructions to set a new password.</p>
            </Modal>

            {/* Deactivate Account Modal */}
            <Modal
                isOpen={isDeactivateOpen}
                onClose={() => setIsDeactivateOpen(false)}
                title="Deactivate Account"
                type="danger"
                footer={
                    <>
                        <button
                            onClick={() => setIsDeactivateOpen(false)}
                            className="px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleDeactivateAccount}
                            className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg shadow-sm hover:bg-red-700 transition-colors"
                        >
                            Deactivate
                        </button>
                    </>
                }
            >
                <p>Are you sure you want to deactivate this account? The user will no longer be able to log in. This action can be reversed later.</p>
            </Modal>
        </>
    );
}
