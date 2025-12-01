import { Ticket } from '@/lib/mockData';

interface TicketListProps {
    tickets: Ticket[];
    selectedTicketId: string | null;
    onSelectTicket: (id: string) => void;
}

export default function TicketList({ tickets, selectedTicketId, onSelectTicket }: TicketListProps) {
    return (
        <div className="flex w-[400px] flex-shrink-0 flex-col border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-[#111a22]">
            <div className="border-b border-gray-200 p-4 dark:border-gray-800">
                <div className="relative w-full">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                    <input
                        className="w-full rounded-lg border-gray-300 bg-gray-100 py-2 pl-10 pr-4 text-sm focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-900/50 dark:text-white"
                        placeholder="Search by ID, subject..."
                        type="text"
                    />
                </div>
            </div>
            <div className="flex-1 overflow-y-auto">
                <nav className="flex flex-col">
                    {tickets.map((ticket) => (
                        <button
                            key={ticket.id}
                            onClick={() => onSelectTicket(ticket.id)}
                            className={`border-l-4 p-4 text-left transition-colors ${selectedTicketId === ticket.id
                                ? 'border-primary bg-primary/10 dark:bg-primary/20'
                                : 'border-transparent hover:bg-gray-50 dark:hover:bg-white/5'
                                }`}
                        >
                            <div className="flex items-start justify-between">
                                <p className="text-xs font-semibold text-gray-900 dark:text-white">
                                    #{ticket.id} - {ticket.subject}
                                </p>
                                <span
                                    className={`inline-flex items-center rounded-full px-2 text-xs font-medium ${ticket.priority === 'High'
                                        ? 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300'
                                        : ticket.priority === 'Medium'
                                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300'
                                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300'
                                        }`}
                                >
                                    {ticket.priority}
                                </span>
                            </div>
                            <div className="mt-2 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                                <p>{ticket.requester}</p>
                                <p>{ticket.date}</p>
                            </div>
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
}
