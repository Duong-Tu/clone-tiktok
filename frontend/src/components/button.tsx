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

    const buttonClasses = ['btn'];
    const buttonStyles = styles || {};

    if (className) {
        buttonClasses.push(className);
    }

    if (block) {
        buttonClasses.push('btn-block');
    }

    if (danger) {
        buttonClasses.push('btn-danger');
    }

    if (disabled || loading) {
        buttonClasses.push('btn-disabled');
        buttonStyles.background = '#d5d5d5';
        buttonStyles.opacity = '0.65';
    }

    if (size) {
        buttonClasses.push(`btn-size-${size}`);
    }

    if (type) {
        buttonClasses.push(`btn-type-${type}`);
    }

    if (shape === 'round') {
        buttonClasses.push('btn-round');
    } else {
        buttonClasses.push('btn-square');
    }

    if (isAnchor) {
        return (
            <a href={url} className={buttonClasses.join('')} style={buttonStyles}>
                {loading ? 'Loading...' : children}
            </a>
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
