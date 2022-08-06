<h1 align="center">
    Coding Assignment: Create a 10 key calculator (Functional Calculator with Clear, +, -, =, with display, TSX)
</h1>

<p align="center">
  Template for this code: https://github.com/reactivando/template-react-typescript
</p>

<p align="center">
  See src/App.tsx and src/components/Button for the code I actually wrote
</p>


This code is very rough and what I would consider only a first attempt with little styling. As it is you can enter in a calculation and select =. After this you should select clear to start from a fresh state.
<p>
Things I would change if I put more time into this:
</p>
<ol>
<li>Make this code more abstract. I focused on basic functionality and implementing just the Button from a separate file to demonstrate React/TypeScript. But I would also separate the display area and the numberpad into their own files</li>
<li>More in depth testing/debugging to make this calculator function as expected. As is this calculator is very.... unique, and full of fun... "features" that make it very interesting to use. </li>
</ol>


EDIT, Following changes have been implemented for small improvement:
<ol>
<li>Added multiplication and division. Small easy change (low hanging fruit) that improves user functionality.</li>
<li>Implemented delete (<-) button so you don't have to just clear the number you were working with. User functionality upgrade.</li>
<li>Better abstraction for NumPad and Display. Also cleaned up Button a little. No change to user experience but it has better maintainability and compliance to coding standards.</li>
<li>Fixed bug when displaying the result and clicking on a digit would manipulate the result, now the displayed value for the next calculation is different from the Result of the calculation</li>
</ol>

Currently known... Features
<ul>
<li>Can't handle negative numbers and you can't input fractional/decimal numbers. But this functionality would be purely logic based and not help display React or TypeScript capabilities.</li>
<li>Selecting a different operator after calculation will just change the operator. This is different from most other calculators... by design...</li>
</ul>