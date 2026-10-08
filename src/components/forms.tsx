import { CheckCircle2, Loader2, MessageCircle, Upload } from "lucide-react";
import { useState, type FormEvent } from "react";
import { btnStyles } from "@/components/ui-kit";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

/**
 * Company WhatsApp number in international format (digits only, no "+").
 * Provided by MEEC for both quotation enquiries and job applications.
 */
export const WHATSAPP_NUMBER = "923003600203";

const fieldCls =
  "w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";
const labelCls = "mb-2 block text-xs font-bold tracking-wider text-foreground uppercase";

function Field({
  label,
  name,
  type = "text",
  required,
  error,
  placeholder,
  autoComplete,
  min,
  step,
  inputMode,
}: {
  label: string;
  name: string;
  type?: string | undefined;
  required?: boolean | undefined;
  error?: string | undefined;
  placeholder?: string | undefined;
  autoComplete?: string | undefined;
  min?: number | undefined;
  step?: number | "any" | undefined;
  inputMode?: "numeric" | "decimal" | undefined;
}) {
  return (
    <div>
      <label className={labelCls} htmlFor={name}>
        {label} {required && <span className="text-accent-dark">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        min={min}
        step={step}
        inputMode={inputMode}
        aria-invalid={Boolean(error)}
        className={cn(fieldCls, error && "border-destructive")}
      />
      {error && <p className="mt-1.5 text-xs font-semibold text-destructive">{error}</p>}
    </div>
  );
}

function TextAreaField({
  label,
  name,
  rows = 5,
  required,
  error,
  placeholder,
}: {
  label: string;
  name: string;
  rows?: number;
  required?: boolean | undefined;
  error?: string | undefined;
  placeholder?: string | undefined;
}) {
  return (
    <div>
      <label className={labelCls} htmlFor={name}>
        {label} {required && <span className="text-accent-dark">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        className={cn(fieldCls, "resize-y", error && "border-destructive")}
      />
      {error && <p className="mt-1.5 text-xs font-semibold text-destructive">{error}</p>}
    </div>
  );
}

type Errors = Record<string, string>;
type RequiredField = { name: string; label: string; email?: boolean };
/** Ordered map of form field name -> label used in the WhatsApp message. */
type MessageFields = { name: string; label: string }[];

/** Builds the WhatsApp message body, preserving line breaks. */
function buildWhatsAppMessage(heading: string, fields: MessageFields, data: FormData) {
  const lines = [heading, ""];
  for (const f of fields) {
    const raw = data.get(f.name);
    if (typeof raw !== "string") continue;
    const value = raw.trim();
    if (!value) continue;
    lines.push(`${f.label}: ${value}`);
  }
  return lines.join("\n");
}

function openWhatsApp(message: string) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  if (typeof window !== "undefined") window.open(url, "_blank", "noopener,noreferrer");
}

/**
 * Client-side validation, then a WhatsApp hand-off. No backend is involved:
 * the submitted data is formatted into a WhatsApp message and opened in
 * WhatsApp Web / the WhatsApp app.
 */
function useWhatsAppForm({
  heading,
  requiredFields,
  messageFields,
  validate,
}: {
  heading: string;
  requiredFields: RequiredField[];
  messageFields: MessageFields;
  validate?: (data: FormData) => Errors;
}) {
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Errors = {};
    for (const f of requiredFields) {
      const value = String(data.get(f.name) ?? "").trim();
      if (!value) next[f.name] = `${f.label} is required`;
      else if (f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        next[f.name] = "Enter a valid email address";
    }
    if (validate) Object.assign(next, validate(data));
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setState("loading");
    openWhatsApp(buildWhatsAppMessage(heading, messageFields, data));
    window.setTimeout(() => setState("done"), 600);
  };

  return { errors, state, submit };
}

function SuccessCard({
  title,
  text,
  resetLabel,
  onReset,
}: {
  title: string;
  text: string;
  resetLabel: string;
  onReset: () => void;
}) {
  return (
    <div className="rounded-2xl border border-accent/40 bg-accent-light p-10 text-center">
      <CheckCircle2 className="mx-auto size-12 text-accent-dark" />
      <h3 className="mt-5 text-2xl">{title}</h3>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{text}</p>
      <button type="button" onClick={onReset} className={cn(btnStyles.outline, "mt-7")}>
        {resetLabel}
      </button>
    </div>
  );
}

/* ------------------------------- Quote form ------------------------------- */

export function QuoteForm() {
  const { errors, state, submit } = useWhatsAppForm({
    heading: "REQUEST A QUOTE",
    requiredFields: [
      { name: "fullName", label: "Full name" },
      { name: "company", label: "Company name" },
      { name: "email", label: "Email", email: true },
      { name: "phone", label: "Phone" },
      { name: "service", label: "Service required" },
      { name: "description", label: "Project description" },
    ],
    messageFields: [
      { name: "fullName", label: "Name" },
      { name: "company", label: "Company" },
      { name: "email", label: "Email" },
      { name: "phone", label: "Phone" },
      { name: "service", label: "Service Required" },
      { name: "location", label: "Project Location" },
      { name: "description", label: "Project Details" },
    ],
  });
  const [key, setKey] = useState(0);

  if (state === "done") {
    return (
      <SuccessCard
        title="WhatsApp opened"
        text="Your quote request has been prepared as a WhatsApp message. Press send in WhatsApp to deliver it to our team. If WhatsApp did not open, please check your browser's pop-up settings."
        resetLabel="Send another enquiry"
        onReset={() => setKey((k) => k + 1)}
      />
    );
  }

  return (
    <form
      key={key}
      onSubmit={submit}
      noValidate
      className="rounded-2xl border border-border bg-white p-7 shadow-card lg:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full Name"
          name="fullName"
          required
          autoComplete="name"
          error={errors["fullName"]}
        />
        <Field
          label="Company Name"
          name="company"
          required
          autoComplete="organization"
          error={errors["company"]}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
          error={errors["email"]}
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="+92 300 0000000"
          error={errors["phone"]}
        />
        <div>
          <label className={labelCls} htmlFor="service">
            Service Required <span className="text-accent-dark">*</span>
          </label>
          <select
            id="service"
            name="service"
            defaultValue=""
            className={cn(fieldCls, errors["service"] && "border-destructive")}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Multiple / Other">Multiple / Other</option>
          </select>
          {errors["service"] && (
            <p className="mt-1.5 text-xs font-semibold text-destructive">{errors["service"]}</p>
          )}
        </div>
        <Field label="Project Location" name="location" placeholder="City / plant site" />
      </div>

      <div className="mt-5">
        <TextAreaField
          label="Project Description"
          name="description"
          required
          placeholder="Describe the scope, plant type, timeline and any technical requirements."
          error={errors["description"]}
        />
      </div>

      <div className="mt-5">
        <label className={labelCls} htmlFor="attachment">
          Attachment (optional)
        </label>
        <label
          htmlFor="attachment"
          className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-border bg-muted px-4 py-4 text-sm text-muted-foreground transition-colors hover:border-primary"
        >
          <Upload className="size-4" />
          Attach drawings, BOQ or specifications
        </label>
        <input id="attachment" name="attachment" type="file" className="sr-only" />
        <p className="mt-2 text-xs text-muted-foreground">
          Attachments can be shared directly in the WhatsApp chat after sending your details.
        </p>
      </div>

      <button
        type="submit"
        disabled={state === "loading"}
        className={cn(btnStyles.primary, "mt-7 w-full")}
      >
        {state === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Opening WhatsApp…
          </>
        ) : (
          <>
            <MessageCircle className="size-4" /> Send Quote Request on WhatsApp
          </>
        )}
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Required fields are marked with an asterisk. Your details are sent as a WhatsApp message.
      </p>
    </form>
  );
}

