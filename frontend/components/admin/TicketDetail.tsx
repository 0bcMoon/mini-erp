'use client';

import { Ticket, Comment } from '@/lib/mockData';
import { useState, useRef } from 'react';

interface TicketDetailProps {
    ticket: Ticket;
}

export default function TicketDetail({ ticket }: TicketDetailProps) {
    const [comments, setComments] = useState<Comment[]>(ticket.comments);
    const [newComment, setNewComment] = useState('');
    const [documents, setDocuments] = useState<string[]>(ticket.documents);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleSendComment = () => {
        if (!newComment.trim()) return;

        const comment: Comment = {
            id: Math.random().toString(36).substr(2, 9),
            author: 'Admin',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1b8QOWgL9h97DxnaivtBq3Nw4hmXQA1NSlDM-AtZbw-b-xgpIZEDKt2NC61duri3IRDHK6SILebf-aodzDWyNWrw2Q6HOsWGpZPGyF4cvosD_toK5I23Y0fH5_xhfCouXC_O7WtEixko2MRITyGFWE7YX9AhQm1oX_DhL-HsQ9WOw0dIiOYE7ZCy1w6v01ZzhTAGRoPwbd32eQx7N21miakYL2TwvpjfUOEajTeHGKqrmTng1iPqAy8adB3mWO9ULUqKqvXkczQ',
            date: 'Just now',
            text: newComment,
        };

        setComments([...comments, comment]);
        setNewComment('');
    };

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setDocuments([...documents, file.name]);
            // In a real app, you would upload the file to a server here
            alert(`File "${file.name}" uploaded successfully (Mock)`);
        }
    };

    return (
        <div className="flex flex-1 flex-col bg-background-light dark:bg-background-dark">
            <div className="flex-1 overflow-y-auto p-6">
                <div className="mx-auto max-w-4xl">
                    <div className="rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-[#111a22]">
                        <div className="border-b border-gray-200 p-4 dark:border-gray-800">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Ticket Details</h3>
                                <button className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/90">
                                    <span className="material-symbols-outlined text-lg">check_circle</span>
                                    <span>Close Ticket</span>
                                </button>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{ticket.subject}</h2>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Ticket #{ticket.id}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${ticket.priority === 'High'
                                        ? 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300'
                                        : ticket.priority === 'Medium'
                                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300'
                                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300'
                                        }`}>
                                        {ticket.priority} Priority
                                    </span>
                                    <button className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center gap-3">
                                <div
                                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                                    style={{ backgroundImage: `url("${ticket.requesterAvatar}")` }}
                                ></div>
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">{ticket.requester}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{ticket.requesterEmail}</p>
                                </div>
                            </div>
                            <div className="mt-6 space-y-2 text-xs text-gray-600 dark:text-gray-300 whitespace-pre-line">
                                <p>{ticket.description}</p>
                            </div>
                        </div>
                        <div className="border-t border-gray-200 p-6 dark:border-gray-800">
                            <h4 className="text-base font-semibold text-gray-900 dark:text-white">Comments ({comments.length})</h4>
                            <div className="mt-4 space-y-4">
                                {comments.map((comment) => (
                                    <div key={comment.id} className="flex gap-4">
                                        <div
                                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 flex-shrink-0"
                                            style={{ backgroundImage: `url("${comment.avatar}")` }}
                                        ></div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <p className="font-semibold text-gray-900 dark:text-white">{comment.author}</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">{comment.date}</p>
                                            </div>
                                            <div className="mt-2 rounded-lg bg-gray-100 p-3 text-xs text-gray-700 dark:bg-gray-900/50 dark:text-gray-300">
                                                <p>{comment.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="border-t border-gray-200 p-6 dark:border-gray-800">
                            <h4 className="text-base font-semibold text-gray-900 dark:text-white">Uploaded Documents ({documents.length})</h4>
                            {documents.length === 0 ? (
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">No documents have been uploaded for this ticket.</p>
                            ) : (
                                <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300">
                                    {documents.map((doc, index) => (
                                        <li key={index}>{doc}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-[#111a22]">
                <div className="mx-auto max-w-4xl">
                    <div className="relative">
                        <textarea
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            className="w-full resize-none rounded-lg border-gray-300 bg-gray-100 p-3 pr-28 text-sm focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-900/50 dark:text-white"
                            placeholder="Type your comment here..."
                            rows={3}
                        />
                        <div className="absolute bottom-2 right-2 flex items-center gap-2">
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                onChange={handleFileUpload}
                            />
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                <span className="material-symbols-outlined text-xl">attachment</span>
                            </button>
                            <button
                                onClick={handleSendComment}
                                className="flex h-9 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-4 text-sm font-semibold text-white shadow-sm hover:bg-primary/90"
                            >
                                <span className="truncate">Send</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
