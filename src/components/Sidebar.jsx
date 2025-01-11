
function Sidebar() {
    return <div className='flex'>
        <div className='bg-green-500 hidden md:block w-96 h-screen dark:bg-red'>
            Sidebar
        </div>
        <div className='w-full h-screen'>
            Content
        </div>
    </div>
}

export default Sidebar;