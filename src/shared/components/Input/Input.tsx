
interface InputProps {
    value: string,
    // eslint-disable-next-line no-unused-vars
    onChange(e: any): void,
    placeholder: string,
    type: string
}

export const Input = ({ value, onChange, placeholder, type = "text" }: InputProps) => {
    return (
        <div className="flex items-stretch bg-white border border-[#D7D1CA] text-[18px] relative
                    hover:bg-gray-100 focus-within:ring-3 focus-within:ring-[#FEE2AB]">
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="bg-transparent border-none outline-none p-3 w-full text-[18px] leading-[120%]"
            />
        </div>
    );
}
