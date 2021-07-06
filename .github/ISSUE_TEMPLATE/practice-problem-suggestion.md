---
name: Practice Problem suggestion
about: Suggest a practice problem or set for inclusion in the site
title: "[Practice Problem] - Problem Title"
labels: enhancement
assignees: ''

---

If you feel comfortable with JSON and Markdown, we would greatly appreciate you [contributing to the project directly](https://github.com/Dyalog/PracticeProblems/blob/master/CONTRIBUTING.md)

Otherwise, we encourage people to submit problems which can later be reviewed and implemented.

## Description
Please write the problem description here. Example arguments and results are also useful.

## Reference solution
Please provide a fully correct reference solution.

## Basic test cases
Please provide a list of test cases (for monadic functions) or a list of pairs of test cases (for dyadic functions)

## Edge test cases
Try to consider edge cases which might not be immediately obvious from the problem description.

## Post processing of results
If you can, try to think if a more lenient definition of your problem is possible. For example, if your reference solution returns a scalar, but another valid solution might return a single-element vector or matrix, then we might want to include the function *ravel* (`,X`) as a post-processor so that these solutions are all considered valid.
