# Ronit Dholwani Portfolio

Modern personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, shadcn-style UI primitives, Lucide Icons, React Hook Form, Zod, and Supabase-ready contact storage.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Supabase

Create `.env.local` when you are ready to store contact form submissions:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Suggested `contacts` table columns:

```sql
create table contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamptz default now()
);
```

Add `public/resume.pdf` and replace placeholder social/profile/project/certificate assets when final files are available.
