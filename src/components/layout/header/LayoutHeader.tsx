import CoreIcon from "@/components/core/icon/CoreIcon";

type LayoutHeaderProps = {

};

export default function LayoutHeader() {
    return (
        <header className="flex justify-center">
            <div className="flex w-[1080px] justify-between items-center">
                <div>
                    <h1>{'</>'}</h1>
                </div>
                <div className="flex justify-between items-center">
                    <ul className="flex gap-8 items-center mr-8">
                        <li>
                            Blog
                        </li>
                        <li>
                            About me
                        </li>
                        <li className="border-1 p-2 hover:bg-gray-100 hover:cursor-pointer hover:text-black">
                            Contact
                        </li>
                    </ul>
                    <div className="flex gap-4">
                        <CoreIcon src="/translate.svg" alt="" />
                        <CoreIcon src="/sun.svg" alt="" />
                    </div>
                </div>
            </div>
        </header>
    );
}