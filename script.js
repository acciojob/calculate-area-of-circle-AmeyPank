//your JS code here. If required.
var radius = parseFloat(prompt("Enter the radius of the circle:"));
var area = Math.PI * Math.pow(radius, 2);
area = area.toFixed(2);

alert("The area of the circle with radius " + radius + " is " + area);
