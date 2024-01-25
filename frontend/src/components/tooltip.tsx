import { ReactElement } from 'react';

type Tooltip = {
    children: ReactElement;
    content: string;
};
const Tooltip = ({ children, content }: Tooltip) => {
    return (
        <div className="tooltip">
            {children}
            <div className="tooltip-content">
                <span>{content}</span>
            </div>
        </div>
    );
};

export default Tooltip;
