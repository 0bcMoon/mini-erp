import { mockUsers } from '@/lib/mockData';
import Link from 'next/link';

export default function UserTable() {
    return (
        <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-[#111a22]">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                    <thead className="bg-gray-50 dark:bg-gray-900/50">
                        <tr>
                            <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white sm:pl-6" scope="col">
                                <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700" type="checkbox" />
                            </th>
                            <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white" scope="col">User Name</th>
                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white" scope="col">Role</th>
                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white" scope="col">Status</th>
                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white" scope="col">Last Login</th>
                            <th className="relative py-3.5 pl-3 pr-4 sm:pr-6" scope="col"><span className="sr-only">Actions</span></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-[#111a22]">
                        {mockUsers.map((user) => (
                            <tr key={user.id}>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-white sm:pl-6">
                                    <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700" type="checkbox" />
                                </td>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-white">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                                            style={{ backgroundImage: `url("${user.avatar}")` }}>
                                        </div>
                                        <div>
                                            <div>
                                                <Link href={`/admin/users/${user.id}`} className="font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary">
                                                    {user.name}
                                                </Link>
                                                <div className="text-gray-500 dark:text-gray-400">{user.email}</div>
                                            </div>                    </div>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">{user.role}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${user.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' :
                                        user.status === 'Inactive' ? 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300' :
                                            'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                                        }`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">{user.lastLogin}</td>
                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                    <button className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white">
                                        <span className="material-symbols-outlined">more_horiz</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
