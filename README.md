# Next.Js 14.2 with multiple enviroment variables

In this project I'm using 3 enviroments:

- development
- staging
- production

I'm using the dependency `dotenv-cli` to import the env files with the the scripts at the execution.
For example, for production I'm using: `dotenv -e .env.prod next build`.

## Local

The first env file is `.env.local`.
Here you should store the secrets that will be server side only.
This env file will load in all the enviroments before any other env files.
You can also store public variables (starting with "NEXT*PUBLIC*") but they will be exposed in client side components.

## Development

For development I'm using `.env.dev` variable.
You can use the Next.Js default `.env.development` with no need to load the env file at the script.
In this example I changed the name just to be shure it works.

## Staging

Staging is basically the same as Production, but used for testing and QA purposes.
This is the challenging part of multiple env files because Next only considers 3 enviroments (development, production and test).
Like in development it will load `.env.local` first followed by `.env.staging` (declared with dotenv-cli in the script for staging).

## Production

For production, as in development, you can't use `.env.production` (Next.Js default env file).
I'm using `.env.prod` for this example.
The rest works like in staging.
