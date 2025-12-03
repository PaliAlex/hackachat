import SelinaLogo from "../../shared/logo/SelinaLogo";

export const Header = () =>  {
    return (
        <div className='flex-none border-b border-neutral-80 py-4'>
            <div className='flex items-center justify-center lg:mx-28 lg:justify-between'>
                <SelinaLogo/>
                <div className='hidden lg:flex lg:items-center lg:gap-8'>
                    <p className='label-regular ml-[-10px] w-[140px] text-center lg:w-auto lg:flex-1'>
                        Chat
                    </p>
                </div>
            </div>
        </div>
    );
}