### Next.Js 13.5 with multiple enviroment variables

In this example I'm using 3 enviroments:

- development
- staging
- production

I'm using the dependency `dotenv-cli` to import the env files in the execution of the scripts.
For example, for production I'm using: `dotenv -e .env.prod next build`.

## Local

The first env file is `.env.local`.
Here you should store the secrets that will be server side only.
This env file will load in all the enviroments before the other env files.
You can also store public variables (starting with "NEXT*PUBLIC*") but they will be exposed in client side components.

## Development

For development I'm using `.env.dev` variable.
But you can use the Next.Js default `.env.development`. In that case there's no need to load the env file at the script.
In this example I changed the name just to be shure it works.

## Staging

Basically Staging is the same as Production, but used for testing and QA purposes.
This is the challenging part of multiple env files because Next only considers 3 enviroments (development, production and test).
Like in development it will load `.env.local` first followed by `.en.staging` (declared with dotenv-cli in the script for staging).

## Production

For production, as in development, you can't use `.env.production` because it will load in staging also.
I'm using `.env.prod` for this example.
The rest works like in staging.
