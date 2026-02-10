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
      <SelectTrigger className="border my-2 border-[rgba(101,145,223,.43)] text-[rgba(101,145,223,1)] focus:border-[rgba(101,145,223,.43)] rounded-lg font-light">
        <SelectValue
          className="text-red-400"
          placeholder="Purpose of Inquiry"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="text-[rgba(101,145,223,1)]">
          <SelectLabel>Purpose of Inquiry</SelectLabel>
          <SelectItem
            className="hover:bg-[#6591df] hover:text-white"
            value="general-inquiry"
          >
            General Inquiry
          </SelectItem>
          <SelectItem
            className="hover:bg-[#6591df] hover:text-white"
            value="appointment-request"
          >
            Appointment Request
          </SelectItem>
          <SelectItem
            className="hover:bg-[#6591df] hover:text-white"
            value="billing-questions"
          >
            Billing or Insurance Questions
          </SelectItem>
          <SelectItem
            className="hover:bg-[#6591df] hover:text-white"
            value="treatment-consultation"
          >
            Treatment Consultation
          </SelectItem>
          <SelectItem
            className="hover:bg-[#6591df] hover:text-white"
            value="feedback"
          >
            Feedback or Suggestions
          </SelectItem>
          <SelectItem
            className="hover:bg-[#6591df] hover:text-white"
            value="partnership"
          >
            Partnership / Collaboration
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
