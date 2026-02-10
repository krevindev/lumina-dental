import {
  Field,
//   FieldDescription,
//   FieldGroup,
//   FieldLabel,
//   FieldSet,
} from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

export function FormTextArea() {
  return (
    <Field>
      <Textarea
        className="border my-2 border-[rgba(101,145,223,.43)] text-[#6591DF] placeholder:text-[rgba(101,145,223,.5)] focus:border-[rgba(101,145,223,.43)] rounded-xl placeholder:font-light placeholder:text-sm"
        id="feedback"
        placeholder="Your message here..."
        rows={4}
      />
    </Field>
  );
}
