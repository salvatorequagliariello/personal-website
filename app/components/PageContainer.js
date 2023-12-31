
const PageContainer = ({ children }) => {
    return (
        <div className="w-3/4 lg:w-3/5 xl:w-2/4 md:pt-24 mx-auto max-w-[1920px] xl:max-h-[1080px]">
            {children}
        </div>
    )
}

export default PageContainer;