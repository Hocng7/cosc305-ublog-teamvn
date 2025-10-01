This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


## Team Setup & Running Locally (with Docker)

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed
- (Optional) [Node.js](https://nodejs.org/) if you want to run scripts outside Docker

### 1. Clone the repository
```bash
git clone <repo-url>
cd ublog
cd ublog
```

### 2. Copy the example environment file (if needed)
Edit `.env` with your own secrets if required.


### 3. Start the database (Postgres) only
```bash
docker compose up db
```
This will start only the Postgres database in Docker. Leave this terminal running.

### 4. Install dependencies (first time only)
```bash
npm install
```

### 5. Start the Next.js app in development mode (with hot reload)
```bash
npm run dev
```
The app will be available at [http://localhost:3000](http://localhost:3000).

### 6. (Optional) Seed demo data
To populate the database with demo users and posts:
```bash
docker compose run --rm app sh -c "npx prisma generate && npx ts-node prisma/seed.ts"
```

### 7. Stopping the app and database
- To stop the app: Press `Ctrl+C` in the terminal running `npm run dev`.
- To stop the database: Press `Ctrl+C` in the terminal running `docker compose up db`, then run:
	```bash
	docker compose down
	```

---

You do **not** need to install or run Postgres locally—Docker handles the database. Use `npm run dev` for the best development experience with hot reloading.

If you have any issues, make sure Docker is running and you are in the `ublog/ublog` directory before running commands.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!


