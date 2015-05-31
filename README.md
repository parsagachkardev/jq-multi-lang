# jq-multi-lang
A Simple JQuery Plugin for MultiLanguage Webpages

##Usage :

### Installation
Copy & include JQuery and the Script in your HTML File

`<script src="jquery-2.1.3.min.js"></script>`

`<script src="jq-multilang.js"></script>`

### Now Lets Translate our HTML Page
Use something to identify tags that need to be translated
For example add `.jq-multilang-enabled` class to the tags

`<span id="multi-language-tag" class=".jq-multilang-enabled">My Text</span>`

then use 
`data-lang-<Your Language id>="<Translated HTML>"`
data attributes to Translate Your tags , use
`data-lang-<Your Language id>-rtl="True"` if you need RTL

####Example:

`<span id="multi-language-tag" class=".jq-multilang-enabled" data-lang-fa="متن من" data-lang-fa-rtl="True" data-lang-en="My Text">My Text</span>`

### Adding Functionality:

OK You'r done defining data attributes, Now put some buttons in your document to Translate The Text:

use the class (Or anything else) you used before to "Mark" the tags you need to translate.

`<button onclick="$(".jq-multilang-enabled").jqmultilang("en");">English<button>`

`<button onclick="$(".jq-multilang-enabled").jqmultilang("fa");">فارسی<button>`

