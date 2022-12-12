# vite caching circular imports bug

1. Run `pnpm i`.
2. Run `pnpm test`.
3. Open your browser to the dev server.
4. Note that the page loads fine, and logs `function b()` - everything works.
5. Now, go to `module_b.js` and uncomment line 3, and save the file.

After you do this, the page now throws an error - for some reason, it's causing `module_a` to be imported twice.
The only way to fix the dev server at this point is to either revert `module_b` to its original text, so it uses the old cached version, or to `rm -rf ./node_modules/.vite` and restart the dev server.

Restarts of the dev server without deleting the cache don't fix the error.
