# relearning-svelte

## Initializing a SvelteKit project

```
deno run -A npm:create-svelte@latest
```

## Using Deno to preview or build the project

### Developing

#### Dependencies

Tag `npm` dependencies with
[`npm:`](https://docs.deno.com/runtime/manual/node/).

Development preview:

```bash
deno task dev

# or start the server and open the app in a new browser tab
deno task dev --open
```

## Building

To create a production version of your app:

```bash
deno task build
```

You can preview the production build with `deno task preview --open`.

> To deploy your app, you may need to install an
> [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
