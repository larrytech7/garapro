# GaraPro

Bilingual marketing site for GaraPro roadside assistance in Cameroon. French is the default language. English is served under `/en`.

```bash
npm run dev
```

The published numbers default to `+237 6 78 65 60 32`. Override them with `NEXT_PUBLIC_PHONE` (`tel:` link) and `NEXT_PUBLIC_WHATSAPP` (digits only). Set `NEXT_PUBLIC_SITE_URL` to the live origin so canonical links are not `localhost`.

## Deploy on Firebase App Hosting

The repo is ready for [Firebase App Hosting](https://firebase.google.com/docs/app-hosting/get-started). Rollouts come from the Git branch you connect. There is no separate static export.

1. Use a Firebase project on the Blaze plan.
2. In Hosting & Serverless, create an App Hosting backend.
3. Choose a region close to Cameroon. `europe-west4` is the practical choice among the App Hosting regions.
4. Connect the GitHub repository. The app root is `/`. Set the live branch to the branch you ship from.
5. Select the Node.js 22 runtime. That matches `engines.node` in `package.json`.
6. Before the first rollout, set `NEXT_PUBLIC_SITE_URL` to the public URL, in [`apphosting.yaml`](apphosting.yaml) or in the backend settings. A value in the console overrides the file.
7. Push to the live branch. App Hosting runs `npm run build` and starts the Next.js server.

`NEXT_PUBLIC_PHONE` and `NEXT_PUBLIC_WHATSAPP` are already set in `apphosting.yaml` for both the build and the running server. Next.js 16 is newer than the adapter’s active line (15.2) and is deployed as a preview. The installed release, 16.4.3, is inside the adapter’s safe range.
