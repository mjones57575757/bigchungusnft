HTML Basics
HTML File Skeleton
HTML Tags
HTML Attributes
Headers
Basic Tags
Horizontal Lines
Single Line Breaks
Links
Images
Lists
Tables
Comments
IFrames
CSS Basics
Inline Style
Adding CSS to HTML Page
Adding External CSS
CSS Syntax
CSS Comments
Select By Tag
Select By Class
Select By ID
Grouping with Divs
Grouping with Spans
CSS Properties
Color
Color Names
RGB Colors
Hex Color Codes
Color Picker
Text and Font
Background
Border
Margin
Padding
Bootstrap
Bootstrap Basics
Adding Bootstrap
More Bootstrap
HTML Documentation
HTML File Skeleton
This is a simple html file skeleton that you can use to get you started on a project. To get info on specific tags see below.
<!DOCTYPE html>
<html>
	<head>
		<title>Your Page Title</title>
	</head>

	<body>
		<!--Inside the body tag is where you put all the cool stuff
		you want on your page!-->
	</body>
</html>
The !DOCTYPE declaration must be the very first thing in your html document. It is not an html tag, it is an instruction to the web browser about what version of HTML the page is written in.

The html tag tells the browser that this is an html document.

The head element is a container for all the head elements, which can include a title for a document, scripts, styles, and more. The title tag defines the title of the page.

The body element contains all the contents of an HTML document, such as text, hyperlinks, images, tables, and lists.

Tags
HTML tags are keywords that define how the browser must format and display content.
A basic HTML element starts like this:
<tag>
    It starts with an opening tag and ends with a closing tag.
    The closing tag has the same name as the opening tag, but with a /
    Everything inside should be indented one level.
</tag>

HTML Attributes
Attributes can be added to any tag to add more information about the tag.
The general format for adding an attribute and a value for the attribute is:
<tag attribute="value">Tag content here</tag>
Example HTML:
<img src="https://codehs.com/static/img/logo.png" height="50px">
Example Result:

Header Tags
The <h1> to <h6> tags are used to define HTML headings. <h1> defines the most important heading. <h6> defines the least important heading.

Example HTML:
<h1>Level 1 Header</h1>
<h2>Level 2 Header</h2>
<h3>Level 3 Header</h3>
Example Result:
Level 1 Header
Level 2 Header
Level 3 Header

Basic Tags
The <p> tag defines a paragraph.
The <i> tag displays text in italics.
The <b> tag displays text in bold.

Example HTML:
<p>
    This is a paragraph where <i>this will display in italics</i>
    and <b>this will display in bold</b>.
</p>
Example Result:
This is a paragraph where this will display in italics and this will display in bold.


Horizontal Lines
The <hr> tag defines a thematic break with a horizontal rule.

Example HTML:
<p>
    This is a section about a certain theme.
</p>
<hr>
<p>
    This is a section about another theme separated from the previous section
    by a horizontal line that implies a thematic break in content.
</p>
Example Result:
This is a section about a certain theme.

This is a section about another theme separated from the previous section by a horizontal line that implies a thematic break in content.


Single Line Break
The <br> tag enters a single line break (without a horizontal line).

Example HTML:
<p>
    This is a section about a certain theme.
</p>
<br>
<p>
    This is another section that starts on a new line.
</p>
Example Result:
This is a section about a certain theme.


This is another section that starts on a new line.


Links
The <a> tag creates a hyperlink that is used to link from one page to another. The href attribute indicates the link's destination.

Example HTML:
<a href = "https://google.com">Google</a>
Example Result:
Google

Images
The <img> tag defines an image in an HTML page.

The src attribute indicates where the image is coming from and can be either a directory path to a photo saved on your computer or the url of an image on the internet like the example below. You can also upload your own photos to CodeHS to use in your program. See instructions for how to do that here!

The alt attribute specifies alternate text that will display if the image cannot be loaded.

The width and height attributes specify the width and height of the image.

Example HTML:
<img src = "https://codehs.com/static/img/logo.png" alt="Image not found" width="50px" height="50px">
Example Result:
Image not found

Lists
The <ul> tag defines an unordered list (bullet points)
The <ol> tag defines an ordered list (numbered list)
The <li> tag defines a single list item inside of a list

Example HTML:
<ol>
    <li>Item one</li>
    <li>Item two</li>
    <li>Item three</li>
</ol>
<ul>
    <li>Item A</li>
    <li>
        Item B
        <ol>
            <li>Subitem 1</li>
            <li>Subitem 2</li>
        </ol>
    </li>
    <li>Item C</li>
