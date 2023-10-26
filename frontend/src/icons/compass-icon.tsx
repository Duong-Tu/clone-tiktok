export const CompassIcon = ({ width, height, isActive, color }: IconProperties) => {
    return isActive ? (
        <svg
            fill="rgba(254, 44, 85, 1)"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24 40.5a16.5 16.5 0 1 0 0-33 16.5 16.5 0 0 0 0 33Zm4.43-14.54c-.12.6-.49 1.12-1.01 1.44l-8.88 5.37a.65.65 0 0 1-.98-.69l2.01-10.18c.12-.6.49-1.12 1.01-1.44l8.88-5.37a.65.65 0 0 1 .98.69l-2.01 10.18Z"
                fill={color}
            ></path>
            <path d="m21.92 26.89 3.4-2.05.76-3.9-3.4 2.06-.76 3.89Z" fill={color}></path>
        </svg>
    ) : (
        <svg
            fill="rgba(22, 24, 35, 1)"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 37.4a13.4 13.4 0 1 0 0-26.8 13.4 13.4 0 0 0 0 26.8ZM40.5 24a16.5 16.5 0 1 1-33 0 16.5 16.5 0 0 1 33 0Z"
                fill={color}
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.13 27.18a2 2 0 0 0 .93-1.32l1.84-9.33a.6.6 0 0 0-.9-.63l-8.14 4.92a2 2 0 0 0-.92 1.32l-1.84 9.33c-.1.52.45.9.9.63l8.13-4.92Zm-5.04-.45 3.11-1.89.7-3.57-3.1 1.89-.7 3.57Z"
                fill={color}
            ></path>
        </svg>
    );
};
