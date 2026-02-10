import { Input } from "@/components/ui/input";

type FormInputProps = {
  placeholder: string;
  type: string;
};

export function FormInput({ placeholder, type }: FormInputProps) {
  return (
    <Input
      type={type}
      className="border my-2 p-5 border-[rgba(101,145,223,.43)] text-[#6591DF] placeholder:text-[rgba(101,145,223,.5)] placeholder:text-sm placeholder:font-light focus:border-[rgba(101,145,223,.43)] rounded-lg"
      placeholder={placeholder}
    />
  );
}
