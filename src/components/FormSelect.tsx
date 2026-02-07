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
        <SelectGroup>
          <SelectLabel>Purpose of Inquiry</SelectLabel>
          <SelectItem value="general-inquiry">General Inquiry</SelectItem>
          <SelectItem value="appointment-request">Appointment Request</SelectItem>
          <SelectItem value="billing-questions">
            Billing or Insurance Questions
          </SelectItem>
          <SelectItem value="treatment-consultation">Treatment Consultation</SelectItem>
          <SelectItem value="feedback">Feedback or Suggestions</SelectItem>
          <SelectItem value="partnership">Partnership / Collaboration</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
