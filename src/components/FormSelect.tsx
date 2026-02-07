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
      <SelectTrigger className="border my-2 border-[rgba(101,145,223,.43)] text-[#6591DF]  focus:border-[rgba(101,145,223,.43)] rounded-lg">
        <SelectValue
          className="text-[#6591DF] placeholder:text-[rgba(101,145,223,.78)] placeholder:text-sm "
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
