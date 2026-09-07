"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type FormValues = {
  fullName: string;
  phone: string;
  email: string;
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  accidentDate: string;
  accidentDescription: string;
  atFaultInsuranceCompany: string;
  atFaultClaimNumber: string;
  yourCarrier: string;
  yourClaimNumber: string;
  vehicleRepaired: string;
  vehicleInPossession: string;
  totalLoss: string;
  settlementOfferReceived: string;
  settlementAccepted: string;
  additionalComments: string;
  accuracyConfirmed: boolean;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+()\-.\s\d]{7,20}$/;

const initialValues: FormValues = {
  fullName: "",
  phone: "",
  email: "",
  vehicleYear: "",
  vehicleMake: "",
  vehicleModel: "",
  accidentDate: "",
  accidentDescription: "",
  atFaultInsuranceCompany: "",
  atFaultClaimNumber: "",
  yourCarrier: "",
  yourClaimNumber: "",
  vehicleRepaired: "",
  vehicleInPossession: "",
  totalLoss: "",
  settlementOfferReceived: "",
  settlementAccepted: "",
  additionalComments: "",
  accuracyConfirmed: false,
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  } else if (values.fullName.trim().length < 2) {
    errors.fullName = "Name must be at least 2 characters.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!PHONE_REGEX.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.vehicleYear.trim()) {
    errors.vehicleYear = "Please enter the vehicle year.";
  }
  if (!values.vehicleMake.trim()) {
    errors.vehicleMake = "Please enter the vehicle make.";
  }
  if (!values.vehicleModel.trim()) {
    errors.vehicleModel = "Please enter the vehicle model.";
  }

  if (!values.accidentDate.trim()) {
    errors.accidentDate = "Please enter the accident date.";
  }

  if (!values.accidentDescription.trim()) {
    errors.accidentDescription = "Please describe the accident.";
  } else if (values.accidentDescription.trim().length < 10) {
    errors.accidentDescription = "Please provide at least 10 characters.";
  }

  if (!values.accuracyConfirmed) {
    errors.accuracyConfirmed = "Please confirm the information is accurate.";
  }

  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: checked }));
    if (errors[name as keyof FormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        setForm(initialValues);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const field = (
    id: keyof FormValues,
    label: string,
    opts: { type?: string; required?: boolean; placeholder?: string } = {}
  ) => (
    <div className="space-y-1.5">
      <Label htmlFor={id}>
        {label}
        {opts.required !== false && <span className="text-destructive"> *</span>}
      </Label>
      <Input
        id={id}
        name={id}
        type={opts.type ?? "text"}
        placeholder={opts.placeholder}
        value={form[id] as string}
        onChange={handleChange}
        aria-invalid={!!errors[id]}
        aria-describedby={errors[id] ? `${id}-error` : undefined}
      />
      {errors[id] && (
        <p id={`${id}-error`} className="text-sm text-destructive">
          {errors[id]}
        </p>
      )}
    </div>
  );

  const select = (
    id: keyof FormValues,
    label: string,
    options: string[]
  ) => (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      <select
        id={id}
        name={id}
        value={form[id] as string}
        onChange={handleChange}
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <option value="">Select…</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-foreground">
          Your Information
        </legend>
        {field("fullName", "Full Name")}
        {field("phone", "Phone Number", { type: "tel" })}
        {field("email", "Email Address", { type: "email" })}
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-foreground">
          Vehicle Information
        </legend>
        <div className="grid gap-4 sm:grid-cols-3">
          {field("vehicleYear", "Year")}
          {field("vehicleMake", "Make")}
          {field("vehicleModel", "Model")}
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-foreground">
          Accident Information
        </legend>
        {field("accidentDate", "Date of Accident", { type: "date" })}
        <div className="space-y-1.5">
          <Label htmlFor="accidentDescription">
            Accident Description <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="accidentDescription"
            name="accidentDescription"
            className="h-28"
            value={form.accidentDescription}
            onChange={handleChange}
            aria-invalid={!!errors.accidentDescription}
            aria-describedby={errors.accidentDescription ? "accidentDescription-error" : undefined}
          />
          {errors.accidentDescription && (
            <p id="accidentDescription-error" className="text-sm text-destructive">
              {errors.accidentDescription}
            </p>
          )}
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-foreground">
          Insurance Information
        </legend>
        {field("atFaultInsuranceCompany", "At-Fault Insurance Company")}
        {field("atFaultClaimNumber", "At-Fault Claim Number")}
        {field("yourCarrier", "Your Comprehensive/Collision Carrier")}
        {field("yourClaimNumber", "Your Claim Number")}
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-foreground">
          Vehicle Status
        </legend>
        {select("vehicleRepaired", "Has the vehicle been repaired?", ["Yes", "No"])}
        {select("vehicleInPossession", "Is the vehicle still in your possession?", ["Yes", "No"])}
        {select("totalLoss", "Was the vehicle declared a total loss?", ["Yes", "No"])}
        {select("settlementOfferReceived", "Have you received a settlement offer?", ["Yes", "No"])}
        {select("settlementAccepted", "Have you accepted a settlement?", ["Yes", "No"])}
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-foreground">
          Additional Information
        </legend>
        <div className="space-y-1.5">
          <Label htmlFor="additionalComments">Additional Comments</Label>
          <Textarea
            id="additionalComments"
            name="additionalComments"
            className="h-24"
            value={form.additionalComments}
            onChange={handleChange}
          />
        </div>
      </fieldset>

      <div className="space-y-1.5">
        <label className="flex items-start gap-2 text-sm text-muted-foreground">
          <input
            type="checkbox"
            name="accuracyConfirmed"
            checked={form.accuracyConfirmed}
            onChange={handleCheckbox}
            className="mt-0.5"
          />
          <span>
            I confirm that the information provided is accurate to the best of
            my knowledge. <span className="text-destructive">*</span>
          </span>
        </label>
        {errors.accuracyConfirmed && (
          <p className="text-sm text-destructive">{errors.accuracyConfirmed}</p>
        )}
      </div>

      <Button type="submit" disabled={status === "sending"} className="w-full">
        {status === "sending" ? "Submitting..." : "Submit Free Claim Review"}
      </Button>

      {status === "sent" && (
        <p role="status" className="text-sm text-green-600">
          Thank you! We&apos;ll review your information and contact you soon.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm text-destructive">
          Oops, something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
