'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
    type?: 'default' | 'danger';
}

export default function Modal({ isOpen, onClose, title, children, footer, type = 'default' }: ModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div
                ref={modalRef}
                className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-[#18232e] p-6 text-left align-middle shadow-xl transition-all"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
            >
                <div className="flex items-center justify-between mb-4">
                    <h3
                        id="modal-title"
                        className={`text-lg font-bold leading-6 ${type === 'danger' ? 'text-red-600' : 'text-gray-900 dark:text-white'
                            }`}
                    >
                        {title}
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
                <div className="mt-2">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        {children}
                    </div>
                </div>
                {footer && (
                    <div className="mt-6 flex justify-end gap-3">
                        {footer}
                    </div>
                )}
            </div>
        </div>,
        document.body
    );
}
