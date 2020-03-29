import { useMediaQuery } from 'react-responsive';


export const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    console.log("IS DESKTOP === ", isDesktop);
    return isDesktop ? children : null;
};

export const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    console.log("IS TABLET === ", isTablet);
    return isTablet ? children : null;
};

export const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 991 });
    console.log("IS MOBILE === ", isMobile);
    return isMobile ? children : null;
};

//Not mobile (desktop or laptop or tablet)
export const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    return isNotMobile ? children : null;
};
