import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function FormSelect() {
  return (
    <Select>
      <SelectTrigger className="border my-2 border-[rgba(101,145,223,.43)] text-[rgba(101,145,223,.78)]  focus:border-[rgba(101,145,223,.43)] rounded-lg font-light">
        <SelectValue
          className="text-[#6591DF] placeholder:text-[rgba(101,145,223,.78)] placeholder:text-sm placeholder:font-light "
          placeholder="Select service"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="text-[#6591DF] placeholder:text-[rgba(101,145,223,.78)]">
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
