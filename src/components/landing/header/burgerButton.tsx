'use client'

const BurgurButton = () => {

    let openHiddenMenuHandler = () => {

        const hiddenMenu = document.getElementById("hiddenMenu"),
        overlay = document.getElementById("overlay");

        hiddenMenu?.classList.replace('hidden' , 'flex')
        overlay?.classList.replace('hidden' , 'flex')
    }
   

    return (
        <button id='openButten' onClick={openHiddenMenuHandler}  className='h-fit flex lg:hidden' >
        <i className='text-4xl' >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </i>
        </button>
    )
}

export default BurgurButton;