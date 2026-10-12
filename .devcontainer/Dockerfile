FROM mcr.microsoft.com/devcontainers/javascript-node:18-bullseye

ARG USERNAME=node

# --- System tools for a complete dev environment ---
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y --no-install-recommends \
        git-lfs \
        ripgrep \
        fd-find \
        jq \
        less \
        procps \
        vim \
        curl \
        ca-certificates \
    && git lfs install --system \
    && ln -s "$(which fdfind)" /usr/local/bin/fd \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# --- GitHub CLI ---
RUN mkdir -p -m 755 /etc/apt/keyrings \
    && curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg \
        -o /etc/apt/keyrings/githubcli-archive-keyring.gpg \
    && chmod go+r /etc/apt/keyrings/githubcli-archive-keyring.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" \
        > /etc/apt/sources.list.d/github-cli.list \
    && apt-get update \
    && apt-get install -y --no-install-recommends gh \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# --- Git: trust the mounted workspace (owner differs from container user) ---
RUN git config --system --add safe.directory /app \
    && git config --system --add safe.directory /workspaces/tmdb-clone \
    && git config --system init.defaultBranch main \
    && git config --system core.autocrlf input

WORKDIR /app

# --- Dependencies baked into the image (node_modules volume seeds from here) ---
COPY package.json package-lock.json ./
RUN npm ci

# Self-contained fallback for `docker run` without a bind mount.
COPY . .

ENV NODE_ENV=development \
    NEXT_TELEMETRY_DISABLED=1

EXPOSE 3000

USER ${USERNAME}

CMD ["npm", "run", "dev"]