/* ------------------------ Vacancy / career application -------------------- */

export function VacancyForm() {
  const { errors, state, submit } = useWhatsAppForm({
    heading: "VACANCY APPLICATION",
    requiredFields: [
      { name: "fullName", label: "Full name" },
      { name: "phone", label: "Phone number" },
      { name: "email", label: "Email address", email: true },
      { name: "position", label: "Position applied for" },
      { name: "qualification", label: "Qualification" },
      { name: "experience", label: "Relevant experience" },
      { name: "expectedSalary", label: "Expected Salary (PKR)" },
      { name: "joiningDays", label: "Joining Days" },
      { name: "relocation", label: "Ready to relocate to site based position?" },
    ],
    messageFields: [
      { name: "fullName", label: "Full Name" },
      { name: "phone", label: "Phone" },
      { name: "email", label: "Email" },
      { name: "position", label: "Position Applied For" },
      { name: "qualification", label: "Qualification" },
      { name: "experience", label: "Experience" },
      { name: "expectedSalary", label: "Expected Salary (PKR)" },
      { name: "joiningDays", label: "Joining Days" },
      { name: "relocation", label: "Ready to relocate to site based position?" },
      { name: "message", label: "Additional Message" },
    ],
    validate: (data) => {
      const next: Errors = {};
      for (const field of [
        { name: "expectedSalary", label: "Expected Salary (PKR)" },
        { name: "joiningDays", label: "Joining Days" },
      ]) {
        const value = String(data.get(field.name) ?? "").trim();
        if (value && (!Number.isFinite(Number(value)) || Number(value) < 0)) {
          next[field.name] = `${field.label} must be a valid non-negative number`;
        }
      }
      const relocation = data.get("relocation");
      if (relocation && relocation !== "YES" && relocation !== "NO") {
        next["relocation"] = "Select YES or NO";
      }
      return next;
    },
  });
  const [key, setKey] = useState(0);

  if (state === "done") {
    return (
      <SuccessCard
        title="WhatsApp opened"
        text="Your application has been prepared as a WhatsApp message. Press send in WhatsApp to deliver it to our HR team, and attach your CV in the same chat. If WhatsApp did not open, please check your browser's pop-up settings."
        resetLabel="Submit another application"
        onReset={() => setKey((k) => k + 1)}
      />
    );
  }

  return (
    <form
      key={key}
      onSubmit={submit}
      noValidate
      className="rounded-2xl border border-border bg-white p-7 shadow-card lg:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full Name"
          name="fullName"
          required
          autoComplete="name"
          error={errors["fullName"]}
        />
        <Field
          label="Phone Number"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="+92 300 0000000"
          error={errors["phone"]}
        />
        <Field
          label="Email Address"
          name="email"
          type="email"
          required
          autoComplete="email"
          error={errors["email"]}
        />
        <Field
          label="Position Applied For"
          name="position"
          required
          placeholder="e.g. Mechanical Supervisor, Welder, Planner"
          error={errors["position"]}
        />
        <Field
          label="Qualification / Education"
          name="qualification"
          required
          placeholder="e.g. DAE Mechanical, B.E. Mechanical"
          error={errors["qualification"]}
        />
        <Field
          label="Relevant Experience"
          name="experience"
          required
          placeholder="e.g. 8 years — plant maintenance & shutdowns"
          error={errors["experience"]}
        />
        <Field
          label="Expected Salary (PKR)"
          name="expectedSalary"
          type="number"
          min={0}
          step="any"
          inputMode="decimal"
          required
          placeholder="Enter your expected salary"
          error={errors["expectedSalary"]}
        />
        <Field
          label="Joining Days"
          name="joiningDays"
          type="number"
          min={0}
          step="any"
          inputMode="decimal"
          required
          placeholder="e.g. 15"
          error={errors["joiningDays"]}
        />
      </div>

      <fieldset
        className="mt-5 min-w-0"
        aria-describedby={errors["relocation"] ? "relocation-error" : undefined}
        aria-invalid={Boolean(errors["relocation"])}
      >
        <legend className={labelCls}>
          Ready to relocate to site based position? <span className="text-accent-dark">*</span>
        </legend>
        <div className="flex flex-wrap gap-4">
          {["YES", "NO"].map((option) => (
            <label
              key={option}
              className="flex min-h-11 cursor-pointer items-center gap-3 text-sm text-foreground"
            >
              <input
                type="radio"
                name="relocation"
                value={option}
                required
                aria-invalid={Boolean(errors["relocation"])}
                className="size-4 accent-primary"
              />
              {option}
            </label>
          ))}
        </div>
        {errors["relocation"] && (
          <p id="relocation-error" className="mt-1.5 text-xs font-semibold text-destructive">
            {errors["relocation"]}
          </p>
        )}
      </fieldset>

      <div className="mt-5">
        <TextAreaField
          label="Additional Message / Cover Note"
          name="message"
          rows={4}
          placeholder="Anything else you would like our HR team to know."
        />
      </div>

      <div className="mt-5">
        <label className={labelCls} htmlFor="cv">
          Upload CV / Resume
        </label>
        <input
          id="cv"
          name="cv"
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          aria-describedby="cv-hint"
          className={cn(
            fieldCls,
            "cursor-pointer py-2.5 file:mr-4 file:cursor-pointer file:rounded-md file:border-0 file:bg-primary-light file:px-4 file:py-2 file:text-xs file:font-bold file:text-primary-dark hover:file:brightness-95",
          )}
        />
        <p id="cv-hint" className="mt-2 text-xs text-muted-foreground">
          Accepted formats: PDF, DOC, DOCX.
        </p>
      </div>

      <button
        type="submit"
        disabled={state === "loading"}
        className={cn(btnStyles.primary, "mt-7 w-full")}
      >
        {state === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Opening WhatsApp…
          </>
        ) : (
          <>
            <MessageCircle className="size-4" /> Submit Application on WhatsApp
          </>
        )}
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Required fields are marked with an asterisk. Your application is sent as a WhatsApp message.
      </p>
    </form>
  );
}

