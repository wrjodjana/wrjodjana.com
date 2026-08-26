---
title: does the npm registry stop an agent from installing the wrong package?
date: 2026-08-25
tag: aeo
---

# Hypothesis

While researching about how agents trace to find packages to install, I found another issue which was that agents would install packages from memory. However, this could be wrong in three different ways:

- It does not exist on `npm`
- It exists but the package is deprecated
- It is the old name of a package that moved

In a general sense, agents are only able to pick from what they can see. Hence, my hypothesis is with purely just memory, **how often does the agent write a wrong name?** Then opening our registry shelf, will that number go down or up?

# Setup

**Independent Variable:** Agent's network egress, which is either just the model API or both the model API and `registry.npmjs.org`.

**Dependent Variable:** Wrong-name rate, which is out of all trials, how many times the first package name the agent tried to install was wrong (e.g. `npm install` in Bash call or package added to `package.json`).

**Constant Variable(s):**

- AI model, `claude-opus-5`, since the model is the memory under test
- Docker image pinned by digest, with `node` v22.23.2 and `npm` 10.9.8
- The agent, Claude Code 2.1.241, with auto-updates, telemetry and error reporting turned off
- `WebSearch` and `WebFetch` turned off in every arm
- A new container for each run, hence no npm cache, no `node_modules` and no session history
- Same starting app with no `CLAUDE.md` or `AGENTS.md` files
- `TZ=UTC`, and npm fund, audit and update-notifier off

These are **EXTREMELY** important, because it ensures that the agents can't look into the registry. A fresh container means that nothing from an earlier install can leak "knowledge" into the next one, `WebSearch` and `WebFetch` are two tools Claude Code uses to search and read the web, hence we run it on the model's side rather than the constainer, so firewall would never see them.

Real users do not all type the same prompt or start from the same app, so instead of removing that variation, I decided on balancing it, which means every arm sees the same prompts and the same starting app the same number of times.

# Experiment

**An arm is one version of the experiment**, and the only thing that changes between different arms is the network. We add a firewall rule (`iptables allow-list`) inside the container that lists the hosts the agent has outbound access to and drop everything else.

| Arm      | Things reached                     |
| -------- | ---------------------------------- |
| Memory A | Only model API                     |
| Memory B | Only model API                     |
| Registry | Model API and `registry.npmjs.org` |

Memory A and Memory B are identical on purpose. Two arms with the same setup should give the same answer, so if they disagree, something is leaking; if they agree, I can trust the setup and pool them into a single memory arm.

Every trial starts from the same bare Express app (one dependency, `express`) and gets one prompt, a simple task like "add tests for the server". The prompt bank has 10 of these: 6 are tasks in an area where a package got renamed or deprecated, and 4 are in areas where nothing changed, so the agent isn't always walking into a trap.

Before the agent starts, the runner also tries to reach `registry.npmjs.org` from inside the container. If that request goes through when it shouldn't, the firewall isn't doing its job, so the trial fails and stays out of the results.
