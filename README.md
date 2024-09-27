This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Description

I've used shadcn for the UI, which I consider one of the best UI libraries that is both pretty and easily customizable, it also uses tanstack/react-table under the hood which made adding sorting and filtering with pagination very easy. 

I've focused on adding these small features:
- User can clear filtered inputs and reset the filters
- Separting the components logic into a more maintable code
- Adding filters to URLParams to keep the filters when refreching the page

Definitely this kind of feature needs to be using the API for filtering and sorting so something like: 

#### Ascending order by name
GET /https://api-mockdata.com?filter[name]=test&sort=name

#### Descending order by name
GET /https://api-mockdata.com?filter[name]=test&sort=-name

#### Pagination with filters
GET /https://api-mockdata.com?page=2&filter[name]=test

What I would do next if this project gets bigger, use the App router for next instead of pages, adding typing to every component with Typescript.

If we have more filters, creating a popup to handle the filters would be better.
