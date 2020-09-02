---
layout: set
title: Home
---
# APL Practice Problems

This site has automatically validated practice problems for [APL](https://aplwiki.com). These problems are sourced from [The APL Problem Solving Competition](https://www.dyalog.com/student-competition.htm).

Each problem begins with a task description, followed by a hint suggesting one or more APL primitives. These may be helpful in solving the problem, but you are under no obligation to use them. Clicking on a primitive in the hint will open the Dyalog documentation page for the suggested primitive.

After the hint is a section of example cases which, among others, are included in the automated tests. Use these as a basis for implementing your solution

{% include note.html content="The APL executor runs Dyalog version 17.1. Your solutions must work on this or earlier versions of Dyalog." %}

# Sample Problem: Counting Vowels

Write an APL function to count the number of vowels (A, E, I, O, U) in an array consisting of uppercase letters (A–Z).

💡 Hint: The membership function [`X∊Y`](http://help.dyalog.com/latest/#Language/Primitive%20Functions/Membership.htm) could be helpful for this problem.

Examples

```APL
      (your_function) 'COOLAPL'
3
      (your_function) ''          ⍝ empty argument
0
      (your_function) 'NVWLSHR'   ⍝ no vowels here
0
```

Below are three sample solutions. All three produce the correct answer, but the first twofunctions would be ranked higher by the competition judging committee. This is becausethe first two demonstrate better use of array-oriented programming.

```APL
      ({+/⍵∊'AEIOU'}) 'COOLAPL'   ⍝ good dfn
3
      (+/∊∘'AEIOU') 'COOLAPL'     ⍝ good tacit function
3
      ⍝ suboptimal dfn:      {(+/⍵='A')+(+/⍵='E')+(+/⍵='I')+(+/⍵='O')+(+/⍵='U')} 'COOLAPL'
3
```

If you were to put any of the above functions above in the input field below and click Submit, you'll see that they only pass the basic test cases. This is because none of those functions handle arrays with 2 or more dimensions. The system will also give you an example of a multi-dimensional edge case that failed, so you can attempt to improve your solution.

Try entering `{+/,⍵∊'AEIOU'}` which handles all test cases.

<script>
    testCases = {"P0_Sample_Problem": {"a": ["'COOLAPL'","''","'NVWLSHR'","{⍵[?⍨≢⍵]}'AEIOU',⎕A[?26⍴⍨9+?16]"],"b": ["2 3⍴'APLYES'","⎕A[?26⍴⍨1+?2⍴⍨1+?2]","''⍴⍨¯1+?⍨3"],"f": "{+/,⍵∊'AEIOU'}","p": "{⊃⍣(1=≢,⍵)⊢⍵}"}};
</script>

<div class="pdiv"><span>your_function ← </span><input id="P0_Sample_Problem_Input"><button onclick="submitSolution('P0_Sample_Problem')">✔ Test</button></div>
<div id="P0_Sample_Problem_Output" class="tioOutput"></div>