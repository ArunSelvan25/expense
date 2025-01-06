import React from 'react';

const ExportButton = () => {
    const handleExport = () => {
        window.location.href = 'http://127.0.0.1:8000/api/expenses/export';
    };

    return (
        <button
            onClick={handleExport}
            className="bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition duration-200"
        >
            Export Expenses to CSV
        </button>
    );
};

export default ExportButton;
