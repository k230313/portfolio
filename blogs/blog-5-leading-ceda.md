---
title: "Leading My Capstone Team: What I Learned Managing CEDA's Development"
date: 2026-06-02
readTime: "4 min read"
category: "Blog"
---

CEDA started as a capstone requirement — a campus event discovery app, built by a small team, graded at the end of the term. It ended up teaching me more about leading people than about writing code, which wasn't what I expected going in.

I took on the role of leading the team and handling full-stack integration — connecting the React frontend, the Node.js/Express backend, and the MySQL database into something that actually worked as one system, rather than three separate pieces that happened to sit in the same repository. On top of that, I ended up owning the parts nobody else on the team wanted to touch: managing the GitHub repository and branching strategy, setting up the actual production deployment, buying and configuring the domain, wiring up DNS, setting up Nginx and PM2 on the server, and getting HTTPS working properly through Cloudflare Tunnel.

The technical side, honestly, wasn't the hardest part — we had AI tools helping speed up a lot of the actual coding, and I was upfront with the team about using them rather than pretending every line was hand-typed. The harder part was everything around the code: keeping a team of people with different skill levels and different levels of investment moving in the same direction, making integration decisions that other people's work depended on, and being the one accountable when something broke in production rather than just in a local environment.

I learned that leading a small team is less about being the most technically skilled person in the room and more about being the person willing to make a decision when nobody else will, and then actually following through on the unglamorous parts — the deployment, the DNS, the repo hygiene — that don't show up in a demo but that everything else depends on. Nobody looks at CEDA and marvels at the Nginx config, but if I hadn't gotten it right, none of the rest of the project would have been visible to anyone outside our team.

If I did it again, I'd set clearer expectations earlier about who owns what, rather than naturally absorbing the infrastructure work myself because I was comfortable with it and no one else stepped up. It worked out, but it also meant I was busier than I needed to be for stretches of the project. That's probably the most useful lesson from the whole thing: taking ownership is good, but it's worth checking whether you're taking ownership because it's genuinely yours to own, or just because it's easier than asking someone else to step up.
