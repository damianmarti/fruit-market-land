const GasFilledIcon = ({
  className,
  width,
  height,
  fill,
}: {
  className?: string;
  width: string;
  height: string;
  fill: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.084 2.223C11.1296 2.15445 11.1915 2.09823 11.264 2.05932C11.3366 2.02042 11.4177 2.00004 11.5 2H14.5C14.6326 2 14.7598 2.05268 14.8536 2.14645C14.9473 2.24021 15 2.36739 15 2.5V5.5C15.607 5.956 16 6.682 16 7.5V14.5C16 15.163 15.7366 15.7989 15.2678 16.2678C14.7989 16.7366 14.163 17 13.5 17H6.5C5.83696 17 5.20107 16.7366 4.73223 16.2678C4.26339 15.7989 4 15.163 4 14.5V7.5C4 6.83696 4.26339 6.20107 4.73223 5.73223C5.20107 5.26339 5.83696 5 6.5 5H6.915C6.81156 4.70742 6.61992 4.45413 6.36649 4.27503C6.11306 4.09593 5.81033 3.99984 5.5 4H4.5C4.36739 4 4.24021 3.94732 4.14645 3.85355C4.05268 3.75979 4 3.63261 4 3.5C4 3.36739 4.05268 3.24021 4.14645 3.14645C4.24021 3.05268 4.36739 3 4.5 3H5.5C6.07633 2.99988 6.63499 3.19889 7.08145 3.56335C7.52791 3.9278 7.83473 4.43532 7.95 5H9.232L11.084 2.223ZM14 3H11.768L10.434 5H13.5C13.671 5 13.838 5.017 14 5.05V3ZM12.854 8.146C12.8076 8.09944 12.7524 8.06249 12.6916 8.03729C12.6309 8.01208 12.5658 7.99911 12.5 7.99911C12.4342 7.99911 12.3691 8.01208 12.3084 8.03729C12.2476 8.06249 12.1924 8.09944 12.146 8.146L10 10.293L7.854 8.146C7.76011 8.05211 7.63278 7.99937 7.5 7.99937C7.36722 7.99937 7.23989 8.05211 7.146 8.146C7.05211 8.23989 6.99937 8.36722 6.99937 8.5C6.99937 8.63278 7.05211 8.76011 7.146 8.854L9.293 11L7.146 13.146C7.09951 13.1925 7.06264 13.2477 7.03748 13.3084C7.01232 13.3692 6.99937 13.4343 6.99937 13.5C6.99937 13.5657 7.01232 13.6308 7.03748 13.6916C7.06264 13.7523 7.09951 13.8075 7.146 13.854C7.23989 13.9479 7.36722 14.0006 7.5 14.0006C7.56574 14.0006 7.63084 13.9877 7.69158 13.9625C7.75232 13.9374 7.80751 13.9005 7.854 13.854L10 11.707L12.146 13.854C12.2399 13.9479 12.3672 14.0006 12.5 14.0006C12.6328 14.0006 12.7601 13.9479 12.854 13.854C12.9479 13.7601 13.0006 13.6328 13.0006 13.5C13.0006 13.3672 12.9479 13.2399 12.854 13.146L10.707 11L12.854 8.854C12.9006 8.80755 12.9375 8.75238 12.9627 8.69163C12.9879 8.63089 13.0009 8.56577 13.0009 8.5C13.0009 8.43423 12.9879 8.36911 12.9627 8.30837C12.9375 8.24762 12.9006 8.19245 12.854 8.146Z"
        fill={fill}
      />
    </svg>
  );
};

export default GasFilledIcon;