export const DesktopIcon = ({ width, height, fontSize }: IconProperties) => {
    return (
        <svg
            fill="currentColor"
            fontSize={fontSize}
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
        >
            <path
                d="M34.68 6H13.32c-1.05 0-1.96 0-2.71.06-.8.07-1.58.2-2.33.6a6 6 0 0 0-2.63 2.62 6.1 6.1 0 0 0-.59 2.33C5 12.36 5 13.27 5 14.32V36H0v1a3 3 0 0 0 3 3h21v-6H9V14.4c0-1.15 0-1.9.05-2.46.04-.55.12-.75.17-.85a2 2 0 0 1 .87-.87c.1-.05.3-.13.85-.17A34 34 0 0 1 13.4 10h29.24a6 6 0 0 0-2.92-3.35 6.1 6.1 0 0 0-2.33-.59C36.64 6 35.73 6 34.68 6Z"
                fill="#161823"
            ></path>
            <path
                d="M48 18a6 6 0 0 0-6-6h-8a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6V18Zm-16 0c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V18Z"
                fill="#161823"
            ></path>
        </svg>
    );
};
