export default function Toolbar() {
    return (
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-[#111a22]">
            <div className="relative w-full max-w-xs">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                <input
                    className="w-full rounded-lg border-gray-300 bg-gray-100 py-2 pl-10 pr-4 text-sm focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-900/50 dark:text-white"
                    placeholder="Search by name, email..." type="text" />
            </div>
            <div className="flex flex-wrap items-center gap-4">
                <select
                    className="w-40 rounded-lg border-gray-300 bg-gray-100 text-sm focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-900/50 dark:text-white dark:focus:border-primary">
                    <option>All Roles</option>
                    <option>Admin</option>
                    <option>Editor</option>
                    <option>Viewer</option>
                </select>
                <select
                    className="w-40 rounded-lg border-gray-300 bg-gray-100 text-sm focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-900/50 dark:text-white dark:focus:border-primary">
                    <option>All Statuses</option>
                    <option>Active</option>
                    <option>Inactive</option>
                    <option>Locked</option>
                </select>
                <button
                    className="flex h-9 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-gray-200 px-4 text-sm font-medium text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
                    <span className="material-symbols-outlined text-lg">filter_list_off</span>
                    <span className="truncate">Clear Filters</span>
                </button>
            </div>
        </div>
    );
}
