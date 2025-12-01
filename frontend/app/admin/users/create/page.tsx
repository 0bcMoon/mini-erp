import AdminLayout from '@/components/admin/AdminLayout';
import CreateUserForm from '@/components/admin/CreateUserForm';
import Link from 'next/link';

export default function CreateUserPage() {
    return (
        <AdminLayout>
            {/* Breadcrumbs */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
                <Link href="/admin/users" className="text-sm font-medium text-gray-500 hover:text-primary dark:text-[#92adc9] dark:hover:text-white">Users</Link>
                <span className="text-sm font-medium text-gray-400 dark:text-[#92adc9]">/</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Create New User</span>
            </div>

            {/* Page Heading */}
            <div className="flex flex-wrap justify-between items-center gap-3 pb-8">
                <p className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Create New User</p>
                <Link href="/admin/users" className="flex items-center justify-center size-10 rounded-lg bg-gray-200 dark:bg-[#192633] text-gray-600 dark:text-white">
                    <span className="material-symbols-outlined">close</span>
                </Link>
            </div>

            <CreateUserForm />
        </AdminLayout>
    );
}
