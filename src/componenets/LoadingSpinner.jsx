import React from 'react'
import { useSelector } from 'react-redux'


export default function LoadingSpinner() {
    const isLoading = useSelector((state) => state.loading.loading);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="spinner"></div>
        </div>
    );
}


