# qwasar001-my-moving-box-realtime

My Moving Box Realtime	
Submit directory	ex00
Submit file	index.html


Description
Complete an index.html file with the missing javascript code in order to move the "div" with the id my_box_realtime to the coordinate of: bottom: 0and right 0 Moving the box must be smooth. It means you will update the position slowly: You can only change the position (vertically and horizontally) of 1 point every 0.5 second.

When we load you html page we should see the box moving diagonally through the screen and it should take 35 seconds to reach its destination.

You cannot change the value of the html, moving the box needs to be done using javascript.

$>cat index.html
<html>
    <div id="my_box_realtime" style= "background-color: red; position: absolute; right: 70; bottom: 70; min-width: 100px; min-height: 100px"></div>
    <script type="text/javascript">
      // YOUR CODE
    </script>
</html>
$>
To display your page you will need a static html page renderer (see annex at the bottom).

Example:


Tips
Google: Javascript document getElementById
Google: Javascript change css position
Google: Javascript setInterval
Make sure to not have: <!DOCTYPE html> at the top, it creates some incompatibility with gandalf

Annex: Static Html Page Renderer
How to have a static html page renderer inside Docode:

0# Open your HTML file:


1# Click on the web preview button:


2# You can preview your html:
