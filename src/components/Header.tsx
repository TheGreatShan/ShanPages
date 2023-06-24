import React from 'react';

type HeaderProps = {
    title: string
}

function Header({title}: HeaderProps) {
    return (
        <div className={"mb-3"}>
            <header className="bg-base-100">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-center text-6xl font-bold text-slate-100">{title}</h1>
                </div>
            </header>
        </div>
    );
}

export default Header;