</ul>
Example Result:
Item one
Item two
Item three
Item A
Item B
Subitem 1
Subitem 2
Item C
Tables
The <table> tag defines a table element that can contain several individual table rows.
The <thead> tag groups together the header information in the table.
The <tbody> tag groups together the body information in the table. The <tr> tag defines a single row in the table. The tr element can contain several cells of information.
The <th> tag defines a table header. th tags are commonly used in the first row of the table to show the headers of each column.
The <td> tag defines a table data element, a single cell of information. td elements go inside of a table row.
The border attribute defines how thick the table border is (default is no border)

Example HTML:
<table border="1">
    <thead>
        <tr>
            <th>Name</th>
            <th>Favorite Color</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Sam</td>
            <td>Purple</td>
        </tr>
        <tr>
            <td>Taylor</td>
            <td>Orange</td>
        </tr>
    </tbody>
</table>
Example Result:
Name	Favorite Color
Sam	Purple
Taylor	Orange

Comments
The comment tag is used to insert helpful notes into the HTML code. Comments are not displayed in the resulting web page, they are only there for the reader of the code.

Using comments in your code can help you maintain clean, clear, and understandable code.
<!-- Your comment goes here. -->

<!-- This section of the webpage links to other parts of the site -->
<a href="about.html">About</a>
<a href="home.html">Home</a>

Embedding Iframes
The <iframe> tag embeds an HTML page within another HTML page. They are often used to insert content from another source, such as tweets, videos, or advertisements.

The src attribute indicates where the HTML page is coming from and is the url of an HTML page on the internet like the example below.

The width and height attributes specify the width and height of the iframe window.

Example HTML:
<iframe src = "https://codehs.com" width="400px" height="400px"></iframe>
Example Result:

CSS Documentation
Inline Styling
The style attribute of an element lets you style that single element.
The format for the style attribute is:
<tagname style="property: value;">You can add multiple styles to one element:
style="property1: value1; property2: value2;"
Example HTML:
<h3 style="background-color:LightBlue;">My Journal</h3>
<p style="background-color:LightYellow; font-size:15px;">Today I walked my puppy at the park and made my own website.</p>
Example Result:
My Journal
Today I walked my puppy at the park and made my own website.


For a full list of properties and values that can be used, go to CSS Properties

Adding CSS to HTML Page
Instead of adding a style attribute to each element, we can use CSS code to select and style several elements at once.
The CSS code goes inside the <style> tag which goes in the <head> element.
The style is separate from the content of the page. Because it is metadata about the content, it belongs in the head.
Example:
<head>
    <title>Your Page Title</title>
    <style>
        /*
         * This will select all h1 elements
         * and give them a font size of 30px
         * and a color of red.
         */
        h1 {
            font-size: 30px;
            color: red;
        }
    </style>
</head>
<body>
    <h1>CodeHS</h1>
</body>
Result:
CodeHS

Adding External CSS
Rather than putting all of our CSS rules in a style tag, it's also possible to add CSS code that's written in a separate file. The file should be a .css file, such as my_style.css
The external CSS file should be added to the page using a <link> tag in the <head> of the HTML page.
Example:
my_page.html
<html>
    <head>
        <title>Your Page Title</title>
        <link rel="stylesheet" type="text/css" href="my_style.css">
    </head>
    <body>
        <h1>CodeHS</h1>
    </body>
</html>my_style.css
/*
 * This will select all h1 elements
 * and give them a font size of 30px
 * and a color of red.
 */
h1 {
    font-size: 30px;
    color: red;
}
Result:
CodeHS

CSS Syntax
In CSS the selector defines which HTML elements the CSS rule apples to. CSS declarations are inside braces and define the style. Properties are which features are being styled and the value of a property is how the feature is being styled.
/* General format */
selector {
    property: value;
    property: value;
}

/*
 * In this CSS rule, h1 is the selector, and each line
 * inside the braces is a CSS declaration.
 *
 * This rule will select all h1 elements, set their font-size
 * property to be 60px, and set their color property to be red.
 */
h1 {
    font-size: 60px;
    color: red;
}For a full list of properties and values that can be used, go to CSS Properties
CSS Comments
It's important to add comments to your CSS code to explain to the reader what each rule is doing. Comments are ignored by the browser when the page is displayed. Comments are there to help the reader of the code understand what is going on.

A CSS comment starts with /* and ends with */
Example:
h1 {
    /* This is a single line comment */
    color: red;
}

/*
 * This is a multi-line comment that
 * spans multiple lines
 */
h2 {
    color: green;
}
Selecting By Tag
We can select html elements to style by their tag. If we use a tag as a selector, it selects all the elements with that tag.
/*
 * This CSS rule will select all images
 * and their height will be set to 200 pixels
 */

img {
    height: 200px;
}
Selecting by Class
Class is an attribute that we can add to html tags to style a group of elements. If we use a class as a selector, it selects all the elements that share that class.

