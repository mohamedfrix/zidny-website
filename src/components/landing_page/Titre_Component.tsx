

function Titre_Component({ title , subtitle }: { title: string , subtitle: string }) {
    return (
        <div className=" pl-4 flex flex-col lg:flex-row  -mb-10 sm:mb-0  items-start justify-start lg:items-center lg:justify-center gap-y-4 gap-x-44 mt-20 ml-4 sm:ml-16 lg:ml-0">
            <p className="text-[#0C224B] font-medium font-outfit text-[40px] md:text-[56px] lg:text-[72px]  leading-none text-center">{title}</p>
             <p className="font-outfit text-[#9FA2A7] text-[18px] md:text-[18px] lg:text-[21px] font-normal   max-w-[90%] md:max-w-[70%] lg:max-w-[55%] text-left">{subtitle}</p>
        </div>
    );
}

export default Titre_Component;