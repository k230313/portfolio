---
title: "Why I Built My Own Home Lab Instead of Just Studying for Certs"
date: 2026-01-15
readTime: "4 min read"
category: "Blog"
---

When I started studying for my CCNA, I did what most people do — videos, practice questions, flashcards. It worked, to a point. I could answer questions correctly, but I noticed I wasn't always sure *why* the answer was correct. I understood the theory, but I hadn't actually touched the thing the theory was describing.

That bothered me enough to do something about it.

I ended up buying a small mini PC — nothing fancy, just enough to run Proxmox — and decided I'd build a proper home lab instead of just reading about one. Part of the motivation was practical: I wanted to stop paying for cloud services and hosting when I could run the same things myself for a fraction of the cost. But honestly, the bigger reason was that I wanted to actually *feel* what it's like to deploy something real — not a sandbox exercise with the answer already provided, but something with a genuine risk of me getting it wrong.

The first few weeks were humbling. Things that seemed simple in a course — setting up a virtual machine, configuring networking between VMs, exposing a service securely — took much longer than expected once I was doing it for real, with no one checking my work as I went. I broke my own network more than once. I locked myself out of a VM because I misconfigured SSH before I properly understood Tailscale. None of that happens when you're just answering multiple-choice questions.

But that's exactly why it was worth doing. Every mistake taught me something a course wouldn't have. I learned Tailscale properly because I needed remote access to my own server without exposing it directly to the internet — not because a slide told me to. I learned Windows Server and Active Directory hands-on, promoting my own domain controller and managing users through ADUC, because I wanted proof — for myself, more than anyone else — that I could actually do the things I was studying, not just describe them.

I'm still building on it. The lab keeps growing as I learn more, and every new thing I add to it forces me to understand something I would have otherwise just memorized. That's the real value of building it myself: it turned "I studied this" into "I did this," which is a very different feeling — and, I think, a very different kind of knowledge.
