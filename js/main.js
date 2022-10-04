const links = [
    {
        label: "come follow me | october 2022 | 10-16",
        url: "cfm/2022-10-w03.html"
    }
]

let text = "";
links.forEach(myFunction);
function myFunction(item) {
    var li = document.createElement("li");
    var a = document.createElement("a")
    var label = document.createTextNode(item.label)
    li.appendChild(a);
    a.appendChild(label);
    a.title = label;
    a.href = item.url;
    document.getElementById("link_list").appendChild(li);
}