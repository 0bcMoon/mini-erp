export default function Pagination() {
    return (
        <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-gray-700 dark:text-gray-400">
                Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">150</span> users
            </p>
            <div className="flex items-center gap-2">
                <button className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                    <span className="material-symbols-outlined text-base">chevron_left</span>
                </button>
                <button className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                    <span className="material-symbols-outlined text-base">chevron_right</span>
                </button>
            </div>
        </div>
    );
}
