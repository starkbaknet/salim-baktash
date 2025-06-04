"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Spinner } from "../ui/spinner";
import SectionHeading from "@/components/ui/section-heading";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-internal-api-secret": process.env.NEXT_PUBLIC_CONTACT_API_SECRET!,
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="container mx-auto py-24">
      <SectionHeading title="Get In Touch" />
      <div className="max-w-md mx-auto">
        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full p-2 rounded-md border border-border bg-background"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-2 rounded-md border border-border bg-background"
                  placeholder="your.email@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-2 rounded-md border border-border bg-background"
                  placeholder="Your message..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full flex items-center justify-center gap-2"
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                <>
                  <Spinner />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
            {status === "error" && (
              <p className="text-red-600 text-sm mt-2">Something went wrong.</p>
            )}
          </form>
        </Card>
      </div>
    </section>
  );
}
