// Dom

// window: window is the global object and all the methods class and everything comes under the window.
//                                            window
//                                          /    |    \
//                                        dom    bom   js core

//  dom : Dom stands for document object model . It is created when we try to convert the html content into js object and the return is called as document .
// the document created in this process is called as dom

// Dom in html:

// 1. acessing the html element

//  for accessing we have five methods 
// by id (returns only single elements)
// document.getElementById("id_name") here do not write id_name with #
// by class(returns html collections in array format )
// document.getElementsByClassName("Class_name") here do not write id_name with .
// by tag (returns html collections in array format)
// document.getElementsByTagName("Tag_name") here do not write id_name with <>
// by queryselector (returns the first occurence in caae of class and tag)
// document.querySelector("#Id_name or .Class_name or tag_name")
// by queryselctorall (returns the html collections of the given input ie id or class or tag)
// document.querySelectorAll("#Id_name or .Class_name or tag_name")

// 2.updating the html element

// for updating the html element we have two methods
// For using this method first access the element and then apply these methods
// for acessing the element
//  let variable_name = any_method of the above 
// 1. by innerHTML
// varible_name.innerHTML="content"
// 2. outerHTML
// variable_name.outerHTML="content"

// 3. adding the html element

// let p = document.querySelector("#b")
// -> undefined
// p
// -> <div id="b" style="background-color:yellow; color: darkred;">
// let c = document.createElement("p")
// -> undefined
// c
// -> <p>
// c.textContent="This is my sixt paragraph"
// -> "This is my sixt paragraph"
// c.textContent
//-> "This is my sixt paragraph"
// p.appendChild(c)
// -><p>
// p.textContent
// -> "
//             This is my first paragraph.
//             This is my second paragraph
//             This is my third paragraph
//             This is my fourth paragraph
//         This is my sixt paragraph"
// p.insertAdjacentElement("beforebegin",c)
// -> <p>
// p.textContent
// -> "
//             This is my first paragraph.
//             This is my second paragraph
//             This is my third paragraph
//             This is my fourth paragraph
//         "
// p.insertAdjacentElement("afterbegin",c)
//-> <p>
// p.textContent
// -> "This is my sixt paragraph
//             This is my first paragraph.
//             This is my second paragraph
//             This is my third paragraph
//             This is my fourth paragraph
//         "
// p.insertAdjacentElement("beforeend",c)
// -> <p>
// p.textContent
//-> "
//             This is my first paragraph.
//             This is my second paragraph
//             This is my third paragraph
//             This is my fourth paragraph
//         This is my sixt paragraph"
// p.insertAdjacentElement("afterend",c)
//-> <p>
// p.textContent
//-> "
//             This is my first paragraph.
//             This is my second paragraph
//             This is my third paragraph
//             This is my fourth paragraph
//         " 

// 4.removing of an html content

// let p = document.querySelector("#b")
// -> undefined
// p
//-> <div id="b" style="background-color:yellow; color: darkred;">
// let c = document.querySelector("#c")
// -> undefined
// c
// -> <p id="c">
// p.removeChild(c)
// -> <p id="c">
// p.textContent
// -> "
//             This is my first paragraph.
            
//             This is my third paragraph
//             This is my fourth paragraph
//         " 


//  dom in css

// 1. using style (for inline style , can change only one property at a time ie bgcolour or colour)
// let q = document.querySelector("#b")
// -> undefined
// q
// -> <div id="b" style="background-color:yellow; color: darkred;">
// q.style
// -> CSS2Properties { "background-color" → "yellow", color → "darkred" }
// q.style.backgroundColor="green"
// -> "green" 

// 2. using css text (for inline style , can change multiple property at a time ie bgcolour ,colour)
// let q = document.querySelector("#b")
// -> undefined
// q
// -> <div id="b" style="background-color:yellow; color: darkred;">
// q.style.cssText
// -> "background-color: yellow; color: darkred;"
// q.style.cssText="background-color:black; color:white";
// -> "background-color:black; color:white"

// 3. set attributes 
// let q = document.querySelector("#b")
// -> undefined
// q
// -> <div id="b" style="background-color:yellow; color: darkred;">
// q.setAttribute("class","mastClass")
// -> undefined
// q
// -> <div id="b" class="mastClass" style="background-color:yellow; color: darkred;">
// q.setAttribute("class","Firstclass") if already attribute is there then old will be replace by the new value of the attribute
// -> undefined
// q
// -> <div id="b" class="Firstclass" style="background-color:yellow; color: darkred;">
//  you can use q.setAttribute("style","background-color:red") in order to deal with css

// 4. Classlist

// let q = document.querySelector("#c")
// -> undefined
// q
// -> <p id="c" class="firstClass secondClass">
// q.classList
// -> DOMTokenList [ "firstClass", "secondClass" ]
// q.classList.add("thirdClass")
// -> undefined
// q.classList
// -> DOMTokenList(3) [ "firstClass", "secondClass", "thirdClass" ]
// q.classList.remove("firstClass")
// -> undefined
// q.classList
// -> DOMTokenList [ "secondClass", "thirdClass" ]
// q.classList.toggle("secondClass")
// -> false
// q.classList
// -> DOMTokenList [ "thirdClass" ]
// q.classList.toggle("secondClass")
// ->true
// q.classList
// -> DOMTokenList [ "thirdClass", "secondClass" ]

// many more methods are there you can learn it from the mdn documentation or the codehelp.in website