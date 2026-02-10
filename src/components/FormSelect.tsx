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
      <SelectTrigger
        className="
          my-2 rounded-lg border
          border-[rgba(101,145,223,.43)]
          focus:border-[rgba(101,145,223,.43)]
          text-[rgba(101,145,223,1)]
          data-[placeholder]:opacity-50 data-[placeholder]:font-light
        "
      >
        <SelectValue placeholder="Purpose of Inquiry" />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup className="text-[rgba(101,145,223,1)]">
          <SelectLabel>Purpose of Inquiry</SelectLabel>

          <SelectItem
            value="general-inquiry"
            className="hover:bg-[#6591df] hover:text-white"
          >
            General Inquiry
          </SelectItem>

          <SelectItem
            value="appointment-request"
            className="hover:bg-[#6591df] hover:text-white"
          >
            Appointment Request
          </SelectItem>

          <SelectItem
            value="billing-questions"
            className="hover:bg-[#6591df] hover:text-white"
          >
            Billing or Insurance Questions
          </SelectItem>

          <SelectItem
            value="treatment-consultation"
            className="hover:bg-[#6591df] hover:text-white"
          >
            Treatment Consultation
          </SelectItem>

          <SelectItem
            value="feedback"
            className="hover:bg-[#6591df] hover:text-white"
          >
            Feedback or Suggestions
          </SelectItem>

          <SelectItem
            value="partnership"
            className="hover:bg-[#6591df] hover:text-white"
          >
            Partnership / Collaboration
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
