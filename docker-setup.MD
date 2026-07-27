# Docker Setup for Tetris Deluxe

## Prerequisites

- Docker installed ([download](https://www.docker.com/products/docker-desktop))
- Docker Compose (included with Docker Desktop)

## Quick Start

### Option 1: Using Docker Compose (Recommended)

Build and run the container:

```bash
docker-compose up --build
```

The app will be available at `http://localhost:3000`

To stop the container:

```bash
docker-compose down
```

---

### Option 2: Using Docker Commands

Build the image:

```bash
docker build -t tetris-deluxe .
```

Run the container:

```bash
docker run -p 3000:3000 tetris-deluxe
```

The app will be available at `http://localhost:3000`

---

## What's in the Dockerfile

- **Build Stage**: Uses Node 16 Alpine to build the React app
- **Serve Stage**: Uses a lightweight Alpine image to serve the built app with `serve`
- **Multi-stage build**: Keeps the final image size small by only copying the built files

---

## Environment Variables

The Dockerfile automatically sets:

- `NODE_OPTIONS=--openssl-legacy-provider` (required for older dependencies)

---

## Troubleshooting

**Port 3000 already in use?**

```bash
docker run -p 3001:3000 tetris-deluxe
```

Then visit `http://localhost:3001`

**Want to rebuild without cache?**

```bash
docker-compose up --build --no-cache
```

**View container logs:**

```bash
docker-compose logs -f tetris
```

---

## Deployment

### To Netlify

The project is already configured with `netlify.toml`. Deploy the `build/` folder.

### To Docker Hub

```bash
docker tag tetris-deluxe yourusername/tetris-deluxe:latest
docker push yourusername/tetris-deluxe:latest
```

### To AWS, Heroku, or DigitalOcean

All support Docker deployments. Push your image to a registry and deploy from there.
