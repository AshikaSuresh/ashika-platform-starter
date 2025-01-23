import { defineConfig } from '@stackbit/types';

export default defineConfig({
    contentSources: [
        {
            name: "Git",
            type: "git",
            repoUrl: "https://github.com/AshikaSuresh/ashika-platform-starter",
            branch: "main", // or your branch name
        }
    ],
    models: [], // Models will be defined in the next step
});
