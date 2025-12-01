import AdminLayout from '@/components/admin/AdminLayout';
import Toolbar from '@/components/admin/Toolbar';
import UserTable from '@/components/admin/UserTable';
import Pagination from '@/components/admin/Pagination';
import Link from 'next/link';

export default function UsersPage() {
    return (
        <AdminLayout>
            {/* Breadcrumbs */}
            <div className="flex flex-wrap items-center gap-2">
                <Link href="#" className="text-sm font-medium text-gray-500 hover:text-primary dark:text-[#92adc9] dark:hover:text-white">Admin</Link>
                <span className="text-sm font-medium text-gray-400 dark:text-[#92adc9]">/</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Users</span>
            </div>

            {/* Page Heading */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-col gap-1">
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">User Management</p>
                    <p className="text-base text-gray-500 dark:text-[#92adc9]">View, manage, and assign roles to all users.</p>
                </div>
                <Link href="/admin/users/create" className="flex h-10 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-4 text-sm font-semibold text-white shadow-sm hover:bg-primary/90">
                    <span className="material-symbols-outlined text-lg">add</span>
                    <span className="truncate">Add New User</span>
                </Link>
            </div>

            <Toolbar />
            <UserTable />
            <Pagination />
        </AdminLayout>
    );
}
