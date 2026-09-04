"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+()\-.\s\d]{7,20}$/;

const initialValues: FormValues = { name: "", email: "", phone: "", message: "" };

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  } else if (values.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.phone.trim() && !PHONE_REGEX.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.message.trim()) {
    errors.message = "Please tell us a little about your accident.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  } else if (values.message.trim().length > 2000) {
    errors.message = "Message must be 2000 characters or fewer.";
  }

  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear the field error as the user types.
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

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="name">Your Name</Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-sm text-destructive">
            {errors.name}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-destructive">
            {errors.email}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="phone">Phone (optional)</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={handleChange}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="text-sm text-destructive">
            {errors.phone}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Tell us about your accident</Label>
        <Textarea
          id="message"
          name="message"
          className="h-32"
          value={form.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" disabled={status === "sending"} className="w-full">
        {status === "sending" ? "Sending..." : "Submit"}
      </Button>

      {status === "sent" && (
        <p role="status" className="text-sm text-green-600">
          Thank you! We&apos;ll contact you soon.
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
