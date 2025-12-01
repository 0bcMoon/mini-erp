'use client';

import AdminLayout from '@/components/admin/AdminLayout';
import EditUserForm from '@/components/admin/EditUserForm';
import { mockUsers } from '@/lib/mockData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { use } from 'react';

interface EditUserPageProps {
    params: Promise<{ id: string }>;
}

export default function EditUserPage({ params }: EditUserPageProps) {
    const { id } = use(params);
    const user = mockUsers.find((u) => u.id === id);

    if (!user) {
        notFound();
    }

    // Split name into first and last name for the form
    const [firstName, ...lastNameParts] = user.name.split(' ');
    const lastName = lastNameParts.join(' ');

    const defaultValues = {
        firstName: firstName || '',
        lastName: lastName || '',
        email: user.email,
        role: user.role as 'Admin' | 'Supervisor' | 'Operator' | 'Client',
        supervisor: 'Sarah Connor', // Mock default
        status: user.status === 'Active',
    };

    return (
        <AdminLayout>
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumbs */}
                <div className="flex flex-wrap gap-2 mb-6">
                    <Link href="/admin" className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary">Admin</Link>
                    <span className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">/</span>
                    <Link href="/admin/users" className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary">Users</Link>
                    <span className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">/</span>
                    <span className="text-gray-900 dark:text-white text-sm font-medium leading-normal">{user.name}</span>
                </div>

                {/* Page Heading */}
                <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
                    <div className="flex min-w-72 flex-col gap-1">
                        <p className="text-gray-900 dark:text-white text-3xl font-bold leading-tight tracking-tight">{user.name}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">Manage user details, permissions, and account status.</p>
                    </div>
                </div>

                {/* Main Layout Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: User Profile */}
                    <div className="lg:col-span-1">
                        <div className="bg-white dark:bg-[#18232e] border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex flex-col items-center text-center">
                            <div className="relative mb-4">
                                <div
                                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-32"
                                    style={{ backgroundImage: `url("${user.avatar}")` }}
                                ></div>
                                <span className={`absolute bottom-2 right-2 flex h-5 w-5 items-center justify-center rounded-full ring-4 ring-white dark:ring-[#18232e] ${user.status === 'Active' ? 'bg-green-500' : 'bg-gray-400'}`}>
                                    <span className="relative flex h-2 w-2 rounded-full bg-white"></span>
                                </span>
                            </div>
                            <p className="text-gray-900 dark:text-white text-xl font-bold leading-tight">{user.name}</p>
                            <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal mb-4">{user.email}</p>
                            <span className={`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${user.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                                }`}>
                                {user.status}
                            </span>
                            <div className="w-full mt-6 text-left">
                                <div className="grid grid-cols-[auto_1fr] gap-x-4 border-t border-gray-200 dark:border-gray-700 py-4">
                                    <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">Last Login</p>
                                    <p className="text-gray-900 dark:text-white text-sm font-medium text-right">{user.lastLogin}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Edit Forms */}
                    <div className="lg:col-span-2">
                        <EditUserForm defaultValues={defaultValues} />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
