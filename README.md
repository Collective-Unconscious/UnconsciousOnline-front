# Unconscious Online Frontend

### Welcome, contributor.

This is the frontend for [the Unconscious Online website](https://unconscious.online/). This file will present you the contribution process as well as how to execute this project locally, and general information about the stack.

## How to contribute to this project

Everyone can contribute to this project. You can **create an issue** if you want to report a bug or suggest a feature.

If you want to contributer directly to the code, please create a branch from the `dev` branch and make a pull request. A maintainer will review it.

## Git workflow

The **`master`** is the default branch, where production versions will be. Tagged push to this branch will deploy to production and update the website. Only maintainers can push to the `master` branch.

The **`dev`** branch is where contributors will make pull request to. Tagged pushes to this branch will deploy to the test domain.

**Please DO NOT attempt to commit directly on `master` or `dev`.**

Before pushing, remember to format your code with

```bash
pnpm format
```

## Running and testing

1. **Clone the repository**

```bash
git clone https://github.com/Collective-Unconscious/UnconsciousOnline-front.git
cd UnconsciousOnline-front
```

2. **Install the dependencies**

We use **pnpm** as our package manager. install the dependencies by running:

```bash
pnpm install
```

3. **Configure environment variables**

Copy the `.env.example` file to `.env` and fill the variables:

```bash
cp .env.example .env
```

You will need a **Discord client ID and secret** for the discord OAuth to work.

4. **Run the development server**

To start the project locally, run:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The **Unconscious Online backend** needs to be running for the frontend to work. More information on running it [here](https://github.com/Collective-Unconscious/UnconsciousOnline-back/blob/master/README.md).

5. **Code quality and linting**

To check for linting issues:

```bash
pnpm lint
```

To automatically format the code using **Prettier**:

```bash
pnpm format
```

## General information about the stack

This project is built using:

- **Next.js 16 (App Router)** - React framework for frontend
- **NextAuth.js v5** - Authentication provider
- **Tailwind CSS v4** - Styling framework
- **next-intl** - For internationalization and multi-language support.
- **Shadcn UI & Base UI** - Components library and styles

