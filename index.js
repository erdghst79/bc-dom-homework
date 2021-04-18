import docReady from "./utils/docReady";

docReady(() => {
  // DOM is loaded and ready for manipulation here
  // TODO: write your code here
  const root = document.getElementById("root");
  // remove next line

    const container = document.createElement('div');
    container.classList.add("container");
    root.append(container);

    const main = document.createElement('main');
    main.classList.add("row", "justify-content-center");
    container.append(main);

    const div1 = document.createElement('div');
    div1.classList.add("col-md-7", "col-lg-5",  "py-5");
    main.append(div1);

    const login = document.createElement('h2');
    login.classList.add("text-center");
    login.append("Login");
    div1.append(login);

    const form1 = document.createElement('form');
    form1.classList.add("row", "g-3");
    div1.append(form1);

    const div2 = document.createElement('div');
    div2.classList.add("col-12");
    form1.append(div2);

    const label1 = document.createElement('label');
    label1.classList.add("form-label");
  label1.htmlFor = "email";
    label1.append("Email ");
   div2.append(label1);
   
    const span1 = document.createElement('span');
    span1.classList.add("text-muted");
    label1.append(span1);
   
    const input1 = document.createElement('input');
    input1.classList.add("form-control");
    input1.setAttribute("type", "email");
    input1.setAttribute("placeholder", "you@example.com");
    div2.append(input1);

    const div3 = document.createElement('div');
    div3.classList.add("col-12");
    form1.append(div3);

    const label2 = document.createElement('label');
    label2.classList.add("form-label");
    label2.htmlFor = "password";
    label2.append("Password ");
    div3.append(label2);

    const span2 = document.createElement('span');
    span2.classList.add("text-muted");
    label2.append(span2);

    const input2 = document.createElement('input');
    input2.classList.add("form-control");
    input2.setAttribute("type", "password");
    input2.setAttribute("id", "password");
    div3.append(input2);

    const div4 = document.createElement('div');
    div4.classList.add("col-12");
    form1.append(div4);

    const button = document.createElement('button');
    button.classList.add("w-100", "btn", "btn-primary", "btn-lg");
    button.setAttribute("type", "submit");
    button.append("Submit");
    div4.append(button);
    button.addEventListener('click', buttonClick);

    function buttonClick() {
        form1.remove();
        const text = document.createElement('h3');
        text.classList.add("text-center");
        text.append(`You are logged in successfully as ${input1.value}`);

        container.append(text);
    }
     
     
});
