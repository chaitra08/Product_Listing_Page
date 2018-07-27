## About the app:

1. This is a simple application to render a product listing page of a shopping website.

2. It includes some interartive functionalities like the navigation bar, filters and dynamically getting a data from JSON file.

3. jQuery, HTML and LESS has been used to develop this application.


# Prerequisites:

1. In order to use LESS, the following commands are used in the terminal or cmd.
     - npm install less -g
     - lessc (<sourcename.less>) > (<destinationname.css>) [to convert a less file to a css file].

2. A JSON product file is craeted to hold the data of the inventory, where the data has various characteristics like brands, type,  color, size and price of various products.

3. The JSON data is repeated multiple times to create repeatation of the objects.  


# App functioning:

1. The index.html shows the homepage of the application. The homepage consists of navigation bar which only takes to 'Men', clothing and shoes section. 'Women' and 'Sports' sections are invalid.

2. In the first page, the functionalities are: 
    - The company logo in the navigation bar, which takes the user to the homepage from the other pages.
    - The cart icon with a hover functionality, displaying the cart is empty.
    - The 'Men' menu which takes the user to the main Men product listing page.
    - 'SHOP NOW' and 'SHOP MEN' button takes the user to the men products page.

3. The 'Men' page has two sections:
    - The filter section: It has the filter for the type of objects (only shoes and t-shirts) and three main brands 'adidas', 'nike' and 'puma' and also colors. The user can select any combination of choices between the types and brands. The color filter displays all the products of all the brands of the chosen color.

    ** Note: The user cannot make any combination of color with brand or type. Selection of any color will remove the type and brand selections, and display all the products having the selected color.

    - The product section: It displays the filtered product. Each product item has a hover functionality which displays the available colors of a perticular product mentioned in the JSON file.

    ** Note: No particular item page has been made so clicking on any product will not take the user to the selected item page

#Responsivenes

1. The application is made for a maximum size of 1440 x 900 resolution (i.e my mac display resolution)
2. Other responsive section are made for width range:
    - Maximum width: 600px;
    - Minimun width: 600px to Maximum width: 900px;
    - Minimum width: 900px and above;




