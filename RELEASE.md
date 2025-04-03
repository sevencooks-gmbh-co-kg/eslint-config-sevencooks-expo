# Release

To publish a new version of the package, run the following command depending on the type of version change you want to make:

```bash
npm version [major|minor|patch]
```

This will update the version in `package.json` and create a new Git tag. You need to push the changes to the remote repository:

```bash
git push origin --tags
```

Afterwards, you need to start the GitHub Actions workflow called `Publish npm package` to publish the new version to npm. To do this, go to the Actions tab in your GitHub repository. Select the workflow, and click "Run workflow".
