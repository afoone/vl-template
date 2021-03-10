# NEXT.JS VL TEMPLATE

# how to run
- test server: `npm run server`
- client: `npm start`

# todo list
1. Convert this app to nextjs (not worry about Server Side Rendering or Static Rendering)
2. Use standard nextjs internacionalization
3. Dark mode (see https://github.com/paljs/nextjs-admin-template) (change templates)
4. Notificacions with redux (test it and style it: https://www.npmjs.com/package/redux-notifications )
5. Feature flag: each component has an feature id, and will be rendered only if a config file (from backend) has this feature in a array ["feature1", "feature2"] or something like this. There are some approaches: https://sergiodxa.com/articles/feature-flags-react make some research and give me feedback.
6. Configuration: We need to store user settings and retrieve it. These are:
  - What to print on screen (hide components in header, for example) 
  - Some components admit configurations, other don't
  - The components that admit configuration will have some small nut icon to configure them. Just to show/hide subcomponents. The configuration will be made in a form (overlay... maybe there are better solutions) and get all the possible configurations (subcomponents to hide) and select what to see and what not to see.
  - The configuration will be saved on redux.