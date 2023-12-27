import React from 'react';

type SpinnerProps = {
    className?: string;
};

export const Spinner = ({ className }: SpinnerProps) => {
    const spinnerClass = `spinner ${className || ''}`;
    return (
        <div className={spinnerClass}>
            <div className="spinner-child"></div>
            <div className="spinner-child"></div>
        </div>
    );
};
