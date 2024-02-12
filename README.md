# Plotly.js NPE

This repo exists to demonstrate a null pointer exception that can occur in Plotly pie and funnelarea charts.

## Description

When rendering the label text for a pie wedge, a utility function is called to determine the font style to use. This utility function assumes that the text font object has been initialized. However, there is a specific case where the defaults logic skips this initialization, resulting in an attempt to read a property from an undefined object.

The utility function is explicitly skipped if `textposition==="none"`. However, `textposition` is not initialized (and thus, is undefined) if `textinfo` is `"none"`.

There are multiple approaches to address this issue: initialize `textposition` even if `textinfo` is `"none"`, or expand the check on text render to also include `textinfo==="none"`. I chose the former because the assumption that `textposition` is properly defined may lurk elsewhere in the codebase and this change should address other possible issues.

### Reproduction

First, run the application with no patch applied.

```sh
yarn install
yarn dev
```

Once the pie chart is diplayed, mouse over a wedge to trigger the hover text. Now, resize the window to cause the chart to resize. See that an exception is thrown when referencing "color" from the insidetextfont object that does not exist.

### Patch

Now we can apply the patch to see its effect.

```sh
yarn patch-package
yarn dev
```

Rerun the workflow from above to see that the null pointer exception does not occur.