/* ------------------------------ Contact form ------------------------------ */

export function ContactForm() {
  const { errors, state, submit } = useWhatsAppForm({
    heading: "WEBSITE ENQUIRY",
    requiredFields: [
      { name: "fullName", label: "Full name" },
      { name: "email", label: "Email", email: true },
      { name: "message", label: "Message" },
    ],
    messageFields: [
      { name: "fullName", label: "Name" },
      { name: "company", label: "Company" },
      { name: "email", label: "Email" },
      { name: "phone", label: "Phone" },
      { name: "message", label: "Message" },
    ],
  });
  const [key, setKey] = useState(0);

  if (state === "done") {
    return (
      <SuccessCard
        title="WhatsApp opened"
        text="Your message has been prepared as a WhatsApp message. Press send in WhatsApp to deliver it to our team."
        resetLabel="Send another message"
        onReset={() => setKey((k) => k + 1)}
      />
    );
  }

  return (
    <form
      key={key}
      onSubmit={submit}
      noValidate
      className="rounded-2xl border border-border bg-white p-7 shadow-card lg:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full Name"
          name="fullName"
          required
          autoComplete="name"
          error={errors["fullName"]}
        />
        <Field label="Company" name="company" autoComplete="organization" />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
          error={errors["email"]}
        />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="mt-5">
        <TextAreaField
          label="Message"
          name="message"
          required
          placeholder="How can our engineering team help?"
          error={errors["message"]}
        />
      </div>
      <button
        type="submit"
        disabled={state === "loading"}
        className={cn(btnStyles.primary, "mt-7 w-full")}
      >
        {state === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Opening WhatsApp…
          </>
        ) : (
          <>
            <MessageCircle className="size-4" /> Send Message on WhatsApp
          </>
        )}
      </button>
    </form>
  );
}
