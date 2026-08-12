"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      setStatus(json.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="name">Your Name</Label>
        <Input id="name" name="name" required value={form.name} onChange={handleChange} />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="phone">Phone (optional)</Label>
        <Input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Tell us about your accident</Label>
        <Textarea id="message" name="message" required className="h-32" value={form.message} onChange={handleChange} />
      </div>

      <Button type="submit" disabled={status === "sending"} className="w-full">
        {status === "sending" ? "Sending..." : "Submit"}
      </Button>

      {status === "sent" && (
        <p className="text-sm text-green-600">Thank you! We&apos;ll contact you soon.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-destructive">Oops, something went wrong. Please try again.</p>
      )}
    </form>
  );
}
