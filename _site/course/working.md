# 1: Names & Expressions
`← × + * ⌊ ÷`  
- assignment
- conformance 
- order of operations (parens)
- suggestivity & generality

# 2: Experimentation
`⍳ ⍴`  
- scalar functions work on scalars as they do on arrays
- typing APL
- reading APL

# 3: Futher Experimentation
`? f/[] ⌈/ ⌊/ ⍴A,[2]A`  
- summaries along different axes

# 4: Literals
`= > ⌽ '' ⍉ ⍎ ⍕`  
- Reshaping text into matrices for reports and stuff

# 5: A Library of Workspaces
`)VARS )SAVE )LIB )CLEAR )LOAD )COPY`

# 6: Exploring Workspaces

```APL
      Round←{⌊.5+⍵}
      RoundCent←{(Round ⍵×100)÷100}
      At←{(1+⍵÷100)*⍺}      
```

- Dfns    
- Changin order of execution with parens

# 7: Defining Functions

```APL
      +/A×B   ⍝ for lists A and B
      +/Price×Quantity
      RowSum ColSum
```

- Iteratively creating dfns
- Experimenting with functions to determine their use
- Test valid inputs {∧/ Condition}

# 8: Revising Functions
- Editing functions with janky terminal editor

# 9: Literal Digits
`\ ⍝ scan`  
- More text reports
- Catenate with axis
- Cumulative sum

# 10: Selection Functions

```APL
      bool/list          ⍝ Compress
      bool/[axis]array   ⍝ Along axes
      ~                  ⍝ Not
      ↑ ↓                ⍝ Take Drop
      array[;;]          ⍝ Simple indexing
      {(D↓⍵)-((-D)↓⍵)}   ⍝ N-wise difference
      {⍳⍴⍴⍵}             ⍝ List of ranks up to rank of ⍵
```

- Selection along axes

# 11: Reading Expressions

```APL
      ∘.f
      ⎕←
```

- Divisibility / Primes one-liner
- ContourMap
- BarChart

# 12: Using Parameters
```APL
Tax←{BV[K]+.01×BR[K]×⍵-BP[K←+/⍵>BP]}

GTax
{col[3]+0.01×col[2]×⍵-(col←⍺[;+/⍵>⍺[1;]])[1]}
⍝ Convenient multiplication but we only care about 1 of the results

{+/c×0,(0.01×⍵-1↑c←⍺[;+/⍵>⍺[1;]]),1}
⍝ Construct array arguments for single

```
**Note** We don't like fns which use external variables

GTax: Example of less and more array-like definitions
Potentially: Make GTax work with many TI inputs rather than just 1

# 13: Literal Input
Potentially replace with EasyGUI or something? CLI tools probably use files most of the time anyway

# 14: Prompting Functions
Meh

# 15: Public Data (Files)
To be replaced by Dyalog file handling & system interfacing 
- Grade & Sorting
- High-rank inde-of (⍳)
    - Pre v14.0
        IndexOf←{(⍺∧.=(¯1↑⍴⍺)↑⍵)⍳1}

# 16: Sequential Functions
TradFns
Nasty GoTo
Labels: Ew

# 17: Modes of Definition
Replace with Dfns, Tradfns, Tacit

# 18: Choice and Recursion
Replace with Dfn/TradFn recursion & control structures e.g. :If :Else
Examples:
- Fac
- Fib
- `NSort←{0=⍴⍵:⍬⋄(U⌿⍵),∇(~U←⍵=⌊⌿⍵)⌿⍵}`
- `TSort←{⍺[((⍴⍵)[2])S ⍺⍳⍵]}`
- `S←{⍺=0:⍵ ⋄ (⍺-1)S ⍵[⍋⍵[;⍺];]}`

# 19: Some Useful Primitives
- Format (meh)
- Inner Products
    - Commonly used IPs
    - Separate tutorial
- Transpose
- ⎕LX (intro to application development)
- Indexing multiple (select)

```APL
      Q←(⌈(⍳12)÷3)∘.=⍳4
      ⍴rain
30 5 12
      ⍴rain+.×Q
30 5 4
```

# 20: Presetting Parameters
- Domain specific problems
- `⎕TRAP`
- Modifying existing programs
- Remote access`