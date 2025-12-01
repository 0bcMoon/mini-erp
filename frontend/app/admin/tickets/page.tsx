'use client';

import AdminLayout from '@/components/admin/AdminLayout';
import TicketList from '@/components/admin/TicketList';
import TicketDetail from '@/components/admin/TicketDetail';
import { mockTickets } from '@/lib/mockData';
import { useState } from 'react';
import Link from 'next/link';

export default function TicketsPage() {
    const [selectedTicketId, setSelectedTicketId] = useState<string | null>(mockTickets[0]?.id || null);

    const selectedTicket = mockTickets.find((t) => t.id === selectedTicketId);

    return (
        <AdminLayout>
            {/* Breadcrumbs */}
            <div className="flex flex-wrap items-center gap-2">
                <Link href="/admin" className="text-sm font-medium text-gray-500 hover:text-primary dark:text-[#92adc9] dark:hover:text-white">Admin</Link>
                <span className="text-sm font-medium text-gray-400 dark:text-[#92adc9]">/</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Open Tickets</span>
            </div>

            {/* Page Heading */}
            <div className="mt-4 mb-6">
                <div className="flex flex-col gap-1">
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">Open Tickets Management</p>
                    <p className="text-base text-gray-500 dark:text-[#92adc9]">View, manage, and respond to open support tickets.</p>
                </div>
            </div>

            <div className="flex h-[calc(100vh-200px)] overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-[#111a22]">
                <TicketList
                    tickets={mockTickets}
                    selectedTicketId={selectedTicketId}
                    onSelectTicket={setSelectedTicketId}
                />
                {selectedTicket ? (
                    <TicketDetail ticket={selectedTicket} />
                ) : (
                    <div className="flex flex-1 items-center justify-center bg-background-light dark:bg-background-dark">
                        <p className="text-gray-500 dark:text-gray-400">Select a ticket to view details</p>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
