import React, { ChangeEvent, KeyboardEvent, ReactNode } from 'react';

type InputProps = {
    addonAfter?: ReactNode;
    addonBefore?: ReactNode;
    allowClear?: boolean;
    bordered?: boolean;
    className?: string;
    count?: number;
    defaultValue?: string;
    disabled?: boolean;
    id?: string;
    maxLength?: number;
    prefix?: ReactNode;
    showCount?: boolean;
    status?: 'success' | 'warning' | 'error' | 'validating';
    size?: 'small' | 'middle' | 'large';
    suffix?: ReactNode;
    type?: 'text' | 'password' | 'email' | 'number';
    value?: string;
    placeholder?: string;
    error?: string;
    onChange?: (value: string) => void;
    onPressEnter?: () => void;
};

const Input = ({
    addonAfter,
    addonBefore,
    allowClear,
    bordered = true,
    className,
    count,
    defaultValue,
    disabled,
    id,
    maxLength,
    prefix,
    showCount,
    status,
    suffix,
    type = 'text',
    value,
    placeholder,
    error,
    onChange,
    onPressEnter,
}: InputProps) => {
    const inputClasses = ['input'];
    if (bordered) inputClasses.push('bordered');
    if (status) inputClasses.push(`input-${status}`);
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && onPressEnter) {
            onPressEnter();
        }
    };

    const handleClear = () => {
        if (allowClear && onChange) {
            onChange('');
        }
    };
    return (
        <div className={className}>
            {addonBefore && <span>{addonBefore}</span>}
            <input
                type={type}
                defaultValue={defaultValue}
                value={value}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                disabled={disabled}
                maxLength={maxLength}
                id={id}
                className={inputClasses.join(' ')}
                placeholder={placeholder}
            />
            {allowClear && value && <button onClick={handleClear}>Clear</button>}
            {prefix && <span>{prefix}</span>}
            {suffix && <span>{suffix}</span>}
            {addonAfter && <span>{addonAfter}</span>}
            {showCount && count !== undefined && (
                <span>{value ? `${value.length}/${count}` : `0/${count}`}</span>
            )}
            {error && <div className="input-error">{error}</div>}
        </div>
    );
};

export default Input;
