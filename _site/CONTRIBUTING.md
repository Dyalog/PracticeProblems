# How to contribute.
If there is something wrong or you think something could be improved, please [submit an issue]().
If you have a problem or set of problems you think would work well on this site, please [let us know here]().

If you would like to make changes yourself, please [fork and make a pull request](https://guides.github.com/activities/forking/).

Each problem set consists of two files. One markdown file in `/_psets/` and a corresponding JSON file in `/testcases/`.

See the files in `/_psets/` and `/testcases/` for examples. The format is described below.

## Format

The name of each test-case object in the JSON file must be identical to the ID of the corresponding `<div>` in the markdown file. The name and number of each problem is written as a level-2 header (`<h2>`, denoted by `##` in markdown). Each `<h2>` in each markdown file must correspond 1-to-1 with the test cases. There must not be any additional `<h2>` tags.

Each problem set markdown file (typically YYYY.md) begins with a header (called the [front matter](https://jekyllrb.com/docs/front-matter/) in Jekyll) with `layout: set`, the page title and the collection of problem IDs for that set. Each problem description is written in plain markdown inside a `<div id="PN_Problem_ID" class="problem" markdown="1">`, where "PN_Problem_ID" matches exactly the ID in the front matter and the object in the test cases JSON file.

Each corresponding set of test cases (in a file typically YYYY.json) consists of between 3 and 5 member objects. 
Each member's name must begin with an uppercase "P" followed by a number 0 through 10. The name can optionally continue with a non-digit followed by any valid APL name characters.

- `"a"` is a list of basic test case arguments. For monadic functions it is a list of simple string array-generating expressions. For dyadic functions it is a list of 2-element lists of array-generating expressions.
- `"b"` is a list of edge case arguments in the same format as `"a"`
- `"f"` is a string containing a reference function (a correct solution) which can be a dfn, train or derived function
- `"p"` (*optional*, can be omitted) is a post-processor which is applied to results of the user's code before being compared to the results of the reference solution. This allows problem definitions to be lenient.
- `"x"` (*optional*, can be omitted) is a string containing prohibited characters, to restrict available primitives for a particular problem.

FYI, the function `⎕JSON` in Dyalog can be used to correctly display APL arrays in JSON format.

