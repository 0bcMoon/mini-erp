import Link from 'next/link';

export default function Sidebar() {
    return (
        <aside className="flex w-64 flex-col border-r border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-[#111a22]">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Admin user avatar"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1b8QOWgL9h97DxnaivtBq3Nw4hmXQA1NSlDM-AtZbw-b-xgpIZEDKt2NC61duri3IRDHK6SILebf-aodzDWyNWrw2Q6HOsWGpZPGyF4cvosD_toK5I23Y0fH5_xhfCouXC_O7WtEixko2MRITyGFWE7YX9AhQm1oX_DhL-HsQ9WOw0dIiOYE7ZCy1w6v01ZzhTAGRoPwbd32eQx7N21miakYL2TwvpjfUOEajTeHGKqrmTng1iPqAy8adB3mWO9ULUqKqvXkczQ")' }}>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-sm font-semibold text-gray-900 dark:text-white">Admin Panel</h1>
                        <p className="text-xs text-gray-500 dark:text-[#92adc9]">Super Administrator</p>
                    </div>
                </div>
                <nav className="mt-4 flex flex-col gap-1">
                    <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-primary/20">
                        <span className="material-symbols-outlined text-xl">dashboard</span>
                        <p className="text-sm font-medium">Dashboard</p>
                    </Link>
                    <Link href="/admin/users" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-primary/20">
                        <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>group</span>
                        <p className="text-sm font-medium">User Management</p>
                    </Link>
                    <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-primary/20">
                        <span className="material-symbols-outlined text-xl">settings</span>
                        <p className="text-sm font-medium">Settings</p>
                    </Link>
                    <Link href="/admin/tickets" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-primary/20">
                        <span className="material-symbols-outlined text-xl">confirmation_number</span>
                        <p className="text-sm font-medium">Open Tickets</p>
                    </Link>
                </nav>
            </div>
            <div className="mt-auto">
                <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-primary/20">
                    <span className="material-symbols-outlined text-xl">logout</span>
                    <p className="text-sm font-medium">Logout</p>
                </Link>
            </div>
        </aside>
    );
}