The class style overrides tag style in case of a conflict. In other words, if a select-by-tag rule says that the element should be red, and a select-by-class rule says the same element should be green, the class rule takes precedence and the element will be green.
You can add a class to a tag like this:
<tag class="class-name"></tag>
You can add multiple classes to a tag by separating class names with spaces:
<tag class="class1 class2 class3"></tag>
Class names
Cannot start with a number
Should be all lowercase
Should use dashes (-) between words i.e. "class-name"
Should be descriptive
To select all elements with the same class, the CSS selector should have a period followed by the class name:
.class-name
Example:
<head>
    <title>Your Page Title</title>
    <style>
        /*
         * This rule will apply to all the elements with
         * the "alert" class
         */
        .alert {
            color: red;
        }

        /*
         * This rule will apply to only <h1> elements
         * with the class "alert"
         */
        h1.alert {
            font-size: 20px;
        }

        /*
         * This rule will apply to all elements with the
         * "morning-greeting" class
         */
        .morning-greeting {
            background-color: LightYellow;
        }
    </style>
</head>
<body>
    <h1 class="alert morning-greeting">Good Morning!</h1>
    <p class="alert">Hi!</p>
</body>
Result:
Good Morning!
Hi!


Selecting by ID
id is an attribute that we can add to an HTML tag to style that specific element.
An element can only have one id and the id of an element should be unique.
There should be only one tag with a given id on any web page.
Using the ID as a selector will select the one element that has that ID.

The id style overrides both tag and class style in case of a conflict. In other words, if a select-by-tag rule says that the element should be red, and a select-by-class rule says the same element should be green, and a select-by-id rule says that the same element should be yellow, the id rule takes precedence and the element will be yellow.
You can add an id to a tag like this:
<tag id="id-name"></tag>
id names:
Cannot start with a number
Should be all lowercase
Should use dashes between words i.e. "id-name"
Should be descriptive
To select an element with a specific id, the CSS selector should have a hashtag followed by the id name:
#id-name
Example:
<head>
    <title>Your Page Title</title>
    <style>
        /*
         * This rule will apply to the single element
         * with the id "logo"
         */
        #logo {
            font-size: 20px;
            color: red;
        }
    </style>
</head>
<body>
    <h1 id="logo">CodeHS</h1>
</body>
Result:
CodeHS

Divs
Divs are used to group together several different HTML elements into one block. A div creates a new block of elements, a block always starts on a new line and takes up the full width available in its container.
Grouping elements together in a div allows us to style that block as one unit.
Example HTML:
<div id="block-one">
    <h3>Welcome</h3>
    <p>Welcome to my web page.</p>
</div>
<div id="block-two">
    <ul>
        <li>Home</li>
        <li>About</li>
    </ul>
</div>
Example CSS:
#block-one {
    color: red;
}

#block-two {
    color: blue;
}

Example Result:
Welcome
Welcome to my web page.

Home
About
Spans
Spans are used to group together smaller chunks of HTML code in-line. Spans do not create a new block, they are usually used to add style to a small chunk of HTML inside of a line (such as a line in a paragraph).
Example HTML:
<p>This is a <span class="big">paragraph</span> of <span class="small">text</span></p>
Example CSS:
.big {
    font-size: 20px;
}

.small {
    font-size: 8px;
}
Example Result:
This is a paragraph of text

CSS Properties
This section covers some of the most commonly used CSS properties and values. For a full list of possible CSS properties and values, visit W3 Schools
Color
CSS Colors can either be:
A valid color name, such as "Blue" or "DarkGreen"
An RGB value, such as "rgb(255, 0, 0)"
A HEX color code, such as "#68ff00"
Color Names
Common color names:
red
orange
yellow
green
blue
cyan
indigo
black
white
Names are not case-sensitive. "RED" is the same as "red".
There are 140 valid color names. See a full list of all names here
Example:
p {
    color: blue;
}
Result:
Hello

RGB Colors
HTML and CSS represent colors with the RGB (Red Green Blue) color encoding system.
Every color can be made just by mixing different amounts of red, green, and blue.

RGB color values can be specified in CSS using "rgb(red, green, blue)"
Each value can be between 0 and 255, inclusive.
rgb(255, 0, 0) would be red
rgb(255, 255, 255) would be white
rgb(0, 0, 0) would be black
Example:
p {
    color: rgb(255, 0, 0);
}
Result:
Hello

Hex Color Values
We can also represent RGB colors using hexadecimal values. 6 hexadecimal digits make up a color:
The first two hexadecimal digits specify the amount of RED in the color
The next two hexadecimal digits specify the amount of GREEN in the color
The last two hexadecimal digits specify the amount of BLUE in the color
Each digit can be a value from 0 to F, with 0 being the least and F being the most
"#ff0000" would be red
"#ffffff" would be white
"#000000" would be black
Example:
p {
    color: #0000ff;
}
Result:
Hello

