# TerminalGPT

TerminalGPT sends a prompt to the OpenAI API and prints the response in your terminal. It requires [Bun](https://bun.sh/) 1.3.14 or later.

## Setup

1. Install dependencies:

   ```sh
   bun install
   ```

2. Create a `.env` file from the example and add your OpenAI API key:

   ```powershell
   Copy-Item .env.example .env
   ```

  Edit `.env` and set `OPENAI_API_KEY`. You can optionally change `OPENAI_MODEL`; it defaults to `gpt-4o-mini`.

3. Run the app and enter a prompt:

   ```sh
   bun run src/index.tsx
   ```

  Or pass the prompt directly:

   ```sh
   bun run src/index.tsx "Explain how solar panels work"
   ```

You can also set `OPENAI_API_KEY` in your shell environment instead of using `.env`.

## Typecheck

```sh
bun run typecheck
```
