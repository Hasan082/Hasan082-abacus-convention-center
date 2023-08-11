const Container = ({ children }) => {
    return (
        <div className="max-w-[1200px] mx-auto px-10 py-5 w-full">
            {children}
        </div>
    );
};

export default Container;