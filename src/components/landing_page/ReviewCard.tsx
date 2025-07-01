
export interface ReviewCardProps {
    image?: string;
    username: string;
    role: string;
    content: string;
    style?: string;
}

export default function ReviewCard({ username, role, content, style}: ReviewCardProps) {

    const review_clipped = content.slice(0, 300) + "...";

    return (
        <>
            <div className={`bg-background min-h-[200px] border-1 border-neutral-gray rounded-xl px-6 py-6 flex flex-col gap-y-2 ${style}`}>
                <div className={`w-full flex gap-x-4 items-center`}>
                    <div className={`w-[40px] h-[40px] rounded-full bg-gray-300`}></div>
                    <div className={`flex flex-col`}>
                        <p className={`text-primary font-medium text-[14px]`}>{username}</p>
                        <p className={`text-neutral-gray-2 text-[14px] font-medium`}>{role}</p>
                    </div>
                </div>
                <p className={`text-neutral-gray-2 text-[14px]`}>{review_clipped}</p>
            </div>
        </>
    );
}