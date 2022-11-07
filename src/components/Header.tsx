import React from 'react';

type HeaderProps = {
    title: string
}

function Header({title}: HeaderProps) {
    return (
        <div>
            <header className="bg-white shadow dark:bg-slate-800">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-slate-100">{title}</h1>
                </div>
            </header>
        </div>
    );
}

export default Header;
