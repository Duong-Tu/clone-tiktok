import Link from 'next/link';
import { CSSProperties, ReactNode } from 'react';

interface ButtonProps {
    className?: string;
    block?: boolean;
    danger?: boolean;
    disabled?: boolean;
    url?: string;
    htmlType?: 'button' | 'submit' | 'reset';
    loading?: boolean;
    size?: 'small' | 'default' | 'large';
    styles?: CSSProperties;
    type?: 'primary' | 'secondary' | 'default';
    shape?: 'round' | 'square';
    onClick?: () => void;
    children?: ReactNode;
}

const Button = ({
    className,
    block,
    danger,
    disabled,
    url,
    htmlType,
    loading,
    size,
    styles,
    type,
    shape = 'square',
    onClick,
    children,
}: ButtonProps) => {
    const isAnchor = url && url.length > 0;

    let buttonClasses = ['btn', className].filter(Boolean); // remove value invalid
    const buttonStyles = {
        ...styles,
        ...(disabled || loading ? { background: '#d5d5d5', opacity: '0.65' } : {}),
    };

    if (block) buttonClasses.push('btn-block');

    if (danger) buttonClasses.push('btn-danger');

    if (size) buttonClasses.push(`btn-size-${size}`);

    if (type) buttonClasses.push(`btn-type-${type}`);

    if (shape === 'round') buttonClasses.push('btn-round');

    if (disabled || loading) {
        buttonClasses = [...buttonClasses, 'btn-disabled'];
    }

    if (isAnchor) {
        return (
            <Link href={url} className={buttonClasses.join(' ')} style={buttonStyles}>
                {loading ? 'Loading...' : children}
            </Link>
        );
    }

    return (
        <button
            className={buttonClasses.join(' ')}
            type={htmlType || 'button'}
            onClick={onClick}
            style={buttonStyles}
            disabled={disabled || loading}
        >
            {loading ? 'Loading...' : children}
        </button>
    );
};

export default Button;
