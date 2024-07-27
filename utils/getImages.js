export const getImage = async (imageName) => {
    switch (imageName) {
        case 'SectionImage2':
            return (await import('../assets/SectionImage2.png')).default;
        default:
            return null;
    }
};
