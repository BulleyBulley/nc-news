# Checklist for Northcoders News Front End

## README - write your own and make sure that it:

- [x ] has a link to the deployed version
- [x] provides general info about your app
- [ ] includes links to your back end repo
- [x] specifies the minimum version of Node required to run locally (check your Node version, `node --version` and use the major version that you are on)
- [ ] has clear instructions on how to run your project locally (`git clone <repo-url>, cd ...`)

## UX

- [x] Basic styling added
- [x] Responsive design
- [x] Items aligned
- [x] Content legible (not too wide, obstructed, etc)
- [x] Refreshing doesn't cause an issue on sub-pages
- [x] No errors in the console
- [x] Votes / Posts / Deletions happen instantly _OR_ give user indication of loading

## Functionality

### Login

- [x] Some indication of who is logged in (this can be hardcoded)

### Articles

- [x] Serves all articles / top articles
- [x] Can vote on articles
- [ ] Can vote a maximum of once in either direction per page load
- [x] Votes are persistent when page is refreshed
- [x] Topic pages load only relevant articles (especially when navigating from one topic page to another)
- [x] Can sort articles by date created / comment_count / votes

### Individual Article / Comments

- [x] Individual articles are served with comments
- [x] Can vote on comments
- [ ] Can vote a maximum of once in either direction per page load
- [x] Votes are persistent when page is refreshed
- [x ] Can post new comments, which are persistent

### Additional functionality:

- [x ] Can only delete comments of logged in user
- [x ] Deleted comments don't re-appear on re-render/refresh
- [ ] sort comments by date created / votes
- [x] navigate over pages of articles (if implemented in back-end)
- [ ] navigate over pages of comments (if implemented in back-end)
- [ ] filter / display articles by specific user
- [x ] post new article
- [x ] delete logged in user's articles

## Error Handling

- [x] Bad url
- [ ] Bad topic slug in url
- [ ] Bad article id in url
- [ ] Post comment: (No text in comment body / Can you post without logging in?)

## Code

- [x] Well named components
- [x] Components reused where possible (`Articles` / `Voter`...)
- [x] Minimal state - don't hold derivable data in state
- [x] Set state correctly, using previous state where possible
- [x] Handle asynchronicity clearly (i.e. isLoading pattern)
- [x] Functions are DRY (`handleChange` for controlled components / api calls)
- [x] Use object destructuring where possible
- [x ] Tidy? If not: ESLint / Prettier
- [x] `node_modules` git ignored
- [x ] No `console.log`s / comments
- [x] remove unnecessary files (e.g. App.test.js)

## MAKE SURE ALL TESTS ARE STILL PASSING IN BACK END

## Once everything else is complete, here are some extra challenges:

- [ ] Use `aXe` extension to check for a11y issues
- [ ] Make sure any pure functions are extracted and tested with `Jest`
- [x] Use Context API for sharing logged in user amongst components
- [ ] Create a user page where you can change their profile information if they are "logged in as the right user". This will require having an additional PATCH endpoint on your backend
- [ ] Create a view for all the articles a user has liked. This will require additional functionality on your backend
- [ ] Make use of [web sockets](https://en.wikipedia.org/wiki/WebSocket) to allow your page to automatically update with a little notification if there have been any recent posts. [socket.io](https://socket.io/) is quite a good one to use and has some good getting started guides. This will require additional functionality on your backend for recent articles e.g. last 10 minutes

## Feedback

### things we loved

- First impressions: that background is awesome! And it's responsive too! I'm a big fan :)
- Love the colour palette and the use of gradients, very bold and readable
- Nice use of HTTP status dogs <3
- Good use of MUI elements, it's a very useful library!

### would be even better if...

- There's a _lot_ going on inside your `font` directory! You definitely won't need all of it, so this would be a great opportunity for pruning. (Did this come from MUI? I'm curious...)
- Your README is almost there! Just a couple of extra pieces of information and it'll be perfect.
- Don't forget to remove those console.logs as soon as you're finished with them.
- Your post article functionality is currently returning a 400 error.
- I see that you're filtering all articles to bring back articles of a single topic, instead of having  routes for them like `/topic/football`. I like the way you're thinking, but we'd _really_ like to see some routes for these instead.
- Love the transition on the article title when you hover over it, but turning it white makes it less readable against the gradient background. Another colour combination might be more effective.
- You've imported React into some places that React doesn't touch - check your console for warnings.

## Summary

This is looking great, Phil. You've already told me that you're working on deleting comments - that's smashing. I used MUI in my first dev job after Northcoders, so it's great to see you using it here - employers will notice this sort of thing! Even though there's still a few things to do, you should be proud of what you've achieved this week. This is excellent work, well done!