Color Picker
Use this color picker to find the exact color you want for your web page:

#ff0000
Text and Font
color: text color in the selected HTML element
font-size: size of the font (e.g. 30px)
font-family: font family (e.g. Arial or Times)
font-style: font style (e.g. italic or normal)
font-weight: how thick the font is (bold or bolder, or a value from 100 to 900)
text-align: sets the horizontal alignment of text (center, left, right)
<head>
    <title>Your Page Title</title>
    <style>
        h1 {
            font-size: 100px;
            font-weight: bold;
            color: blue;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Welcome to my blog!</h1>
</body>For a full list of possible CSS properties and values, visit W3 Schools
Background
background-color: background color in the selected HTML element
background-image: specifies one or more background images
background-repeat: sets how many times the background image will be repeated
<head>
    <title>Your Page Title</title>
    <style>
        body {
            background-image: url("sandpaper.gif");
        }
    </style>
</head>
<body>
    <h1>Welcome to my blog!</h1>
</body>For a full list of possible CSS properties and values, visit W3 Schools
Border
The border properties allow us to create borders around any HTML element! border-color: sets border color for all four border sides
border-width: sets the width of the border for all four border sides
border-style: sets the style of the border for all four border sides (solid, dotted, dashed, double)
border-size: sets the size of the border for all four border sides
border-right-color: sets border color for right border
border-right-width: sets the width of the border for right border
border-right-style: sets the style of the border for right border (solid, dotted, dashed, double)
border-right-size: sets the size of the border for right border
border-left-color: sets border color for left border
border-left-width: sets the width of the border for left border
border-left-style: sets the style of the border for left border (solid, dotted, dashed, double)
border-left-size: sets the size of the border for left border
border-top-color: sets border color for top border
border-top-width: sets the width of the border for top border
border-top-style: sets the style of the border for top border (solid, dotted, dashed, double)
border-top-size: sets the size of the border for top border
border-bottom-color: sets border color for bottom border
border-bottom-width: sets the width of the border for bottom border
border-bottom-style: sets the style of the border for bottom border (solid, dotted, dashed, double)
border-bottom-size: sets the size of the border for bottom border
<head>
    <title>Your Page Title</title>
    <style>
        h1 {
            border-color: green;
            border-width: 2px;
            border-style: dashed;
        }
    </style>
</head>
<body>
    <h1>I love using CodeHS!</h1>
</body>For a full list of possible CSS properties and values, visit W3 Schools
Margin
The margin is the amount of space between an element and the elements around it. The margin is set with a value of pixels, but it can also be set to auto.
Setting the margin to auto centers the element within its container.
margin: shorthand to set the margin of top, right, bottom, and left (in that order)
margin-top: sets the margin for the top of the container
margin-right: sets the margin for the right of the container
margin-bottom: sets the margin for the bottom of the container
margin-left: sets the margin for the left of the container
<head>
    <title>Your Page Title</title>
    <style>
        h1 {
            margin: auto;
        }
        p {
            margin: 10px 20px 10px 20px;
        }
    </style>
</head>
<body>
    <h1>Welcome to my blog!</h1>
    <p>Here I will write about my life and adventures.</p>
</body>For a full list of possible CSS properties and values, visit W3 Schools
Padding
The padding is the amount of space between the content in the element and the border of the element. The padding is set with a value of pixels.
Unlike margin, it cannot be set to auto.
padding: shorthand to set the padding of top, right, bottom, and left (in that order)
padding-top: sets the padding for the top of the container
padding-right: sets the padding for the right of the container
padding-bottom: sets the padding for the bottom of the container
padding-left: sets the padding for the left of the container
    <head>
        <title>Your Page Title</title>
        <style>
            h1 {
                margin: auto;
                padding-top: 15px;
                padding-bottom: 15 px;
            }
            p {
                margin: 10px 20px 10px 20px;
            }
        </style>
    </head>
    <body>
        <h1>Welcome to my blog!</h1>
        <p>Here I will write about my life and adventures.</p>
    </body>For a full list of possible CSS properties and values, visit W3 Schools
Bootstrap
Bootstrap Basics
Bootstrap is a free library for creating professional, responsive, mobile web pages. Bootstrap provides several premade HTML components and CSS classes that you can use to make your pages look clean and professional on all devices
Adding Bootstrap
To add Bootstrap to your web page, you simply need to add a few tags to the head element to import the Bootstrap CSS and JavaScript code.
Here is the starting template for a Bootstrap page:
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

        <!-- Bootstrap JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    </head>
    <body>
        <!-- Your HTML code here -->
    </body>
</html>
More Bootstrap
For full Bootstrap documentation visit the Bootstrap Site