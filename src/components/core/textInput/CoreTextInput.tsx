import CoreIcon from "../icon/CoreIcon";

type CoreTextInputProps = {
    placeholder: string;
    value?: string;
    icon?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CoreTextInput({ placeholder, value, icon, onChange }: CoreTextInputProps) {
    return (
        <div className="transition-color flex
                hover:bg-gray-100 hover:cursor-pointer hover:text-black p-2 border-1 mb-2">
            <input
            className="outline-none"
            placeholder={placeholder} 
            value={value} 
            onChange={onChange}
            type="text"
            />
            {
                icon && (
                    <CoreIcon src={icon} alt="" />
                )
            }
        </div>
    )
}